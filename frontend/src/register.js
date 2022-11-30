import "./App.css";
import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      pass: "",
      register: false,
      isUS: false,
      userType: "",
      fName: "",
      lName: "",
      country: "",
      address: "",
      city: "",
    };
  }

  handleChange(event, stateValue) {
    this.setState({ value: event.target.value });
  }
  render() {
    return (
      <div className="app">
        <div className="login-form">
          <div className="title">Register</div>
          <div className="App">
            <form>
              {/* add on submit*/}
              <div className="input-container">
                <label>First Name</label>
                <input
                  name="fName"
                  type="text"
                  value={this.state.fName}
                  onChange={(e) => {
                    this.setState({ user: e.target.value });
                  }}
                  required
                />
              </div>
              <div className="input-container">
                <label>Last Name</label>
                <input
                  name="lName"
                  type="text"
                  value={this.state.lName}
                  onChange={(e) => {
                    this.setState({ lName: e.target.value });
                  }}
                  required
                />
              </div>
              <div className="input-container">
                <label>Email </label>
                <input
                  name="uname"
                  type="text"
                  value={this.state.email}
                  onChange={(e) => {
                    this.setState({ email: e.target.value });
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
              <div className="input-container">
                <label>Country</label>
                <input
                  name="country"
                  type="text"
                  value={this.state.country}
                  onChange={(e) => {
                    this.setState({ country: e.target.value });
                  }}
                  required
                />
              </div>

              <div className="input-container">
                <label>Address</label>
                <input
                  name="address"
                  type="text"
                  value={this.state.address}
                  onChange={(e) => {
                    this.setState({ address: e.target.value });
                  }}
                  required
                />
              </div>
              <div className="input-container">
                <label>City</label>
                <input
                  name="city"
                  type="text"
                  value={this.state.city}
                  onChange={(e) => {
                    this.setState({ city: e.target.value });
                  }}
                  required
                />
              </div>
              {/* <div className="input-container">
                <label>State</label>
                <input
                  name="fName"
                  type="text"
                  value={this.state.user}
                  onChange={(e) => {
                    this.setState({ user: e.target.value });
                  }}
                  required
                />
              </div> */}
              <div style={{ paddingLeft: "10px" }}>
                <label>User Type</label>
                <Box sx={{ width: 175 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">N/A</InputLabel>
                    <Select
                      name="userType"
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={this.state.userType}
                      label="User Type"
                      onChange={(e) => {
                        this.setState({ userType: e.target.value });
                      }}
                    >
                      <MenuItem value={"Donor"}>Donor</MenuItem>
                      <MenuItem value={"Recipient"}>Recipient</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </div>
              <div className="button-container">
                <input type="submit" />
              </div>
              <br />
              {/* <div style={{ paddingLeft: "65px" }}>
                <button
                  type="button"
                  onClick={() => {
                    this.setState({ register: true });
                  }}
                >
                  Register
                </button>
              </div> */}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
