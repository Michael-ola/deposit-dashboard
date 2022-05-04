import React, {Component} from 'react'
import Main from '../Main/Main'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'
import classes from './Layout.module.css'
import ThemeButton from '../ThemeButton/ThemeButton'
import themeContext from '../../context/theme-context'
import webFont from 'webfontloader'

class Layout extends Component {
    state={
        changeTheme:false
    }

    componentDidMount(){
        webFont.load({
            google:{
                families:['Montserrat Alternates','open sans']
            }
        })
    }

    render() {
        const themeChangeHandler=()=>{
            this.setState({changeTheme:!this.state.changeTheme})
        }

        const globalStyle={
            transition: 'all 0.2s linear',
            sidebarGradient:'linear-gradient(122deg, rgba(128,74,216,1) 0%, rgba(98,75,217,1) 100%)'
        }
        const lightTheme={
            textColor:'#585280',
            primary:'#fff',
            secondary:'#f8f8f8',
            activeMenu:'#585280',
            header:'#585280',
            ...globalStyle
        }
        const darkTheme={
            colorwhite: '#fff',
            darkColor:'#585280',
            textColor:'#fff',
            primary:'#302c40',
            secondary:'#2c2839',
            activeMenu:'#fff',
            header:'#fff',
            ...globalStyle
        }

        return (
            <themeContext.Provider value={this.state.changeTheme?darkTheme:lightTheme}>
                <div className={classes.container}>
                    <ThemeButton clicked={themeChangeHandler}/>
                    <div className={classes.leftSection}>
                        <Sidebar/>
                    </div>
                    <div className={classes.rightSection}>
                        <Navbar/>
                        <Main/>
                    </div>
                </div>
            </themeContext.Provider>
        )
    }
}

export default Layout
