import React from "react";
import { render } from "react-dom";

import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      credentials: {
        username: "",
        password: "",
      },
    };
  }

  handleChange = (e) => {
    return "";
  };

  handleSubmit = (e) => {
    return "";
  };

  render() {
    return (
      <div className="LoginPage">
        <form onSubmit={this.handleSubmit}>
          <input
            name="username"
            placeholder="Username"
            onChange={this.handleChange}
          />

          <input
            name="password"
            placeholder="Password"
            onChange={this.handleChange}
          />
          <button>Login</button>
        </form>
        {this.state.isLoading && (
          <div>
            <h3>Logging in</h3>
          </div>
        )}
      </div>
    );
  }
}

export default Login;
