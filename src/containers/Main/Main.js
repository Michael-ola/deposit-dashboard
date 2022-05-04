import React, {Component} from 'react'
import classes from './Main.module.css'
import DepositStatus from '../../components/DepositStatus/DepositStatus'
import DepositsPane from '../../components/DepositsPane/DepositsPane'
import Deposits from '../../components/Deposits/Deposits'
import DepositsListButton from '../../components/DepositsListButton/DepositsListButton'
import AddButton from '../../components/AddButton/AddButton'
import themeContext from '../../context/theme-context'


class Main extends Component {

    state={
        showAllActiveDeposits:false,
        showAllClosedDeposits:false
    }
    activeButtonClickedHandler=()=>{
        this.setState((prevState)=>{
            return {showAllActiveDeposits:!prevState.showAllActiveDeposits}
        })
    }
    closedButtonClickedHandler=()=>{
        this.setState((prevState)=>{
            return {showAllClosedDeposits:!prevState.showAllClosedDeposits}
        })
    }
    render() {
        return (
            <themeContext.Consumer>{
                (context) =>(
                    <section style={{background: context.primary,color: context.textColor,transition: context.transition}} className={classes.container}>
                        <AddButton/>
                        <div className={classes.deposits_container}>
                            <DepositStatus status='active' />
                            <DepositsPane/>
                            <Deposits status='active' show={this.state.showAllActiveDeposits?'all':2} />
                            <DepositsListButton clicked={this.activeButtonClickedHandler}>ALL ACTIVE DEPOSITS</DepositsListButton>
                        </div>
                        
                        <div className={classes.deposits_container}>
                            <DepositStatus status='closed' />
                            <DepositsPane/>
                            <Deposits status='closed' show={this.state.showAllClosedDeposits?'all':2}/>
                            <DepositsListButton clicked={this.closedButtonClickedHandler}>ALL CLOSED DEPOSITS</DepositsListButton>
                        </div>
                    </section>
                )
            }</themeContext.Consumer>
        )
    }
}

export default Main
