import React from 'react'
import PhotoInput from '../../containers/PhotoInput/PhotoInput'
import classes from './DepositDetails.module.css'
import PaymentStatus from '../PaymentStatus/PaymentStatus'

const Deposit = (props) => {
    const style={
        width: '40px',
        height: '40px',
        marginRight: '5%',
        display: 'inline-block',
        borderRadius: '50%',
        background:`url(${props.image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }
    return (
        <div className={classes.container}>
            <div style={{width:'30%'}} className={classes.property_container}>
                <PhotoInput style={style} input={false}/>
                <div className={classes.address_container}>
                    <div style={{fontSize:'1.1em',fontWeight:'bold'}}>{props.address}</div>
                    <div style={{fontWeight:'normal'}}>{props.address_meta}</div>
                </div>
            </div> 
            <div style={{width:'13.333%',textTransform:'capitalize'}}>{props.move_in_date}</div>  
            <div style={{width:'13.333%'}}>{props.rent}</div>
            <div style={{width:'13.333%'}}>{props.deposit}</div>
            <div style={{width:'30%',display:'flex'}}>
                <span className={classes.status}>{props.status}</span>
                <PaymentStatus status={props.status}/>
            </div>  
        </div>
    )
}

export default Deposit
