import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import "./Nav.css"

class Nav extends React.Component {
  
  constructor (props) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }

  handleStateChange (state) {
    this.setState({menuOpen: state.isOpen})
  }

  closeMenu () {
    this.setState({menuOpen: false })
  }

  toggleMenu() { 
    this.setState({menuOpen: !this.state.menuOpen})
  }


  
  
  render() {
  return (
    // Pass on our props
    <div>
    <Menu isOpen = {this.state.menuOpen}
          onStateChange={(state)=> this.handleStateChange(state)}
    >

      <a className={window.location.pathname === "/"} onClick={() => this.closeMenu()}>
      <Link to="/">.</Link>
      </a>

      <a className={window.location.pathname === "/about"} onClick={() => this.closeMenu()}>
      <Link to="/about">About</Link>
      </a>

      <a className={window.location.pathname === "/map"} onClick={() => this.closeMenu()}>
      <Link to="/home">Home</Link>
      </a>

      <a className="menu-item" href="/favs">
        Favorites
      </a>

      <a className="menu-item" href="/saved">
        Saved Routes
      </a>

      <a className="menu-item" href="/contact">
        Contact
      </a>

      
    </Menu>
  
  </div>
  )
}

}

  

export default Nav;