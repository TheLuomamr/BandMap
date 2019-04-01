import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import Nav from "./Components/Nav/Nav"
//import Container from "./Components/Container/Container"
//import Wrapper from "./Components/Wrapper/Wrapper"
import Searchbar from "./Components/Searchbar/Searchbar"
import SignUp from "./Components/SignUp/SignUp";
import './App.css';
import MyMapComponent from './Components/MyMapComponent/MyMapComponent';

const App = () => 
  <Router>
    <div>
        <SignUp />
        <Nav />
        <MyMapComponent />
        {/* <Searchbar /> */}
    </div>
  </Router>


export default App;