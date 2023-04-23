import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
    const [showMediaIcons, setShowMediaIcons] = useState(false);

    return (
        <>
        <header>
            <nav>
                <div id="logo">
                    <h1>
                        <a href="index.html">
                            Krish<span>nansh</span>
                        </a>
                    </h1>
                </div>
                <div
                    className={
                        showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
                    }
                >
                    <ul id="navbar">
                        <li>
                            <a href="#home" className="active">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="#skill">Skills</a>
                        </li>
                        <li>
                            <a href="#project">Projects</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
                <div
                    className="menu-icon"
                    onClick={() => setShowMediaIcons(!showMediaIcons)}
                >
                    <i className="fa fa-bars"></i>
                </div>
            </nav>
        </header>
        </>
    );
}
export default Navbar;
