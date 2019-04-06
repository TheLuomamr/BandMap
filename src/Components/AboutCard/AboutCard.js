import React from "react"
import "./AboutCard.css"

export default class Card extends React.Component {

    render () {
  
      return (
        <div
          className="about-card">
          <h1>About</h1>
         <p>
          Chordinate is an app for music fans and travelers alike. We want to provide a way to explore both new 
          places and new music around the world. Find new music without losing your way, and plan your next trip
          with us!
        </p>
         
        </div>
      )
    }
  }