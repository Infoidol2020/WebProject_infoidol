import React from 'react'
import Profile from '../../assets/profile.jpeg';
import InfoidolBanners from './InfoidolBanners';

const FeedFriendSuggestions = (props) => {
    // const arr = [1,2,3,4,5];
    // console.log('FeedFriendSuggestions', props.data)
    const handleClick = (e) => {
        // console.log('clicked', e.target.value)
        props.handleCustomizeFeeds(e.target.value)
        sessionStorage.setItem('feedOffset', 0)
        sessionStorage.setItem('customize-type', e.target.value)
    }
    return (
        <div>
            { props.data &&
            <div className="customize-dropdown">
                <select onChange ={(e) => handleClick(e)}>
                    <option value={''} style={{background: '#555', color: '#fff'}}>Customize</option>
                    {
                        props.data.map((element, index) => {
                            return(
                                <option style={{background: '#555', color: '#fff'}} 
                                value={element.customize_id} > {element.customize_name} </option>
                            )
                        })
                    }   
                </select>
            </div>
            }
            {/* <div className="feed-block-friend-suggestions">
                <div className="friend-suggestions-heading">
                    <p style={{paddingTop: '2vh', paddingLeft: '2vw', fontSize: '2rem'}}>Proposed friends</p>
                        </div>
                        {
                            arr.map((element, index) => {
                                return(
                                    <div style={{ marginTop: '1vh'}}>
                                    <div className="individual-friend-suggestion">
                                        <div>
                                            <img style={{height: '7rem', width: '7rem', borderRadius: '50%', boxShadow: '6px 8px 15px #00000029'}}  src={Profile} />
                                        </div>
                                        <div 
                                        style={{display:'flex', 
                                        width: '12vw', 
                                        justifyContent: 'space-between',
                                        alignItems: 'center', 
                                        border: '3px solid #70707091',
                                        borderRadius: '24px',
                                        padding: '0.5rem',
                                        height: '7vh'}}>
                                            <div>Stebin Ben</div>
                                            <div  
                                            style={{backgroundColor: '#1792BB', 
                                            width:'40%', 
                                            textAlign: 'center',
                                            height: '3vh', 
                                            color: '#fff', 
                                            borderRadius: '10px' }}>Dancer</div>
                                        </div>
                                        <div>
                                            <button className="friend-suggestions-connect-btn">Connect</button>
                                        </div>
                                        </div>
                                </div>
                                )
                            })
                        }
                    
                    </div> */}
                    <InfoidolBanners/>
        </div>
    )
}

export default FeedFriendSuggestions
