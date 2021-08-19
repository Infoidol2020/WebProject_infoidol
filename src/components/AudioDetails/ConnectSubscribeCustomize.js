import React, {useEffect} from 'react'
import NotificationsIcon from '@material-ui/icons/Notifications';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import { useHistory } from 'react-router-dom';

import './ConnectSubscribeCustomize.css'

const ConnectSubscribeCustomize = (props) => {
    const history = useHistory();
    // console.log('props from ccs', props)
    const handleConnect = () => {
        if(localStorage.getItem('WebAppUserKey') === null || localStorage.getItem('WebAppUserKey') == '' ){
            history.push('/login')
            return
        }
        props.hitconnectAPI(localStorage.getItem('UI'))
    }

    const handleDisconnect = () => {
        props.hitconnectRejectAPI(localStorage.getItem('UI'))

    }

    const handleUnscubscribe = () => {
        props.hitUnsubscribeAPI(localStorage.getItem('UI'))
    }

    const handleSubscribe = () => {
        if(localStorage.getItem('WebAppUserKey') === null || localStorage.getItem('WebAppUserKey') == '' ){
            history.push('/login')
            return
        }
        props.hitsubscribeAPI(localStorage.getItem('UI'))
    }

    const handleMakeCustomize = (e) => {
        if(localStorage.getItem('WebAppUserKey') === null || localStorage.getItem('WebAppUserKey') == '' ){
            history.push('/login')
            return
        }
        // console.log(e.target.value)
        props.hitMakeCustomizeAPI(localStorage.getItem('UI'), e.target.value)
    }

    useEffect(() => {
        if(props.AllAudiosFromAPI.connect.connectApi.connectSuccess ||
            props.AllAudiosFromAPI.connect.connectRejectApi.connectRejectSuccess || 
            props.AllAudiosFromAPI.Subscribe.subscribeApi.subscribeSuccess ||
            props.AllAudiosFromAPI.Subscribe.unsubscribeApi.unsubscribeSuccess || 
            props.AllAudiosFromAPI.makeCustomize.makeCustomizeApi.makeCustomizeSuccess){
                
                props.fetchMusicCommentList(localStorage.getItem('id')) //music detail page api
        }

    }, [props.AllAudiosFromAPI.connect.connectApi.connectSuccess, 
        props.AllAudiosFromAPI.connect.connectRejectApi.connectRejectSuccess, 
        props.AllAudiosFromAPI.Subscribe.subscribeApi.subscribeSuccess,
        props.AllAudiosFromAPI.Subscribe.unsubscribeApi.unsubscribeSuccess,
        props.AllAudiosFromAPI.makeCustomize.makeCustomizeApi.makeCustomizeSuccess])
    return (
        <div className="CSC">
            {/* connection */}
            {
                localStorage.getItem('WebAppUserKey') === localStorage.getItem('UI') ?
                ''
                :
                <div className="CSC_Connect">
                    {
                        props.musicDetails && 
                        props.musicDetails.connection_status == '1' &&
                        <span ClassName="CSC_Btn_Connect" >
                            <button 
                            className="audio-connect-btn"
                            style={{background: 'linear-gradient( 90deg, rgb(30, 159, 200) 0%, rgb(60, 52, 172) 100%) transparent',
                            opacity: ' 0.8',
                            border:' 0px',
                            outline: 'none',
                            color: 'rgb(255, 255, 255)',
                            width:' 9vw',
                            borderRadius: '10px'}}
                            onClick = {() => handleConnect()}>Connect
                            </button>
                        </span>
                    }
                    {
                        props.musicDetails && 
                        (props.musicDetails.connection_status == '2' || props.musicDetails.connection_status == '3') &&
                        <span ClassName="CSC_Btn_Pending" >
                            <button 
                            className="audio-connect-btn"
                            style={{background: 'rgb(204, 204, 0)',
                                opacity: ' 0.8',
                                border:' 0px',
                                outline: 'none',
                                color: 'rgb(255, 255, 255)',
                                width:' 9vw',
                                borderRadius: '10px'}} disabled>Pending
                            </button>
                        </span>
                    }
                    {
                        props.musicDetails && 
                        props.musicDetails.connection_status == '4' &&
                        <span ClassName="CSC_Btn_Connected" >
                            <button 
                            className="audio-connect-btn"
                            style={{background: 'rgb(143, 188, 143)',
                            opacity: ' 0.8',
                            border:' 0px',
                            outline: 'none',
                            color: 'rgb(255, 255, 255)',
                            width:' 9vw',
                            borderRadius: '10px'}}
                            onClick={() => handleDisconnect()}>Connected</button>
                        </span>
                    }
                </div>
            }
            {/* subscription */}
            {
                localStorage.getItem('WebAppUserKey') === localStorage.getItem('UI') ?
                ''
                :
                <div className="CSC_SubscribeSection">
                    {
                        props.musicDetails && 
                        props.musicDetails.subscribe_status == '1' &&
                        <span ClassName="CSC_Btn_Unsubscribe" >
                            <button 
                            className="audio-subscribe-btn"
                            style={{background: 'rgb(165, 42, 42)',
                            border: '0px',
                            outline: 'none',
                            color: 'rgb(255, 255, 255)',
                            width: '9vw',
                            borderRadius: '10px',
                            opacity: '0.8',}}
                            onClick={() => handleUnscubscribe()}>Subscribed <NotificationsActiveIcon/>
                            </button>
                        </span>
                    }
                    {
                        props.musicDetails && 
                        (props.musicDetails.subscribe_status == '0') &&
                        <span ClassName="CSC_Btn_Subscribe" >
                            <button
                            className="audio-subscribe-btn" 
                                style={{background: 'linear-gradient(90deg, rgb(30, 159, 200) 0%, rgb(60, 52, 172) 100%) transparent',
                                border: '0px',
                                outline: 'none',
                                color: 'rgb(255, 255, 255)',
                                width: '9vw',
                                borderRadius: '10px'
                                }}
                                onClick={() => handleSubscribe()}>Subscribe<NotificationsIcon/> 
                            </button>
                        </span>
                    }
                </div>
            }

            {
                localStorage.getItem('WebAppUserKey') === localStorage.getItem('UI') ?
                ''
                :
                <div className="CSC_customizeSection">
                    {
                        props.musicDetails &&
                        props.musicDetails.customize_list &&
                        <>
                        <select className="CSC_CustomizeBtn" onChange={ (e) => handleMakeCustomize(e) }>
                            {
                                props.musicDetails.customize_name !== null &&
                                <option ClassName="CSC_CustomizeName" value=''>{props.musicDetails.customize_name}</option>
                            }
                        {
                            props.musicDetails.customize_list.map((element, index) => {
                                return(
                                    element.name !== props.musicDetails.customize_name &&
                                    <option ClassName="CSC_CustomizeType"  key={index} value={element.customize_id}>{element.name}</option>
                                )
                            })
                        }
                        </select>
                        </>
                    }
                </div>
            }

        </div>
    )
}

export default ConnectSubscribeCustomize
