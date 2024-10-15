import React from "react";
import './Navbar.css'
import img from '../assets/Navbar-logo.jpg'

function Navbar() {
    return (
        <>

            <div className="Navbar">
                <div className="Navbar-logo">
                    <a href="/">
                        <img src={img} alt="" />
                    </a>
                </div>
                <div className="Navbar-menu">
                    <ul>
                        <li>
                            <a href="/">HOME</a>
                        </li>

                        <li>
                            <a href="/About">ABOUT</a>
                        </li>

                        <li>
                            <a href="/Events">EVENTS</a>
                        </li>

                        <li>
                            <a href="/Gallery">GALLERY</a>
                        </li>

                        <li>
                            <a href="/Contact">CONTACT</a>
                        </li>
                    </ul>
                </div>

                <div className="Navbar-btn">
                <a href="/SignIn"> <button><i className="fa-solid fa-arrow-right-to-bracket"></i>  Sign In  </button></a>

                </div>
            </div>

        </>
    );
}

export default Navbar;