import React, {Component} from "react";
import Auth from '../../components/Auth/container';
import { connect } from 'react-redux';

const mapStateToProps = ({auth}) => ({
    userData: auth.userData,
});
const mapDispatchToProps = dispatch => ({
    
});

class AuthPres extends Component {
  render() {
    const {userData, children} = this.props;
    return (
      <div>{
        userData.isLogin ? <div>{children}</div> : <Auth/>
      }</div>
    );
  }
}

const AuthContainer = connect(mapStateToProps, mapDispatchToProps)(AuthPres);

function AuthHoc (Comp) {
    return class extends Component {
      render() {
        return <div><AuthContainer><Comp/></AuthContainer></div>
      }
    }
}

export default AuthHoc;
