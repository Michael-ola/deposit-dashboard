import React, {Component} from 'react';
import classes from './PhotoInput.module.css';


class PhotoInput extends Component {
    render() {
        return (
            <div style={this.props.style} >
                <label htmlFor={this.props.input?"file-input":null} className={classes.label} ></label>
                <input id="file-input"  style={{display:'none'}} type="file" />
            </div>
        )
    }
}

export default PhotoInput;