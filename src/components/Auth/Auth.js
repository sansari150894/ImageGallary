import React, { Component } from "react";
import "./style.css";

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
        screen: 'login',
    }
  }
  toggle(){
      this.setState({
          screen: this.state.screen === 'login' ? 'signup' : 'login',
      })
  }
  render() {
      const {onChange, singup, login} = this.props;
    return (
      <div className="auth-container">
        <div>{
            this.state.screen === 'login' ? 
            <div>
                <div className="heading">Login</div>
                <div className="form-container">
                    <input className="input" type="email" placeholder="email" 
                        onChange={(e)=>{onChange({key: "email", e: e, formType: 'login'})}}/>
                    <input className="input" type="password" placeholder="password" 
                        onChange={(e)=>{onChange({key: "password", e: e, formType: 'login'})}}/>
                    <button className="btn" onClick={()=>{login()}}>Login</button>
                </div>
            </div> : <div>
            <div className="heading">Signup</div>
                <div className="form-container">
                    <input className="input" type="text" placeholder="name" 
                        onChange={(e)=>{onChange({key: "name", e: e, formType: 'singup'})}}/>
                    <input className="input" type="email" placeholder="email" 
                        onChange={(e)=>{onChange({key: "email", e: e, formType: 'singup'})}}/>
                    <input className="input" type="password" placeholder="password" 
                        onChange={(e)=>{onChange({key: "password", e: e, formType: 'singup'})}}/>
                    <button className="btn" onClick={()=>{singup(); this.toggle()}}>Signup</button>
                </div>
            </div>
            
        }</div>
        <div className="subheading" onClick={()=>this.toggle()}>{this.state.screen === 'login' ? "Not having account singup" : "Already has account login" }</div>
      </div>
    );
  }
}

export default Auth;
