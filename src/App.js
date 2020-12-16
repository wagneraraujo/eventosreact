import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../src/store";
import Login from "./view/login";
import NovoUsuario from "./view/novoUsuario";
import Home from "./view/home";
import RecuperarSenha from "./view/recuperar-senha";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/novousuario" component={NovoUsuario} />
        <Route exact path="/recuperar-senha" component={RecuperarSenha} />
      </Router>
    </Provider>
  );
}

export default App;
