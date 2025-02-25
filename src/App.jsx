import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/homepage/Homepage";
import GetStarted from "./components/getstarted/getstarted";
import Footer from "./components/footer/footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/getstarted" element={<GetStarted/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
