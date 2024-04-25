import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import MoreButtons from "./MoreButtons";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/morebuttons" element={<MoreButtons />} />
      </Routes>
    </Router>
  );
}

export default App;
