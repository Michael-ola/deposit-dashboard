import React from 'react'
import classes from './DepositsListButton.module.css'

const DepositsListButton = (props) => {
    return (
        <div onClick={props.clicked} className={classes.container}><span style={{cursor: 'pointer'}} >{props.children}</span></div>
    )
}

export default DepositsListButton
