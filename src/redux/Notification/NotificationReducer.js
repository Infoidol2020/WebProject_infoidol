import { NOTIFICATION, NOTIFICATION_SUCCESS, NOTIFICATION_FAILURE, NOTIFICATION_RESET } from './NotificationTypes'

const initialState = {
    NotificationApi:{
    NotificationInProgress: false,
    NotificationSuccess:false,
    NotificationFailed:false,
    Notification: [],
    }
}

 const NotificationReducer = (state = initialState, action) => {
    switch(action.type){
        case NOTIFICATION:
            return{
                ...state,
                NotificationApi:{
                    NotificationInProgress: true,
                    NotificationSuccess:false,
                    NotificationFailed:false,
                    Notification: [],
                    }
               
            }
            case NOTIFICATION_SUCCESS:
                return{
                    ...state,
                    NotificationApi:{
                        NotificationInProgress: false,
                        NotificationSuccess:true,
                        NotificationFailed:false,
                        Notification: action.payload,
                        }
                   
                }
            case NOTIFICATION_FAILURE:
                return{
                    ...state,
                    NotificationApi:{
                        NotificationInProgress: false,
                        NotificationSuccess:false,
                        NotificationFailed:true,
                        Notification: [],
                        }
                   
                }

                case NOTIFICATION_RESET:
                    return{
                        ...state,
                        NotificationApi:{
                            NotificationInProgress: false,
                            NotificationSuccess:false,
                            NotificationFailed:false,
                            }
                       
                    }

            default: return state 
    }
}

export default NotificationReducer