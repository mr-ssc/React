import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './Signin.css';
import Navbar from './Navbar';




function Signin() {
    return (
        <>

            <Navbar />

            <div className="Signin">
                <div className="Signin-box">

                    <span className="Signin-borderLine"></span>
                    <form>
                        <h2>Sign In</h2>


                        <div className="Signin-inputBox">
                            <input type="text" required="required" />
                            <span>Enter Your Email</span>
                            <i></i>
                        </div>

                        <div className="Signin-inputBox">
                            <input type="text" required="required" />
                            <span>Enter Your Password</span>
                            <i></i>

                        </div>


                        <div className="Signin-checkbox-group">
                            <input type="checkbox" id="remember" name="remember" />
                            <label  for="remember">Remember me</label>
                        </div>


                        <div className="Sign-btn">
                            <button>Login</button>
                        </div>


                        <div className="Signin-links">
                            <a href="/ForgotPassword">Forgot Password</a>
                            <a href="/Signup">Sign Up</a>
                        </div>

                    </form>
                </div>
            </div>


        </>
    );
}

export default Signin
