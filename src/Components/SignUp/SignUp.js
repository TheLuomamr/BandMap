import React from "react";
import "./SignUp.css";
import './Images/Background.jpg';

function SignUp() {
    
    return (
        <div id="all">
        <h2 className="title">Chordinate</h2>
        <div id="login-box">
            <div className="left-box">
                <div id="signUp">
                    <h1>Chordinate</h1>
                    <hr></hr>
                    <h5>Discover Live Music</h5>
                    <h5>Without Ever Getting Lost</h5>
                </div>
                <input type='text-center' name= "username" placeholder="Username"/>
                <input type='text-center' name= "email" placeholder="Email"/>
                <input type='password-center' name= "password" placeholder="Password"/>
                <input type='password-center' name= "password2" placeholder="Retype Password"/>
                <input type='submit' name="signup-button" value="Sign Up"/>
                <p>Have An Account?<a href="LOG IN GOES HERE">Login</a></p>
                
            </div>
            <div className="right-box">
                <button className='social facebook'>Log In With Facebook</button>
                
                <button className="social twitter">Log In With Twitter</button> 
                
                <button className= "social google">Log In With Google</button>
            
           
            </div>
            <div className="or">OR</div>
        </div>
    </div>
   
)
    
}

export default SignUp; 
