import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './Gallery.css';
import Navbar from './Navbar';
import Footer from './Footer';



function Gallery() {
  return (
    <>
      <Navbar />




      <div className="Gallery">

        <div className="Gallery-bg">

          <div className="Gallery-hed">
            <p>ALL YOU NEED TO KNOW</p>
            <h2>Gallery HARMONI</h2>
          </div>

          <div className="Gallery-path">
            <a href="/">Home</a>
            <p><b>|</b></p>
            <a href="/Gallery">Gallery Us</a>
          </div>

        </div>




        <div className="Gallery-box">

          <div className="Gallery-box-hed">
            <h2><i>⭐⭐</i> Our Gallary <i>⭐⭐</i></h2>
          </div>



          <div className="Gallry-box-pic">
            <img src="/image/gallery-1.png" alt="" />
            <img src="/image/gallery-2.png" alt="" />
            <img src="/image/gallery-3.jpg" alt="" />
            <img src="/image/gallery-4.jpg" alt="" />
            <img src="/image/gallery-5.jpg" alt="" />
            <img src="/image/gallery-6.jpg" alt="" />
            <img src="/image/gallery-7.jpg" alt="" />
            <img src="/image/gallery-8.jpg" alt="" />
            <img src="/image/gallery-9.jpg" alt="" />

          </div>





        </div>


        <div className="Gallery-map">
          <h2><i>⭐⭐</i> Our map <i>⭐⭐</i></h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14757.319990716987!2d71.96291906171575!3d22.378913765800753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395ed5167f8e2f7d%3A0x77fb7058e731ddfb!2sDhandhuka%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1726313759745!5m2!1sen!2sin"
            width="1800" height="450" />

        </div>

        <div className="Gallery-off">
          <h2>300% off In June & July For Birthday Events</h2>
          <button>MAKE AN EVENT NOW</button>
        </div>

      </div>













      <Footer />
    </>
  );
}

export default Gallery
