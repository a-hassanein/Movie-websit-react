import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import NavBar from "./pages/NavBar"
import Movie from "./pages/Movie"
import Home from "./pages/Home"
import Footer from "./pages/Footer"
import LoginForm from "./pages/Loginform"
import Registerform from "./pages/Registerform"



function App() {
  return (
    <>
    <Router>
      <NavBar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/movie/:id" component={Movie} exact />
          <Route path="/signin" component={LoginForm} exact />
          <Route path="/signup" component={Registerform} exact />
        </Switch>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
