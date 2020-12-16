import { useState } from "react";
import firebase from "../../config/firebase";
import "firebase/auth";
import { Link } from "react-router-dom";

function RecuperarSenha() {
    const [msg, setMsg] = useState();
    const [email, setEmail] = useState();

  function recuperarSenha(){
    
    firebase.auth().sendPasswordResetEmail(email).then(resultado => {
      setMsg('No seu email, vai chegar um link para recuperar sua senha');
    }).catch(
      erro => {
        setMsg('O email que você inseriu, está correto? E esse mesmo? ')
      }
    )
  }
      
  return (

    <div className="container formCadastro d-flex justify-content-center mt-4 mx-auto">
      <div className="col-md-6">
        <h2 className="text-center my-4">Recuperar Senha</h2>
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
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>


          <button type="button" className="btn btn-outline-secondary secondary" onClick={recuperarSenha}>Recuperar Senha</button>
        </form>
        <p>{msg}</p>
      </div>

      <div className="d-flex m-4  align-center  mx-auto d-flex  justify-content-around ">
        <p className="text-gray">Já tem uma conta?</p>
        <Link to="/login" class="link-secondary">
          Entrar na minha conta
        </Link>
      </div>
    </div>
  );
}
export default RecuperarSenha;
