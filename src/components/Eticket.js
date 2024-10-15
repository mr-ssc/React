import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './Eticket.css';
import Navbar from './Navbar';
import Footer from './Footer';


function Eticket() {
    return (


        <>



            <Navbar />




            <div className="Event-ticket-book">


                <div className="Event-ticket-book-1">
                    <img src="/image/Events-1.jpg" alt=""/>
                        <h2>31ST NIGHT PARTY</h2>
                        <button>BOOK TICKET</button>
                        <p className="price">Rs. 550</p>
                        <p>warm to welcome you</p>
                        <h3>
                            <i className="fa-solid fa-calendar-days"></i> WHEN
                            &
                            WHERE <i className="fa-solid fa-location-dot"></i>
                        </h3>


                        <div className="dl">
                            <div className="book-date">
                                <h3 className="date-hed"> <i className="fa-solid fa-calendar-days"></i> DATE & TIME</h3>
                                <p className="date-info">Start Date: 11/10/2024</p>
                                <p className="date-info"> Satrt Time: 10:00 PM</p>
                            </div>

                            <div className="book-loc">
                                <h3 className="loc-hed"><i className="fa-solid fa-location-dot"></i> LOCATION</h3>
                                <p className="loc-info">MUMBAI , INDIA</p>
                            </div>
                        </div>
                </div>





            </div>






            <Footer />

        </>



    )



}



export default Eticket;


