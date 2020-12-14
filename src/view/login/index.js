import { useState } from "react";
import "./loginteste.scss";
import firebase from "../../config/firebase";
import "firebase/auth";
import { Link } from "react-router-dom";
function Login() {
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [msgTipo, setMsgTipo] = useState();

  function logar() {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, senha)
      .then(resultado => {
        setMsgTipo("sucesso");
      })
      .catch(error => {
        setMsgTipo("error");
      });
  }

  return (
    <div className="container d-flex align-center contentlogin">
      <div className="col-md-6 mx-auto">
        <div className="row text-center">
          <h3>Faça o login na sua conta</h3>
        </div>
        <form>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={e => setEmail(e.target.value)}
            />
            <div id="emailHelp" className="form-text"></div>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Senha
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              onChange={e => setSenha(e.target.value)}
            />
          </div>

          <div className="ms-login mx-auto text-center my-4 d-flex flex-column">
            {msgTipo === "sucesso" && (
              <span className="text-success success">
                Login afetuado com sucesso &#773773;
              </span>
            )}
            {msgTipo === "error" && (
              <span className="text-danger danger">
                Dados não estão corretos, verifique e tente novamente
              </span>
            )}
          </div>
          <button
            type="button"
            onClick={logar}
            className="btn btn-primary mx-auto text-center"
          >
            Entrar na minha conta
          </button>
        </form>

        <div className="d-flex m-4  align-center  mx-auto d-flex  justify-content-around ">
          <p className="text-gray">Ainda não tem uma conta?</p>
          <Link to="novoUsuario" class="link-secondary">
            Me cadastrar
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Login;
