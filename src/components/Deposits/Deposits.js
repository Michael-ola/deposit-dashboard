import React, {Component, Fragment} from 'react'
import DepositDetails from '../DepositDetails/DepositDetails'
import classes from './Deposits.module.css'
import image1 from '../../assets/images/images.jpg';
import image2 from '../../assets/images/images2.jpg';
import image3 from '../../assets/images/images3.jpg';
import image4 from '../../assets/images/download.jpg';
import image5 from '../../assets/images/download2.jpg';
import image6 from '../../assets/images/download3.jpg';

class Deposits extends Component{

    render(){
        const activeDeposits=[
            {
                image:image1,
                address:'ajayi crescent, maitama',
                address_meta:'abuja',
                move_in_date: '12 august, 2024',
                rent:'#500,000',
                deposit:'#113,000',
                status:'awaiting bank processing'
            },
            {
                image:image2,
                address:'banana island, lekki',
                address_meta:'lagos',
                move_in_date: '1 june, 2022',
                rent:'#1000,000',
                deposit:'#700,000',
                status:'awaiting bank processing'
            },
            {
                image:image3,
                address:'london estate, Yaba',
                address_meta:'lagos',
                move_in_date: '13 april, 2021',
                rent:'#100,000',
                deposit:'#100,000',
                status:'complete'
            }
        ]

        const closedDeposits=[
            {
                image:image4,
                address:'bosso, minna',
                address_meta:'Niger',
                move_in_date: '19 february, 2025',
                rent:'#200,000',
                deposit:'#120,000',
                status:'complete'
            },
            {
                image:image5,
                address:'amen estate, lekki',
                address_meta:'lagos',
                move_in_date: '16 march, 2030',
                rent:'#1500,000',
                deposit:'#1000,000',
                status:'payment processed'
            },
            {
                image:image6,
                address:'area 11, Garki',
                address_meta:'abuja',
                move_in_date: '12 november, 2019',
                rent:'#250,000',
                deposit:'#88,000',
                status:'awaiting bank processing'
            }
        ]

         const depositLoop=(depositCategory)=>{
             let depositHolder=[];
            for (let index = 0; index < (this.props.show==='all'?depositCategory.length:2); index++) {
                const deposit = depositCategory[index];
                depositHolder.push(<DepositDetails key={index} image={deposit.image} address={deposit.address} address_meta={deposit.address_meta}
                move_in_date={deposit.move_in_date} rent={deposit.rent} deposit={deposit.deposit} status={deposit.status}/>) 
            }
            return depositHolder;
        }

        return (
            <div className={classes.container}>{
                this.props.status==='active' ?
                <Fragment>{
                    depositLoop(activeDeposits).map((deposit)=>{
                        return deposit;
                    })
                }</Fragment>
                 :
                 <Fragment>{
                    depositLoop(closedDeposits).map((deposit)=>{
                        return deposit;
                    })
                }</Fragment>
            }</div>
        )
    }
}

export default Deposits
