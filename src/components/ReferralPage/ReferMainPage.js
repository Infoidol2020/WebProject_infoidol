import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { hitlotteryAPI } from '../../redux/Lottery'
import { hitreferralWalletAPI } from '../../redux/ReferralWallet/ReferralWalletAction'
import {fetchUPIInfomation} from '../../redux/AddUPI/AddUPIAction'
import {hitBeneficiaryList} from '../../redux/BeneficiaryList/BeneficiaryListAction'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import Refer from './Refer'
import './ReferMainPage.css'

const ReferMainPage = (props) => {

    // console.log('props from Refer Main Page',props)
    return (
        <div>
            <Sidebar/>
            <Navbar/>
            <div className="ReferAndWallet" >
                <div className="RefWalletWrapper" style={{display: 'flex'}}>
                    <Refer {...props}/>
                </div>
                
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    // console.log('stateeeeee from refer page', state);
    return{ 
        ApiFromReferralWallet: state,
        ApiFromLottery: state
    }
}
const mapDispatchToProps = dispatch => {
    return {
        hitreferralWalletAPI : () => dispatch(hitreferralWalletAPI()),
        hitlotteryAPI : (lotteryType) => dispatch(hitlotteryAPI(lotteryType)),
        fetchUPIInfomation :(UserdataUPI) => dispatch(fetchUPIInfomation(UserdataUPI)),
        hitBeneficiaryList :() => dispatch(hitBeneficiaryList())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ReferMainPage)
// export default ReferMainPage
