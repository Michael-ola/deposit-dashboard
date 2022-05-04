import React from 'react'
import classes from './PaymentStatus.module.css'

const PaymentStatus = (props) => {
    let color={};
    switch(props.status?props.status.toLowerCase():null) {
        case 'complete':
            color={background:'green'};
            break;
        case 'payment processed':
            color={background:'green'};
            break;
        case 'awaiting bank processing':
            color={background:'orange'};
            break;
        case 'expired no payment received':
            color={background:'red'};
            break; 
        case 'thief':
            color={background:'red'};
            break;
        default: 
            color={background:''}; 
    }
    return (
        <div style={color} className={classes.container}></div>
    )
}

export default PaymentStatus
