import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './Events.css';
import Navbar from './Navbar';
import Footer from './Footer';



function Events() {
  return (
    <>
      <Navbar />


      <div className="Evnets">



        <div className="Events-bg">

          <div className="Events-hed">
            <p>ALL YOU NEED TO KNOW</p>
            <h2>Events SSC</h2>
          </div>

          <div className="Events-path">
            <a href="/">Home</a>
            <p><b>|</b></p>
            <a href="/Events">Events Us</a>
          </div>

        </div>




        <div className="Events-card-bg">
          <div className="Events-cards">
            <div className="Events-card">
              <a href="/Event">
                <img src="/image/Events-1.jpg" alt="" />
                <h2>31st Night</h2>
              </a>
            </div>
          </div>



          <div className="Events-cards">
            <div className="Events-card">
            <a href="/Event">
              <img src="/image/Events-2.jpg" alt="" />
              <h2>RAMZAN</h2>
            </a>
            </div>
          </div>



          <div className="Events-cards">
            <div className="Events-card">
            <a href="/Event">
              <img src="/image/Events-3.jpg" alt="" />
              <h2>DIWALI</h2>
            </a>
            </div>
          </div>





          <div className="Events-cards">
            <div className="Events-card">
            <a href="/Event">
              <img src="/image/Events-4.jpg" alt="" />
              <h2>NATURE</h2>
            </a>
            </div>
          </div>



          <div className="Events-cards">
            <div className="Events-card">
            <a href="/Event">
              <img src="/image/Events-5.jpg" alt="" />
              <h2>HOME</h2>
            </a>
            </div>
          </div>



          <div className="Events-cards">
            <div className="Events-card">
            <a href="/Event">
              <img src="/image/Events-6.jpg" alt="" />
              <h2>CODE</h2>
            </a>
            </div>
          </div>
        </div>




      </div>




      <Footer />
    </>
  );
}

export default Events
