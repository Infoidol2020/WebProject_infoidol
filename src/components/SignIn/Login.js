import React,{useEffect} from 'react'
import {connect} from 'react-redux';

import {fetchNewUsers} from '../../redux/SignUp/NewUsers/NewUserActions'
import './Login.css';
import Login1 from './Login1';
import Login2 from './Login2';



const Login = ({NewusersFromAPI, fetchNewUsers}) => {
    const loginNewUsersData = NewusersFromAPI.NewUser.newUsers
    useEffect(() => {
        fetchNewUsers()
    }, [])
    return (
        <div>
            <div className="loginMainContainer">
                <Login1 data={loginNewUsersData}/>
                <Login2/>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    // console.log('stateeeeee from NEW USERS LOGIN PAGE', state.NewUser.newUsers);
    return{ 
        NewusersFromAPI: state
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchNewUsers: () => dispatch(fetchNewUsers())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)

