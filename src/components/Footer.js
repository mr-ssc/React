import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './Footer.css';
import img from '../assets/Navbar-logo.jpg'



function Footer() {
    return (
      <>
    


    <div className="Footer">
        <div className="Footer-heding">
            <h2>Do you want to step in to the
                future of Your Upcoming Event</h2>
        </div>

        <div className="Footer-btn">
            <button>Request Early Access</button>
        </div>

       

    </div>

    <div className="Footer-end">
        <div className="Footer-end-1">
            <a href="#">
        <img src={img} alt="" /></a>
            <p>Crechterwoord K12182 <br/>
                All Right Reserved</p>
        </div>

        <div className="Footer-end-2">
            <ul>LINK
                <li><a href="#">Overons</a></li>
                <li><a href="#">Sæial Media</a></li>
                <li><a href="#">Counters</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>

        <div className="Footer-end-3">

            <ul>Company
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Contact</a></li>
            </ul>


        </div>

        <div className="Footer-end-4">
            <ul>Get in touch
                <p>Crechterwoord K12182 </p>
                <p>085-132567</p>
                <p>info@paymenet</p>

            </ul>
        </div>
    </div>
      </>
    );
  }
  
  export default Footer