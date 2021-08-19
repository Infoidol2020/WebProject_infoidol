import React, { useState ,useEffect } from 'react';
import Carousel from 'react-elastic-carousel';
import {connect} from 'react-redux';
import { fetchNewUsers } from '../../redux/SignUp/NewUsers/NewUserActions';

import './Signup.css';
import MoodIcon from '@material-ui/icons/Mood';
import axios from 'axios';
import Signup1 from './Signup1';
import Signup2 from './Signup2';

const RegistrationHome = ({NewusersFromAPI, fetchNewUsers}) => {
useEffect(() => {
    fetchNewUsers()
}, [])
    
    return (
        <div>
            <div className="Signup_main_Container">
                <Signup1 data={NewusersFromAPI}/>
                <Signup2/>
              </div>  
        </div>
    )
}


const mapStateToProps = (state) => {
    // console.log('stateeeeee from NEW USERS SIGNUP PAGE', state);
    return{ 
        NewusersFromAPI: state
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchNewUsers: () => dispatch(fetchNewUsers())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(RegistrationHome)
