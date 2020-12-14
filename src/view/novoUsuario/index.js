import { useState } from "react";

import "./novoUsuario.scss";
import firebase from "../../config/firebase";
import "firebase/auth";
import { Link } from "react-router-dom";

function NovoUsuario() {
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [msgTipo, setMsgTipo] = useState();
  const [msg, setMsg] = useState();
  const [carregando, setCarregando] = useState();

  function cadastrar() {
    setMsgTipo(null);
    setCarregando(1);

    if (!email || !senha) {
      setMsgTipo("erro");
      setMsg("Preencha os campos corretamente!");
      return;
    }

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, senha)
      .then(resultado => {
        setCarregando(0);
        setMsgTipo("sucesso");
      })
      .catch(erro => {
        setMsgTipo("erro");
        setMsg(`${erro}`);
        setTimeout(function() {
          setCarregando(0);
        }, 1000);
      });
  }

  return (
    <div className="container formCadastro d-flex justify-content-center mt-4 mx-auto">
      <div className="col-md-6">
        <h2 className="text-center my-4">Faça seu cadastro</h2>
        <form action="">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Email
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Senha
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="crie uma senha"
              onChange={e => setSenha(e.target.value)}
            />
          </div>
          <div class="mb-3">
            {carregando ? (
              <div class="text-center">
                <div class="spinner-border" role="status">
                  <span class="visually-hidden">Carregando...</span>
                </div>
                espera ai brow
              </div>
            ) : (
              <button
                type="button"
                className="btn btn-outline-primary"
                onClick={cadastrar}
              >
                Cadastrar
              </button>
            )}
          </div>
        </form>

        {msgTipo === "sucesso" && (
          <p className="text-success success">Cadastro realizado com sucesso</p>
        )}
        {msgTipo === "erro" && <p className="text-danger danger">{msg}</p>}
      </div>

      <div className="d-flex m-4  align-center  mx-auto d-flex  justify-content-around ">
        <p className="text-gray">Já tem uma conta?</p>
        <Link to="/" class="link-secondary">
          Entrar na minha conta
        </Link>
      </div>
    </div>
  );
}
export default NovoUsuario;
