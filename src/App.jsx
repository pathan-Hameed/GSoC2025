import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/homepage/Homepage";
import GetStarted from "./components/getstarted/getstarted";
import Footer from "./components/footer/footer";
import Timeline from "./components/timeline/timeline";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/getstarted" element={<GetStarted/>} />
        <Route path="/timeline" element={<Timeline />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
