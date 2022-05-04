import React, {Component}from 'react'
import classes from './ThemeButton.module.css'

class ThemeButton extends Component {
    state={
        clicked: false
    }
    render() {
        const onClickHandler=()=>{
            this.setState((prevState)=>{
                 return {clicked: !prevState.clicked}
                }
            );
        }
        
        return (
            <div onClick={()=>{onClickHandler(); this.props.clicked();}} style={this.state.clicked?{background:'white'}:{background:'#302c40'}} className={classes.container}>
                <span style={this.state.clicked?{marginLeft:'24px',background:'#302c40'}:{marginLeft:'3.7px',background:'#fff'}} className={classes.indicator} ></span>
            </div>
        )
    }
}

export default ThemeButton
