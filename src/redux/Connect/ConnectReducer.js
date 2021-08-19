import { CONNECT, CONNECT_SUCCESS, CONNECT_FAILURE, CONNECT_RESET } from './ConnectTypes'
import { CONNECT_CONFIRM, CONNECT_CONFIRM_SUCCESS, CONNECT_CONFIRM_FAILURE, CONNECT_CONFIRM_RESET } from './ConnectTypes'
import { CONNECT_REJECT, CONNECT_REJECT_SUCCESS, CONNECT_REJECT_FAILURE, CONNECT_REJECT_RESET } from './ConnectTypes'

const initialState = {
    connectApi:{
    connectInProgress: false,
    connectSuccess:false,
    connectFailed:false,
    connect: {},
    },

    connectConfirmApi:{
        connectConfirmInProgress: false,
        connectConfirmSuccess:false,
        connectConfirmFailed:false,
        connectConfirm: {},
        },
    connectRejectApi:{
        connectRejectInProgress: false,
        connectRejectSuccess:false,
        connectRejectFailed:false,
        connectReject: {},
    }
}

 const connectReducer = (state = initialState, action) => {
    switch(action.type){
        case CONNECT:
            return{
                ...state,
                connectApi:{
                    connectInProgress: true,
                    connectSuccess:false,
                    connectFailed:false,
                    connect: {},
                    }
               
            }
            case CONNECT_SUCCESS:
                return{
                    ...state,
                    connectApi:{
                        connectInProgress: false,
                        connectSuccess:true,
                        connectFailed:false,
                        connect: action.payload,
                        }
                   
                }
            case CONNECT_FAILURE:
                return{
                    ...state,
                    connectApi:{
                        connectInProgress: false,
                        connectSuccess:false,
                        connectFailed:true,
                        connect: {},
                        }
                   
                }

                case CONNECT_RESET:
                    return{
                        ...state,
                        connectApi:{
                            connectInProgress: false,
                            connectSuccess:false,
                            connectFailed:false,
                            }
                       
                    }

//connect confirmation cases
                    case CONNECT_CONFIRM:
                        return{
                            ...state,
                            connectConfirmApi:{
                                connectConfirmInProgress: true,
                                connectConfirmSuccess:false,
                                connectConfirmFailed:false,
                                connectConfirm: {},
                                }
                           
                        }
                    case CONNECT_CONFIRM_SUCCESS:
                        return{
                             ...state,
                            connectConfirmApi:{
                                connectConfirmInProgress: false,
                                connectConfirmSuccess:true,
                                connectConfirmFailed:false,
                                connectConfirm: action.payload,
                                }
                               
                            }
                     case CONNECT_CONFIRM_FAILURE:
                        return{
                            ...state,
                                connectConfirmApi:{
                                connectConfirmInProgress: false,
                                connectConfirmSuccess:false,
                                connectConfirmFailed:true,
                                connectConfirm: {},
                                 }
                                   
                                }
                    case CONNECT_CONFIRM_RESET:
                            return{
                            ...state,
                            connectConfirmApi:{
                            connectConfirmInProgress: false,
                            connectConfirmSuccess:false,
                            connectConfirmFailed:false,
                            }
                                       
                         }

//connect Rejection cases

                    case CONNECT_REJECT:
                        return{
                            ...state,
                            connectRejectApi:{
                                connectRejectInProgress: true,
                                connectRejectSuccess:false,
                                connectRejectFailed:false,
                                connectReject: {},
                                }
                           
                        }
                    case CONNECT_REJECT_SUCCESS:
                        return{
                             ...state,
                            connectRejectApi:{
                                connectRejectInProgress: false,
                                connectRejectSuccess:true,
                                connectRejectFailed:false,
                                connectReject: action.payload,
                                }
                               
                            }
                     case CONNECT_REJECT_FAILURE:
                        return{
                            ...state,
                                connectRejectApi:{
                                connectRejectInProgress: false,
                                connectRejectSuccess:false,
                                connectRejectFailed:true,
                                connectReject: {},
                                 }
                                   
                                }
                    case CONNECT_REJECT_RESET:
                            return{
                            ...state,
                            connectRejectApi:{
                            connectRejectInProgress: false,
                            connectRejectSuccess:false,
                            connectRejectFailed:false,
                            }
                                       
                         }
            default: return state 
    }
}

export default connectReducer