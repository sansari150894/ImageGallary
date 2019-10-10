import React, { Component } from "react";
import "./App.css";
import Home from './components/Home/container';
import Fav from './components/Fav/container';
import ImageDetails from './components/ImageDetail/container';
import Auth from './components/Auth/container';
import AuthHoc from './Hoc/AuthHoc/AuthHoc';
import { Switch, Route } from 'react-router-dom';

const HomeWithAuth = AuthHoc(Home);
const FavWithAuth = AuthHoc(Fav);
const ImageDetailsWithAuth = AuthHoc(ImageDetails);
class App extends Component {
  componentWillMount(){
    const users = JSON.parse(window.localStorage.getItem('users'));
    const userData = JSON.parse(window.localStorage.getItem('userData'));
    if(!users) {
      window.localStorage.setItem('users', JSON.stringify([]));
    }
    if(!userData) {
      window.localStorage.setItem('userData', JSON.stringify({
        isLogin: false,
      }));
    }
  }
  render() {
    return (
      <Switch>
        <Route exact path='/' component={HomeWithAuth}/>
        <Route path='/fav' component={FavWithAuth}/>
        <Route path='/detail' component={ImageDetailsWithAuth}/>
        <Route path='/auth' component={Auth}/>
      </Switch>
    );
  }
}

export default App;
