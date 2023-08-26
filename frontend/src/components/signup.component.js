import React, { Component } from "react";
export default class SignUp extends Component {
  render() {
    return (
      <form method="POST" action="new_data_entry.php">
        <h3>Sign Up</h3>
        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            name="firstname"
            className="form-control"
            placeholder="First name"
          />
        </div>
        <div className="mb-3">
          <label>Last name</label>
          <input
            type="text"
            name="lastname"
            className="form-control"
            placeholder="Last name"
          />
        </div>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            name="emailid"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            nams="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="mb-3">
          <label>Confirm Password</label>
          <input
            type="password"
            nams="confirm_password"
            className="form-control"
            placeholder="Enter confirm password"
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
      </form>
    );
  }
}
