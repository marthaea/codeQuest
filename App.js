import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import IdeaBoard from "./pages/IdeaBoard";
import Project from "./pages/Project";
import Collaborate from "./pages/Collaborate";
import Portfolio from "./pages/Portfolio";
import Settings from "./pages/Settings";
import Login from "./pages/Login";


function App () {
  return (
    <Router>
      <footer className="footer"></footer>
        <Navbar />
        <Routes>
          <Route path="/" element = {<Home/>} />
          <Route path="ideaboad" element={<IdeaBoard/>} />
          <Route path="projects" element={<Project />} />
          <Route path="collaborate" element={<Collaborate />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="settings" element={<Settings />} />
          <Route path="login" element={<Login/>} />
        </Routes>
      <footer/> 
    </Router>
  );
}
export default App;