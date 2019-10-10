import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./style.css";

class Header extends Component {
  render() {
    return (
      <div className="header-container">
          <Link className="header-item" to='/'>Home</Link>
          <Link className="header-item" to='/fav'>Favourite</Link>
      </div>
    );
  }
}

export default Header;
