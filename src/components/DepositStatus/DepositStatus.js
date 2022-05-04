import React from 'react';
import classes from './DepositStatus.module.css';
import DepositCounter from '../DepositCounter/DepositCounter';

const DepositStatus = (props) => {
    return (
        <div className={classes.container}>
            <div style={{textTransform: 'capitalize', marginRight:'10px',fontSize: '1.05em'}}>{props.status} Deposits</div>
            <DepositCounter status={props.status}/>
        </div>
    )
}

export default DepositStatus
