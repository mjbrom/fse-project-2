import "./App.css";
import Nav from "./components/Nav";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home/Home";
import history from "./history";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import DisastorEvents from "./components/Events/Disastor Events";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router history={history}>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/homepage" exact component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Contact" component={Contact} />
          <Route path="/Services" component={Services} />
          <Route path="/Disastor" component={DisastorEvents} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
