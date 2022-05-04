import React from 'react'
import classes from './UserName.module.css'
import themeContext from '../../context/theme-context'

const UserName = (props) => {
    return (
        <themeContext.Consumer>{
            (context) =><div style={{color:context.textColor}} className={classes.container}>{props.children}</div>
        }</themeContext.Consumer>
    )
}

export default UserName
