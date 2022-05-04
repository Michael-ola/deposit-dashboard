import React from 'react'
import classes from './DepositsPane.module.css'
import themeContext from '../../context/theme-context'

const DepositsPane = () => {
    return (
        <themeContext.Consumer>{
            (context) =>(
                <section style={{background:context.secondary}} className={classes.container}>
                    <div style={{width:'30%'}}>PROPERTY</div>
                    <div style={{width:'13.333%'}}>MOVE IN DATE</div>  
                    <div style={{width:'13.333%'}}>RENT</div>
                    <div style={{width:'13.333%'}}>DEPOSIT</div>
                    <div style={{width:'30%'}}>STATUS</div>  
                </section>
            )
        }</themeContext.Consumer>
    )
}

export default DepositsPane
