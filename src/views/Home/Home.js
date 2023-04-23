import "./Home.css";
import image12 from "./img1.png";

import React from "react";
function Home() {
  return (
    <>
    <section id="home">
      <div className="wrap">
        <div className="textbox">
          <div>
            <h2>Hi I'm </h2>
            <h1>Krishnansh Tiwari</h1>
            <span>Full Stack Developer&nbsp;&nbsp;</span>
            <span>Comptetive coder</span>
          </div>
        </div>
        <div className="imagebox">
          <img src={image12} width="100%" height="auto" alt="img" />
        </div>
      </div>
      </section>
    </>
  );
}
export default Home;
