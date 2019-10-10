import React, { Component } from "react";
import Card from '../Home/Card';
import Header from '../Header/container';
import "./style.css";

class Fav extends Component {
  render() {
      const  {fav} = this.props;
      return (
        <div>
          <Header />
          <div className="container">{
            fav.length ?
            fav.map((img, index)=> <Card key = {index} img = {img} fromFav={true}/>)
            : <div style={{textAlign: 'center', marginTop: '10%'}}>Nothing in favourite</div>
          }
          </div>
        </div>
      );
  }
}

export default Fav;
