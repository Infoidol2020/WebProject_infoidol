import React from 'react'
import Popover from '@material-ui/core/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';

import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import MoodBadIcon from '@material-ui/icons/MoodBad';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';


const LikeEmojis = () => {
    return (
        <div style={{marginTop: '10vh',}}>
            <PopupState variant="popover" popupId="demo-popup-popover" >
            {(popupState) => (
                <div>
                <button variant="contained" color="primary" {...bindTrigger(popupState)}>
                    <ThumbUpAltIcon />
                </button>
                <Popover
                
                    {...bindPopover(popupState)}
                    anchorReference="anchorPosition"
                    anchorPosition={{ top: 120, left: 1370 }}
                    anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                    }}
                    transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                    }}>
                    <div p={2}>
                    <div style={{background: 'black'}}>
                        <EmojiEmotionsIcon style={{
                         color: 'yellow',
                         fontSize: '4rem', 
                         margin: '0.5rem',
                         cursor: 'pointer'}} />
                        <SentimentDissatisfiedIcon style={{
                         color: 'yellow',
                         fontSize: '4rem', 
                         margin: '0.5rem',
                         cursor: 'pointer'}} />
                        <MoodBadIcon style={{
                         color: 'yellow',
                         fontSize: '4rem', 
                         margin: '0.5rem',
                         cursor: 'pointer'}} />
                        <SentimentVeryDissatisfiedIcon style={{
                         color: 'yellow',
                         fontSize: '4rem', 
                         margin: '0.5rem',
                         cursor: 'pointer'}} />
                        <SentimentSatisfiedIcon style={{
                         color: 'yellow',
                         fontSize: '4rem', 
                         margin: '0.5rem',
                         cursor: 'pointer'}} />
                        <SentimentVerySatisfiedIcon style={{
                         color: 'yellow',
                         fontSize: '4rem', 
                         margin: '0.5rem',
                         cursor: 'pointer'}} />
                    </div>
                    </div>
                </Popover>
                </div>
            )}
    </PopupState>
        </div>
    )
}

export default LikeEmojis
