import React from 'react'
import classes from './AddButton.module.css'
import {FaPlus} from 'react-icons/fa'

const AddButton = () => {
    return (
        <div className={classes.container}><FaPlus style={{color:'#fff',fontSize:'1em'}}/></div>
    )
}

export default AddButton
