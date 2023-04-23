import React from "react";
import "./ProjectBox.css";
function ProjectBox(props) {
  return (
    <>
      <div>
        <div className="Project-container">
          <h2>{props.item[0].title}</h2>

          <p>{props.item[0].description}</p>
          <a
            href="https://word-vault-eight.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            See Project
            <i className="fas fa-arrow-right"></i>
          </a>
          <a
            href="https://github.com/KrishnanshTiwari/WordVault"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Repo
            <i className="fas fa-arrow-right"></i>
          </a>
        </div>
        <div className="Project-container">
          <h2>{props.item[1].title}</h2>

          <p>{props.item[1].description}</p>
          <a
            href="https://tasktrek-new-u6qu.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            See Project
            <i className="fas fa-arrow-right"></i>
          </a>
          <a
            href="https://github.com/KrishnanshTiwari/TASKTREK-new"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Repo
            <i className="fas fa-arrow-right"></i>
          </a>
        </div>

        <div className="Project-container">
          <h2>{props.item[2].title}</h2>

          <p>{props.item[2].description}</p>
          <a
            href="https://imager-flht-git-main-krishnanshtiwari.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            See Project
            <i className="fas fa-arrow-right"></i>
          </a>
          <a
            href="https://github.com/KrishnanshTiwari/Imager"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Repo
            <i className="fas fa-arrow-right"></i>
          </a>
        </div>
        
      </div>
    </>
  );
}
export default ProjectBox;
