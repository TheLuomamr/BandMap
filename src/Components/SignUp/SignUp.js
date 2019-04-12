import React, { Component } from "react";
import "./SignUp.css";
import './Images/Background.jpg';

class SignUp extends Component {
    // Setting the component's initial state
    state = {
      username: "",
      email: "",
      password: ""
    };
  
    handleInputChange = event => {
      // Getting the value and name of the input which triggered the change
      let value = event.target.value;
      const name = event.target.name;
  
      if (name === "password") {
        value = value.substring(0, 15);
      }
      // Updating the input's state
      this.setState({
        [name]: value
      });
    };
  
    handleFormSubmit = event => {
      // Preventing the default behavior of the form submit (which is to refresh the page)
      event.preventDefault();
      if (!this.state.username || !this.state.email) {
        alert("Create a username and enter your email address please!");
      } else if (this.state.password.length < 7) {
        alert(
          `Choose a more secure password ${this.state.username}`
        );
      } else {
        alert(`Welcome Aboard, ${this.state.username}!`);
      }
  
      this.setState({
        username: "",
        email: "",
        password: ""
      });
    };
  
    render(){
        
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
                        <form className="form">
                        <input
                            value={this.state.username}
                            name="username"
                            onChange={this.handleInputChange}
                            type="text-center"
                            placeholder="Username"
                        />
                        <input
                            value={this.state.email}
                            name="email"
                            onChange={this.handleInputChange}
                            type="text-center"
                            placeholder="Email"
                        />
                        <input
                            value={this.state.password}
                            name="password"
                            onChange={this.handleInputChange}
                            type="password-center"
                            placeholder="Password"
                        />                    
                        <button class="signup-button" onClick={this.handleFormSubmit}>Sign Up</button>
                        </form>
                        <p>Have An Account?<a href="LOG IN GOES HERE">Login</a></p>
                    </div>
                    <div className="right-box">
                        <button className='social facebook'>Login With Facebook</button>
                        <button className="social twitter">Login With Twitter</button> 
                        <button className= "social google">Login With Google</button>
                        <button onClick={() => window.location = 'https://bandmap-backend.herokuapp.com' } className= "social spotify">Login With Spotify</button>
                    </div>
                    <div className="or">OR</div>
                </div>
            </div>
        )
    };

}
export default SignUp; 
