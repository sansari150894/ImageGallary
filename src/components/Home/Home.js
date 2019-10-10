import React, { Component } from "react";
import Card from './Card';
import Header from '../Header/container';
import "./style.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.state = {
      isHovering: false,
    };
  }

  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering,
    };
  }

  componentDidMount() {
    const {fetchImage} = this.props;
    fetchImage({pageNumber: 1});
  }
  render() {
    const {images, addToFav} = this.props;
    return (
        <div>
          <Header/>
          <div className="container">{
            images.map((img, index)=> <Card key = {index} img = {img} addToFav={addToFav}/>)}
          </div>
        </div>
    );
  }
}

export default App;
