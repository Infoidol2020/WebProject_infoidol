import React, { useRef,useEffect,useState }from 'react'
import './Lottery.css'
import rank from '../../assets/rank.png'

const Lottery = (props) => {
    // console.log('setting user list',props.ApiFromLottery.ReferralLottery.lotteryApi)
    const [topList,SettopList] = useState([])
    const[userList,setuserList] = useState([])
    // console.log('props from Lottery.js Page',props)
    const dailyLotterySection = useRef()
    // const weeklyLotterySection = useRef()
    // const monthlyLotterySection = useRef()

    const handleDailyLotteryClick = () => {
        dailyLotterySection.current.style.color="green"
        // weeklyLotterySection.current.style.display="none"
        // monthlyLotterySection.current.style.display="none"
        let lotteryType = 'daily';
        props.hitlotteryAPI(lotteryType)
        // console.log('daily')
    }
    const handleWeeklyLotteryClick = () => {
        dailyLotterySection.current.style.color="red"
        // weeklyLotterySection.current.style.display="block"
        // monthlyLotterySection.current.style.display="none"
        let lotteryType = 'Weekly';
        props.hitlotteryAPI(lotteryType)
        // console.log('Weekly')

    }
    const handleMonthlyLotteryClick = () => {
        dailyLotterySection.current.style.color="black"
        // weeklyLotterySection.current.style.display="none"
        // monthlyLotterySection.current.style.display="block"
        let lotteryType = 'Monthly';
        props.hitlotteryAPI(lotteryType)
        // console.log('Monthly')
    }
    // useEffect(() => {
    //     dailyLotterySection.current.style.display="block"
    //     weeklyLotterySection.current.style.display="none"
    //     monthlyLotterySection.current.style.display="none"
    // }, [])
    useEffect(() => {
        let lotteryType = 'daily';
        props.hitlotteryAPI(lotteryType)
    }, [])
    useEffect(() => {
        if(props.ApiFromLottery.ReferralLottery.lotteryApi.LotterySuccess ){
            SettopList(props.ApiFromLottery.ReferralLottery.lotteryApi.Lottery.top_list && props.ApiFromLottery.ReferralLottery.lotteryApi.Lottery.top_list)
        // console.log('top list sxxx',props.ApiFromLottery.ReferralLottery.lotteryApi.Lottery.top_list)
        setuserList(props.ApiFromLottery.ReferralLottery.lotteryApi.Lottery.user_list && props.ApiFromLottery.ReferralLottery.lotteryApi.Lottery.user_list)
        // console.log('user list sxxx',props.ApiFromLottery.ReferralLottery.lotteryApi.Lottery.user_list)
        }
    }, [props.ApiFromLottery.ReferralLottery.lotteryApi.LotterySuccess])
    return (
        <section className="LotteryContainer">
                        <h3>Top Winners</h3>
            <div className="LotteryBtns" style={{cursor: 'pointer',display: 'flex'}}  >
                    <div  onClick={handleDailyLotteryClick} style={{cursor: 'pointer'}} className="Daily_ Scheme_Container">
                        <button  className="Lottery_Daily_buttons btns_lottery">Daily</button>
                    </div>

                    <div onClick={handleWeeklyLotteryClick} className="Weekly_ Scheme_Container" style={{cursor: 'pointer'}}>
                        <button  className="Lottery_Weekly_buttons btns_lottery">Weekly</button>
                    </div>

                    <div onClick={handleMonthlyLotteryClick} className="Monthly_ Scheme_Container" style={{cursor: 'pointer'}}>
                        <button  className="Lottery_Monthly_buttons btns_lottery">Monthly</button>
                    </div>
            </div>
            <div className="Headline">
            <h4 style={{fontWeight: 'bold',color: 'white'}}>Win the <span className="Headline"> biggest lottery </span> of the <span className="Headline"> Infoidol </span></h4>
            <h4 style={{color: 'white'}}>Refer the most and <span className="Headline"> win Rs 1,100/-</span> Every Month </h4>
            </div>
            <div className="dailyLottery_container" ref={dailyLotterySection} >
                {
                    topList && topList.map((topElem,index) => {
                        return(
                            <div className="Lottery_TopListContainer">
                                {
                                <div className="Lottery_TopListWrapper">
                                    <p className="Lottery_TopList_Rank">
                                        <span className="ToppersRank"><img className="RankBadge" src={rank} alt=""/><span className="TopRankersWrapper">{topElem.rank}</span></span>
                                    </p>

                                    <p className="Lottery_TopList_WinningAmt">
                                        <i class="fa fa-inr" aria-hidden="true" style={{color: 'white'}}></i>
                                        <span className="WinningAmt_Lottery"  style={{color: '#00FFEE'}}>
                                            &nbsp;{topElem.winning_ammount}
                                        </span>
                                    </p>

                                    <p className="Lottery_TopList_Contestents">
                                        <div className="ContestantDp">
                                            <img src={topElem.profile_pic} className="Lottery_TopList_ProfilePix" alt=""/>                                
                                        </div>

                                        <div className="Lottery_TopList_WinnersName">
                                            <span style={{color: 'white'}}>#{topElem.rank}</span>&nbsp;&nbsp;<span style={{color: 'white'}}>{topElem.name}</span>&nbsp;&nbsp;<span style={{color: 'white'}}>/&nbsp;&nbsp;{topElem.total_income}</span>
                                        </div>
                                    </p>
                                </div>
                                }
                            </div>
                        )
                    })
                }
            </div>
            {/* User List Container */}
            <div className="UserList_Container">
                {
                    userList && userList.map((UserListElem) => {
                        return(
                            <div className="Lottery_UserList">
                                <p className="Lottery_UserRank">
                                    #{UserListElem.rank}
                                </p>
                                <p className="Lottery_UserDp">
                                    <img src={UserListElem.profile_pic} className="Lottery_Userpic" alt="" />
                                </p>
                                <p className="Lottery_UserName">
                                    {UserListElem.name}
                                </p>
                                <p className="Lottery_UserNetIncome">
                                    {UserListElem.total_income}
                                </p>
                            </div>
                        )
                    })
                }
            </div>

            {/* <div className="weeklyLottery_container" ref={weeklyLotterySection} style={{border: '2px solid yellow', height: '30vh',display:'none',display:'none'}}>
            {
                    topList && topList.map((topElem) => {
                        return(
                            <div className="Lottery_TopListContainer">
                                {
                                <div className="Lottery_TopListWrapper">
                                    <p className="Lottery_TopList_Rank">
                                        <span className="ToppersRank"><img className="RankBadge" src={rank} alt=""/><span className="TopRankersWrapper">{topElem.rank}</span></span>
                                    </p>

                                    <p className="Lottery_TopList_WinningAmt">
                                        <i class="fa fa-inr" aria-hidden="true" style={{color: 'white'}}></i>
                                        <span className="WinningAmt_Lottery"  style={{color: '#00FFEE'}}>
                                            &nbsp;{topElem.winning_ammount}
                                        </span>
                                    </p>

                                    <p className="Lottery_TopList_Contestents">
                                        <div className="ContestantDp">
                                            <img src={topElem.profile_pic} className="Lottery_TopList_ProfilePix" alt=""/>                                
                                        </div>

                                        <div className="Lottery_TopList_WinnersName">
                                            <span style={{color: 'white'}}>#{topElem.rank}</span>&nbsp;&nbsp;<span style={{color: 'white'}}>{topElem.name}</span>&nbsp;&nbsp;<span style={{color: 'white'}}>/&nbsp;&nbsp;{topElem.total_income}</span>
                                        </div>
                                    </p>
                                </div>
                                }
                            </div>
                        )
                    })
                }
            </div> */}
            {/* User List Container */}
            {/* <div className="UserList_Container">
                {
                    userList && userList.map((UserListElem) => {
                        return(
                            <div className="Lottery_UserList">
                                <p className="Lottery_UserRank">
                                    #{UserListElem.rank}
                                </p>
                                <p className="Lottery_UserDp">
                                    <img src={UserListElem.profile_pic} className="Lottery_Userpic" alt="" />
                                </p>
                                <p className="Lottery_UserName">
                                    {UserListElem.name}
                                </p>
                                <p className="Lottery_UserNetIncome">
                                    {UserListElem.total_income}
                                </p>
                            </div>
                        )
                    })
                }
            </div>

            <div className="monthlyLottery_container" ref={monthlyLotterySection} style={{border: '2px solid yellow', height: '30vh'}}>
            {
                    topList && topList.map((topElem,index) => {
                        return(
                            <div className="Lottery_TopListContainer">
                                {
                                <div className="Lottery_TopListWrapper">
                                    <p className="Lottery_TopList_Rank">
                                        <span className="ToppersRank"><img className="RankBadge" src={rank} alt=""/><span className="TopRankersWrapper">{topElem.rank}</span></span>
                                    </p>

                                    <p className="Lottery_TopList_WinningAmt">
                                        <i class="fa fa-inr" aria-hidden="true" style={{color: 'white'}}></i>
                                        <span className="WinningAmt_Lottery"  style={{color: '#00FFEE'}}>
                                            &nbsp;{topElem.winning_ammount}
                                        </span>
                                    </p>

                                    <p className="Lottery_TopList_Contestents">
                                        <div className="ContestantDp">
                                            <img src={topElem.profile_pic} className="Lottery_TopList_ProfilePix" alt=""/>                                
                                        </div>

                                        <div className="Lottery_TopList_WinnersName">
                                            <span style={{color: 'white'}}>#{topElem.rank}</span>&nbsp;&nbsp;<span style={{color: 'white'}}>{topElem.name}</span>&nbsp;&nbsp;<span style={{color: 'white'}}>/&nbsp;&nbsp;{topElem.total_income}</span>
                                        </div>
                                    </p>
                                </div>
                                }
                            </div>
                        )
                    })
                }
            </div> */}
            {/* User List Container */}
            {/* <div className="UserList_Container">
                {
                    userList && userList.map((UserListElem) => {
                        return(
                            <div className="Lottery_UserList">
                                <p className="Lottery_UserRank">
                                    #{UserListElem.rank}
                                </p>
                                <p className="Lottery_UserDp">
                                    <img src={UserListElem.profile_pic} className="Lottery_Userpic" alt="" />
                                </p>
                                <p className="Lottery_UserName">
                                    {UserListElem.name}
                                </p>
                                <p className="Lottery_UserNetIncome">
                                    {UserListElem.total_income}
                                </p>
                            </div>
                        )
                    })
                }
            </div> */}

        </section>
    )
}

export default Lottery
