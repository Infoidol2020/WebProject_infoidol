import { NEW_USER_LOGIN, NEW_USER_LOGIN_SUCCESS, NEW_USER_LOGIN_FAILURE, NEW_USER_LOGIN_RESET } from './LoginTypes'


const initialState = {
    loginGetApi:{
    loginInProgress: false,
    loginSuccess:false,
    loginFailed:false,
    LoggedInUserData: {},
    }
}

 const LoginUserReducer = (state = initialState, action) => {
    //  console.log('prrrrrrrrr', action)
    switch(action.type){
        case NEW_USER_LOGIN:
            return{
                ...state,
                loginGetApi:{
                    loginInProgress: true,
                    loginSuccess:false,
                    loginFailed:false,
                    LoggedInUserData: {},
                    }
               
            }
            case NEW_USER_LOGIN_SUCCESS:
                return{
                    ...state,
                    loginGetApi:{
                        loginInProgress: false,
                        loginSuccess:true,
                        loginFailed:false,
                        LoggedInUserData: action.payload,
                        }
                   
                }
                case NEW_USER_LOGIN_FAILURE:
                    return{
                        ...state,
                        loginGetApi:{
                            loginInProgress: false,
                            loginSuccess:false,
                            loginFailed:true,
                            LoggedInUserData: {},
                            }
                       
                    }

                    case NEW_USER_LOGIN_RESET:
                        return{
                            ...state,
                            loginGetApi:{
                                loginInProgress: false,
                                loginSuccess:false,
                                loginFailed:false,
                                }
                           
                        }
            default: return state 
    }
}

export default LoginUserReducer





