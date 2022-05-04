import React, {Component}  from 'react';
import classes from './Sidebar.module.css';
import PhotoInput from '../../containers/PhotoInput/PhotoInput';
import Sidebaritems from "../../containers/Sidebaritems/Sidebaritems";
import image from '../../assets/images/photo.jpg';
import themeContext from '../../context/theme-context'
import UserName from '../UserName/UserName'

class Sidebar extends Component {
    render() {
        const style={
            width: '100px',
            height: '100px',
            display: 'inline-block',
            borderRadius: '50%',
            background:`url(${image})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        }
        return (
            <themeContext.Consumer>
                {(context)=>(
                    <div style={{background:context.secondary,transition:context.transition}} className={classes.container}>
                        <div className={classes.PhotoInputContainer}>
                            <PhotoInput style={style} input={true}/>
                            <UserName>Michael Olaitan Ibitoye</UserName>
                        </div>
                        <Sidebaritems/>
                    </div>
                )}
            </themeContext.Consumer>
        )
    }
}

export default Sidebar
