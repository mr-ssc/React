import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './Contact.css';
import Navbar from './Navbar';
import Footer from './Footer';



function Contact() {
  return (
    <>
      <Navbar />



      <div className="Contact">
        <div className="Contact-bg">

          <div className="Contact-hed">
            <p>CONTACT US NOW</p>
            <h2>KEEP IN TOUCH</h2>
          </div>

          <div className="Contact-path">
            <a href="/">Home</a>
            <p><b>|</b></p>
            <a href="/Contact">Contact Us</a>
          </div>

        </div>
        <div className="Contact-effect">
          <div className="Contact-box">

            <span className="Contact-borderLine"></span>
            <form>
              <h2>Contact Us</h2>

              <div className="Contact-inputBox">
                <input type="text" required="required" />
                <span>Enter Your Name*</span>
                <i></i>
              </div>


              <div className="Contact-inputBox">
                <input type="text" required="required" />
                <span>Enter Your Email*</span>
                <i></i>
              </div>



              <div className="Contact-inputBox">
                <input type="text" required="required" />
                <span>Enter Your Country*</span>
                <i></i>
              </div>

              <div className="Contact-inputBox">
                <input type="text" required="required" />
                <span>Enter Your Phone Number*</span>
                <i></i>
              </div>

              <div className="Contact-inputBox">
                <input type="text" required="required" />
                <span>Password*</span>
                <i></i>
              </div>


              <div className="Contact-btn">
                <button>SEND</button>
              </div>


            </form>
          </div>
        </div>

        <div className="Gallery-map">
          <h2><i>⭐⭐</i> Our map <i>⭐⭐</i></h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14757.319990716987!2d71.96291906171575!3d22.378913765800753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395ed5167f8e2f7d%3A0x77fb7058e731ddfb!2sDhandhuka%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1726313759745!5m2!1sen!2sin"
            width="1800" height="450"  />

        </div>
      </div>


      <Footer />
    </>
  );
}

export default Contact
