import React, { Component } from 'react';
import './login.css';
import './Images/Background.jpg'

class Login extends Component{
    render(){
        return (
            <div id="all">
                <h2 className="title">Chordinate</h2>
                <div id="login-box">
                    <div className="left-box">
                        <div id="signUp">
                            <h1>Chordinate</h1>
                            <hr></hr>
                            <h5>Discover live music</h5>
                            <h5>without ever getting lost.</h5>
                        </div>
                        <input type='text-center' name= "username" placeholder="Username"/>
                        <input type='password-center' name= "password" placeholder="Password"/>
                        <button class="signup-button">Login</button>
                    </div>
                    <div className="right-box">
                        <button className='social facebook'>Login With Facebook</button>
                        
                        <button className="social twitter">Login With Twitter</button> 
                        
                        <button className= "social google">Login With Google</button>

                        <button onClick={() => window.location = 'https://bandmap-backend.herokuapp.com/login' } className= "social spotify">Login With Spotify</button>
                    </div>
                    <div className="or">OR</div>
                </div>
            </div>
        )
    }
}

export default Login;