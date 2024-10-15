import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './Home.css';
import Navbar from './Navbar';
import Footer from './Footer';




function Home() {
  return (
    <>
      <Navbar />

      <div className="Home">
        <div className="Home-bg">


          <div className="Home-bg-info">
            <h2>One Stop Event
              Planner</h2>
            <p>Yet bed any for travelling assistance indulgence
              unpleasing. Not thoughts all exercise blessing.
              Indulgence way everything joy alteration boisterous
              the attachment. Party we years to order allow asked
              of.
            </p>
            <div className="Home-email-info">
              <p>
                Fvery event should be Perfect
              </p>
            </div>



            <div className="Home-email">
              <div className="Home-email-i">
                <input type="text" placeholder="Your Email Address" />
              </div>
              <button className="button">Get Started</button>
            </div>
              
          </div>


          <div className="Home-avtar">
            <div className="avatars">
              <div className="avatar">
                <img src="image/Home-avtar-1.jpeg" alt="Avatar 1" />
              </div>
              <div className="avatar">
                <img src="image/Home-avtar-2.jpeg" alt="Avatar 2" />
              </div>
              <div className="avatar">
                <img src="image/Home-avtar-3.jpeg" alt="Avatar 3" />
              </div>
              <div className="avatar">
                <img src="image/Home-avtar-4.jpeg" alt="Avatar 4" />
              </div>
              <div className="avatar">
                <img src="image/Home-avtar-5.jpeg" alt="Avatar 5" />
              </div>
              <div className="avatar">
                <img src="image/Home-avtar-6.jpeg" alt="Avatar 6" />
              </div>
              <div className="avatar">
                <img src="image/Home-avtar-7.jpeg" alt="Avatar 7" />
              </div>
              <div className="Home-avtar-info">
                <p>2,000 people requested access a visit in last 24 hours</p>
              </div>
            </div>

          </div>


        </div>
      </div>




      <section>

        <div className="Home-page-2">

          <div className="Home-icon">
            <img src="image/Home-icon-1.png" alt="" />
            <img src="image/Home-icon-2.png" alt="" />
            <img src="image/Home-icon-3.png" alt="" />
            <img src="image/Home-icon-4.png" alt="" />
            <img src="image/Home-icon-5.png" alt="" />
            <img src="image/Home-icon-6.png" alt="" />
            <img src="image/Home-icon-7.png" alt="" />
          </div>



          <div className="Home-Harmoni-info-main">



            <div className="Home-Harmoni-info-mainn">
              <div className="Home-Harmoni-info-main-1">

                <p>What is Harmoni <br /> Event</p>

                <h2>Your Evevnt Will be Beyond your
                  imagination</h2>

              </div>
              <div className="Home-Harmoni-info-main-2">
                <p>We so opinion me message as delight.Whole front do of Plate heard oh ought. His defective nor
                  convinced
                  recidence own.Connection has put impossile own apartments boisterous.Atjointure ladyship an
                  insisted
                  so humanity he.Frierdly bechlour entrance to on by.</p>

                <a href="#">Explore the Library</a>
              </div>


              <div className="Home-Harmoni-container">
                <div className="Home-Harmoni-container-column">
                  <h3>Chatbots</h3>
                  <p>We so opinion friend me msj as delight. Whole front do of Plate heard oh ought.</p>
                </div>
                <div className="Home-Harmoni-container-column">
                  <h3>Knowledgebase</h3>
                  <p>At jointure ladyship an insisted so humanity he.Friendly bechlour entrance to on by.As
                    put
                    impossile ow
                    apartments b</p>
                </div>
                <div className="Home-Harmoni-container-column">
                  <h3>Education</h3>
                  <p>At jointure ladyship an insisted so he.Friendly bechlour entrance to on by.As put
                    impossile
                    ow apartments
                    b</p>
                </div>
              </div>
            </div>



            <section>
              <div className="Home-inquiry">
                <div className="Home-inquiry-1">
                  <h3>We so opinion Yet bed any for travelling assistance indulgence unpleasing. Not thoughts
                    all exercise blessing. Indulgence way everything joy alteration boisterous the
                    attachment. Party we years to order allow asked of....</h3>
                  <p>Request Early Access to get Started</p>
                </div>
                <div className="Home-inquiry-2">
                  <p>Photography</p>
                  <p>cinematography or
                    Videography service</p>
                  <p>Full venue Decoration
                    Service </p>
                  <p>Home Deøration</p>
                </div>
                <div className="Home-inquiry-3">
                  <p>A Team of 3 talented Photographers are ready to snap the
                    best moments of your ceremony</p>
                  <p>Creative full HD 1080p Video. a different space of your
                    ceremoney</p>
                  <p>A Blend of out-of-box ideas to decore your precious
                    date</p>
                  <p>just call us and get total event solution under one roof..</p>
                </div>
              </div>
            </section>

            <section>
              <div className="Home-request">
                <div className="Home-request-content">
                  <p>Request Early Access to get Started</p>
                  <h2>Registered Today & start exploring the endless possibilities.</h2>
                  <button className="button">GET STARTED</button>
                </div>
              </div>
            </section>





          </div>









        </div>
      

      </section>

      <Footer />

    </>
  );
}

export default Home
