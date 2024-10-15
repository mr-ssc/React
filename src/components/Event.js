import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './Event.css';
import Navbar from './Navbar';
import Footer from './Footer';


function Event() {
    return (
        <>
            <Navbar />



            <div className="Event">
                <div className="Event-ticket">





                    <div className="Event-ticket-box">
                        <img src="/image/Events-1.jpg" alt="" />
                        <p>11/10/2024 , 10:00 AM</p>
                        <div className="Event-ticket-box-info">
                            <h2>31st NIGHT PARTY</h2>
                            <p>LOCATION :- INDIA</p>
                            <p>Rs. 550</p>
                            <a href="/Eticket"><button>BOOK TICKET <i className="fa-solid fa-arrow-right"></i></button></a>

                        </div>
                    </div>


                    <div className="Event-ticket-box">
                        <img src="/image/Events-2.jpg" alt="" />
                        <p>18/10/2024 , 2:00 PM</p>
                        <div className="Event-ticket-box-info">
                            <h2>31st NIGHT PARTY</h2>
                            <p>LOCATION :- SOUDI AREBIA</p>
                            <p>Rs. 800</p>
                            <a href="/Eticket"><button>BOOK TICKET <i className="fa-solid fa-arrow-right"></i></button></a>

                        </div>
                    </div>





                    <div className="Event-ticket-box">
                        <img src="/image/Events-3.jpg" alt="" />
                        <p>23/10/2024 , 10:00 AM</p>
                        <div className="Event-ticket-box-info">
                            <h2>DIWALI PARTY</h2>
                            <p>LOCATION :- DUBAI</p>
                            <p>Rs. 1,550</p>
                            <a href="/Eticket"><button>BOOK TICKET <i className="fa-solid fa-arrow-right"></i></button></a>

                        </div>
                    </div>




                    <div className="Event-ticket-box">
                        <img src="/image/Events-6.jpg" alt="" />
                        <p>31/10/2024 , 10:00 AM</p>
                        <div className="Event-ticket-box-info">
                            <h2>AWSOME CODE</h2>
                            <p>LOCATION :- USA</p>
                            <p>Rs. 5,500</p>
                            <a href="/Eticket"><button>BOOK TICKET <i className="fa-solid fa-arrow-right"></i></button></a>

                        </div>
                    </div>







                </div>
            </div>










            <Footer />







        </>

    );
}

export default Event;