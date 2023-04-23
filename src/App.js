import React from "react";
import Navbar from "./Components/Navbar-folder/Navbar";
import Home from "./views/Home/Home";
import About from "./views/About/About";
import Skills from "./views/Skills/Skills";
import Project from "./views/Projects/Project";
import Conatct from "./views/Contacts/Contact";

import "./App.css";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Project />
      <Conatct />
    </div>
  );
}

export default App;
