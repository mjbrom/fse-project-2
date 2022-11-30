import React, { Component } from "react";
import Button from "@mui/material/Button";
import history from "../../history";
import Section from "../Section";
import dummyText from "../../DummyText";
import dummyText1 from "../../DummyText1";
import "./Home.css";

export default class Home extends Component {
  render() {
    if (!history.location.state) {
      history.push("/");
    }
    return (
      <div className="Home">
        <div className="lander">
          <h1>Home page</h1>
          <p>DBMS Langing Page</p>
          <form>
            <Button
            // variant="btn btn-success"
            // onClick={() => history.push("/Products")}
            >
              Click to learn More
            </Button>
          </form>
          <Section
            title="Request for Help (Recipients) "
            subtitle={dummyText}
            dark={true}
            id="section1"
          />

          <Section
            title="Response to Help (Donors) "
            subtitle={dummyText1}
            dark={true}
            id="section1"
          />
        </div>
      </div>
    );
  }
}
