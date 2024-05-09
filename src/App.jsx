import React from "react";
import Home from "./components/Home";
import Quiz from "./components/Quiz";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Finish from "./components/Finish";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/quiz/:subject" element={<Quiz />}></Route>
        <Route path="/finish/:score" element={<Finish />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
