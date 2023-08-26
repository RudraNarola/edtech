import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./components/login.component";
import SignUp from "./components/signup.component";
function App() {
  return (
    <Router>
      /* logo company-name events alumni */
      <div>
        {/* logo on click should lead to homepage */}
        <Link to={"/sign-in"}>Edtech</Link>
        <div>
          <ul>
            <Link to={"/sign-in"}>Events</Link>
            <li>Alumni</li>
            <li>About Us</li>
            <li>Your Profile</li>
          </ul>
        </div>
      </div>
      <Routes>{/* <Route path="/sign-in" element={<Login />} /> */}</Routes>
    </Router>
  );
}
export default App;
