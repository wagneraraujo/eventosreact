import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./view/login";
import NovoUsuario from "./view/novoUsuario";
function App() {
  return (
    <Router>
      <Route exact path="/" component={Login} />
      <Route exact path="/novousuario" component={NovoUsuario} />
    </Router>
  );
}

export default App;
