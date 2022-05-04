import React, {Component} from 'react';
import classes from './SidebarItem.module.css';
import themeContext from '../../context/theme-context'

class SidebarItem extends Component {

   render() {
    const activeStyle=(context)=>this.props.status?{
        color: context.activeMenu,
        fontSize: '1.2em',
        fontWeight:'bold'
    }:null

    return (
        <themeContext.Consumer>{
            (context) => (
                <div onClick={this.props.clicked} className={classes.container}>
                    <span style={{width:'2%',background:context.header}} className={this.props.status?classes.active:""}></span>
                    <div style={{paddingLeft:"7%"}}>
                        <i style={{color:context.textColor}} >{this.props.icon}</i> 
                        <span style={{marginLeft:"15px",cursor:'pointer',color:context.textColor,...activeStyle(context),transition:context.transition}}>{this.props.itemName}</span>
                    </div> 
                </div>
            )
        }</themeContext.Consumer>
    )
   }
}

export default SidebarItem
