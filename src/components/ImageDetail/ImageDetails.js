import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import Header from '../Header/container';
import Alert from '../Alert/container';
import "./style.css";

class ImageDetail extends Component {
  constructor(props) {
    super(props);
    this.state ={
      showAlert: false,
      message: '',
    }
  }
  addToFav = (imageDetails) => {
    const {addToFav} = this.props;
    addToFav(imageDetails);
    this.setState({
      showAlert: true,
      message: 'Added To Favourite',
    });
    setTimeout(()=>{
      this.setState({
        showAlert: false, 
        message: '',
      });
    },2000)
  }
  removeFromFav = (imageDetails) => {
    const {removeFromFav} = this.props;
    removeFromFav(imageDetails);
    this.setState({
      showAlert: true,
      message: 'Removed From Favourite'
    });
    setTimeout(()=>{
      this.setState({
        showAlert: false,
        message: '',
      });
    },2000)
  }

  render() {
    const {location} = this.props;
    const {imageDetail, fromFav} = location;
    const {showAlert, message} = this.state;
    return (
      <div>
        {showAlert && <Alert style={{color:'green', borderRadius:'5px'}} message={message} />}
        <Header />{
          imageDetail ?
          <div className="detail-container">
            <div className="detail-header">
              <div className="description">{imageDetail.description}</div>
              {!fromFav && <div className="add-to-fav" onClick={()=>this.addToFav(imageDetail)}>Add To Fav</div>}
              {fromFav && <div className="add-to-fav" onClick={()=>this.removeFromFav(imageDetail)}>Remove From Fav</div>}
            </div>
            <img src={imageDetail.urls.regular} alt = 'details' />
          </div> : null
        }
      </div>
    );
  }
}

export default withRouter(ImageDetail);
