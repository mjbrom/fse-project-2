import "./App.css";
import React from "react";
import Register from "./Register";
import Home from "./Home/Home";
import history from "../history";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      pass: "",
      register: false,
      userData: "",
      loggedIn: false,
      throwaway: false,
    };
    this.fetchItems();
    console.log(history);
  }

  handleChange(event, stateValue) {
    this.setState({ value: event.target.value });
  }

  fetchItems = async () => {
    const users = await fetch("/users");
    const data = await users.json();
    this.setState({ userData: data });
    console.log(data);
  };

  checkLogin() {
    let val = this.state.userData.find((el) => {
      return el.email === this.state.user;
    });
    if (val) {
      if (val.password === this.state.pass) {
        alert("Login successful");
        history.push({ pathname: "/homepage", state: val });
        window.localStorage.setItem("user", val.userType);
        this.setState({ loggedIn: true });
      } else {
        alert("Incorrect password");
      }
    } else {
      alert("Username and Password does not exist");
    }
    window.location.reload(false);
  }

  render() {
    return (
      <>
        {this.state.throwaway === false ? (
          <div className="app">
            <div className="login-form">
              <div className="title">Sign In</div>
              <div className="App">
                <form
                  onSubmit={(e) => {
                    this.checkLogin();
                    e.preventDefault();
                  }}
                >
                  {/* add on submit*/}
                  <div className="input-container">
                    <label>Email </label>
                    <input
                      name="uname"
                      type="text"
                      value={this.state.user}
                      onChange={(e) => {
                        this.setState({ user: e.target.value });
                      }}
                      required
                    />
                  </div>
                  <div className="input-container">
                    <label>Password </label>
                    <input
                      name="pass"
                      type="text"
                      value={this.state.pass}
                      onChange={(e) => {
                        this.setState({ pass: e.target.value });
                      }}
                      required
                    />
                  </div>
                  <div className="button-container">
                    <input type="submit" />
                  </div>
                  <br />
                </form>
              </div>
            </div>
          </div>
        ) : (
          <Home />
        )}
      </>
    );
  }
}

export default App;
