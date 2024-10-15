import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './ForgotPassword.css';
import Navbar from './Navbar';

function ForgotPassword() {
    return (

        <>

            <Navbar />


            <div className="ForgotPassword">
                <div className="ForgotPassword-box">

                    <span className="ForgotPassword-borderLine"></span>
                    <form>
                        <h2>Forgot Password</h2>

                        <div className="ForgotPassword-inputBox">
                            <input type="text" required="required" />
                            <span>Enter Your Name*</span>
                            <i></i>
                        </div>


                        <div className="ForgotPassword-inputBox">
                            <input type="text" required="required" />
                            <span>Enter Your Email*</span>
                            <i></i>
                        </div>

                        <div className="ForgotPassword-gender">
                            <input type="radio" />Female
                            <input type="radio" />Male
                            <input type="radio" />other
                        </div>

                        <div className="ForgotPassword-inputBox">
                            <input type="text" required="required" />
                            <span>Enter Your Phone Number*</span>
                            <i></i>
                        </div>



                        <div className="ForgotPassword-checkbox-group">
                            <input type="checkbox" id="remember" name="remember" />
                            <label for="remember">Remember me</label>
                        </div>


                        <div className="ForgotPassword-btn">
                            <button>CHANGE</button>
                        </div>


                    </form>
                </div>
            </div>

        </>
    );
}

export default ForgotPassword
