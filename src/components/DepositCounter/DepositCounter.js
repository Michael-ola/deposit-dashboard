import React, {Component} from 'react'
import classes from './DepositCounter.module.css'
import themeContext from '../../context/theme-context'

class DepositCounter extends Component{
    render() {
        return (
            <themeContext.Consumer>{
                (context) =>(
                    <div style={{ background:context.colorwhite,color:context.darkColor}} className={classes.container}>
                        {this.props.status==='active'?3:this.props.status==='closed'?3:null}
                    </div>
                )
             }</themeContext.Consumer>
        )
    }
}

export default DepositCounter
