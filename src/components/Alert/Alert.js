import React, {Component} from 'react';
import './style.css';

class Alert extends Component {
    render(){
        const {style, message} = this.props;
        return(<div className="modal">
            <div className="modal-content" style= {style}>{message}</div>
        </div>)
    }
}

export default Alert;