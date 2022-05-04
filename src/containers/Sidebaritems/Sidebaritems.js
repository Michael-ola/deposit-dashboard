import React, {Component, Fragment}  from 'react';
import classes from './Sidebaritems.module.css';
import SidebarItem from "../../components/SidebarItem/SidebarItem";
import {FaHome} from 'react-icons/fa';
import {AiOutlineFile,AiOutlineGift,AiOutlineBank} from 'react-icons/ai';
import {FiSettings} from 'react-icons/fi';

class Sidebaritems extends Component {

    state={
           items: [
                { icon:<FaHome/>,itemName:"Home",active:true},
                { icon:<AiOutlineFile/>,itemName:"Deposits",active:false},
                { icon:<AiOutlineGift/>,itemName:"Offers",active:false},
                { icon:<AiOutlineBank/>,itemName:"Payments",active:false},
                { icon:<FiSettings/>,itemName:"Settings",active:false}
            ]
        }
    
    render() {

        const onClickHandler =(index)=>{
            let items=[...this.state.items];
            items.forEach((item,item_id)=>{
                if(item_id===index){
                    item.active=true;
                }
                else{
                    item.active=false;
                }
            });
            this.setState({items});
        };

        return (
            <div className={classes.container}>
               {
                this.state.items.map((item,index)=>{
                    return(
                        <Fragment key={item.itemName}>
                            <SidebarItem clicked={()=>{onClickHandler(index)}} icon={item.icon} itemName={item.itemName} status={this.state.items[index].active}/>
                        </Fragment>
                    )
                })
               }
            </div>
        )
    }
}

export default Sidebaritems
