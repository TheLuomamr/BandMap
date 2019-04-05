import React from 'react';
import { BrowserRouter as Router, /*Route, Switch*/ } from "react-router-dom"
// import Nav from "./Components/Nav/Nav"
//import Container from "./Components/Container/Container"
//import Wrapper from "./Components/Wrapper/Wrapper"
// import SignUp from "./Components/SignUp/SignUp";
// import About from "./pages/About";
import Login from "./Components/login/login";
import './App.css';
// import MyMapComponent from './Components/MyMapComponent/MyMapComponent';

const App = () => 
  <Router>
    <div>
        <Login/>
        {/* <SignUp /> */}
        {/* <Nav />
        <Switch>
          <Route exact path="/" component={SignUp}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/home" component={MyMapComponent}/>
        </Switch> */}
        {/* <MyMapComponent /> */}
    </div>
  </Router>


export default App;