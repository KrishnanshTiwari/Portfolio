import React from "react";
import './Contact.css';
function Conatct(){
    return (
        <>
        <footer className="Conatct" id="contact">
            <div className="Contact-Box">
                <h2>Stay Connected</h2>
                <div className="Contact-Container">
                    <a href="https://www.instagram.com/krishnansh84/" target="_blank" rel="noreferrer"><i className="fab fa-instagram" ></i></a>
                    <a href="mailto:krishnansht2003@gmail.com" target="_blank" rel="noreferrer"><i className="fa fa-envelope" ></i></a>
                    <a href="https://twitter.com/Krishnansht2003" target="_blank" rel="noreferrer"><i className="fab fa-twitter" ></i></a>
                    <a href="https://www.linkedin.com/in/krishnansh-tiwari-364b73252/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin" ></i></a>
                </div>
            </div>
        </footer>
        </>
    )
}
export default Conatct;