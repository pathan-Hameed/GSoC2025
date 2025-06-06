import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/homepage/Homepage";
import GetStarted from "./pages/getstarted/getstarted";
import Footer from "./components/footer/footer";
import Timeline from "./pages/timeline/timeline";
import Help from "./pages/help/help";
import Contact from "./components/footer/contact";
import About from "./pages/about/About";
import MoreBlogs from "./pages/moreBlogs/MoreBlogs";
import QA from "./pages/a&a/QA";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/getstarted" element={<GetStarted />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/About" element={<About />} />
        <Route path="/help" element={<Help />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/MoreBlogs" element={<MoreBlogs />} />
        <Route path="/QA" element={<QA />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
