import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./style.css";

class Card extends Component {
  render() {
    const {img, fromFav} = this.props;
    return (
        <Link to={{
          pathname: `/detail`,
          imageDetail: img,
          fromFav: fromFav
        }}>
          <div className="card">
              <img className="card-image" src={img.urls.regular} alt="index"/>
          </div>
        </Link>
    );
  }
}

export default Card;
