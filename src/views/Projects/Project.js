import React from "react";
import "./Project.css";
import ProjectBox from "../../Components/ProjectBox/ProjectBox";
function Project() {
  let detail = [
    {
      id: "i1",
      title: "WordVault",
      description: "A Web-based dictionary app built using HTML CSS and JS use AJAX to make asynchronous requests to the API. "
    },
    {
      id: "i2",
      title: "TaskTrek",
      description: "A Web based todo application which utilizes React and Firebase with functionalities like CRUD and User Authentication."
    },
    {
      id: "i2",
      title: "Imager",
      description: "A Image generation app which leverages OpenAI API to generate high-quality images based on user inputs. Users can also share these images on the community page."
    }
  ];
  return (
    <>
      <section className="Project" id="project">
        <div>
          <h1>Projects</h1>
          <ProjectBox item={detail} />
        </div>
      </section>
    </>
  );
}
export default Project;
