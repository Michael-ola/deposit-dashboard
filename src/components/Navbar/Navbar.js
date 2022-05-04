import React, {Component} from 'react'
import classes from './Navbar.module.css';
import PhotoInput from '../../containers/PhotoInput/PhotoInput'
import image from '../../assets/images/photo.jpg';
import {FiMail} from 'react-icons/fi'
import themeContext from '../../context/theme-context'

class Navbar extends Component {
    render() {
        const style={
            width: '35px',
            height: '35px',
            marginRight: '7%',
            marginLeft: '2%',
            display: 'inline-block',
            borderRadius: '50%',
            background:`url(${image})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        }

        return (
            <themeContext.Consumer>{
                (context) =>(
                    <div style={{background:context.primary,transition:context.transition}} className={classes.container}>
                        <FiMail style={{width:'20px',height:'20px',color:context.textColor}}/>
                        <PhotoInput style={style} input={false}/>
                    </div>
                )
            }</themeContext.Consumer>
        )
    }
}

export default Navbar
