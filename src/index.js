import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Components
import Home from "./components/Home.js";
import AdminDashboard from "./components/AdminDashboard.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/dashboard" element={<AdminDashboard />}></Route>
        <Route
          exact
          path="/dashboard/profile"
          element={<AdminDashboard menu="profile" />}
        ></Route>
        <Route
          exact
          path="/dashboard/compose"
          element={<AdminDashboard menu="compose" />}
        ></Route>
      </Routes>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
