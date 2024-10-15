import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './Signup.css';
import Navbar from './Navbar';

function Signup() {
    return (
        <>
            <Navbar />

            <div className="Signup">
        <div className="Signup-box">

            <span className="Signup-borderLine"></span>
            <form>
                <h2>Sign Up</h2>

                <div className="Signup-inputBox">
                    <input type="text" required="required"/>
                    <span>Enter Your Name*</span>
                    <i></i>
                </div>


                <div className="Signup-inputBox">
                    <input type="text" required="required"/>
                    <span>Enter Your Email*</span>
                    <i></i>
                </div>

                <div className="Signup-gender">
                    <input type="radio"/>Female
                    <input type="radio"/>Male
                    <input type="radio"/>other
                </div>

                <div className="Signup-inputBox">
                    <input type="text" required="required"/>
                    <span>Enter Your Phone Number*</span>
                    <i></i>
                </div>

                <div className="Signup-inputBox">
                    <input type="text" required="required"/>
                    <span>Password*</span>
                    <i></i>
                </div>

                <div className="Signup-inputBox">
                    <input type="text" required="required"/>
                    <span>Confirm Password*</span>
                    <i></i>
                </div>
                
                <div className="Signup-checkbox-group">
                    <input type="checkbox" id="remember" name="remember" />
                    <label for="remember">Remember me</label>
                </div>
                
                
                <div className="Signup-btn">
                    <button>Sign Up</button>
                </div>
                
                
                <div className="Signup-links">
                    <a href="/Signin">Already have an account? Sign In</a>
                </div>

            </form>
        </div>
    </div>

        </>

    );
}

export default Signup