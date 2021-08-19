import { SUBSCRIBE, SUBSCRIBE_SUCCESS, SUBSCRIBE_FAILURE, SUBSCRIBE_RESET } from './SubscribeTypes'
import { UNSUBSCRIBE, UNSUBSCRIBE_SUCCESS, UNSUBSCRIBE_FAILURE, UNSUBSCRIBE_RESET } from './SubscribeTypes'

const initialState = {
    subscribeApi:{
    subscribeInProgress: false,
    subscribeSuccess:false,
    subscribeFailed:false,
    subscribe: {},
    },
    unsubscribeApi:{
        unsubscribeInProgress: false,
        unsubscribeSuccess:false,
        unsubscribeFailed:false,
        unsubscribe: {},
        },

}

 const SubscribeReducer = (state = initialState, action) => {
    switch(action.type){
        case SUBSCRIBE:
            return{
                ...state,
                subscribeApi:{
                    subscribeInProgress: true,
                    subscribeSuccess:false,
                    subscribeFailed:false,
                    subscribe: {},
                    }
               
            }
            case SUBSCRIBE_SUCCESS:
                return{
                    ...state,
                    subscribeApi:{
                        subscribeInProgress: false,
                        subscribeSuccess:true,
                        subscribeFailed:false,
                        subscribe: action.payload,
                        }
                   
                }
            case SUBSCRIBE_FAILURE:
                return{
                    ...state,
                    subscribeApi:{
                        subscribeInProgress: false,
                        subscribeSuccess:false,
                        subscribeFailed:true,
                        subscribe: {},
                        }
                   
                }

                case SUBSCRIBE_RESET:
                    return{
                        ...state,
                        subscribeApi:{
                            subscribeInProgress: false,
                            subscribeSuccess:false,
                            subscribeFailed:false,
                            }
                       
                    }

                    case UNSUBSCRIBE:
                        return{
                            ...state,
                            unsubscribeApi:{
                                unsubscribeInProgress: true,
                                unsubscribeSuccess:false,
                                unsubscribeFailed:false,
                                unsubscribe: {},
                                }
                           
                        }
                        case UNSUBSCRIBE_SUCCESS:
                            return{
                                ...state,
                                unsubscribeApi:{
                                    unsubscribeInProgress: false,
                                    unsubscribeSuccess:true,
                                    unsubscribeFailed:false,
                                    unsubscribe: action.payload,
                                    }
                               
                            }
                        case UNSUBSCRIBE_FAILURE:
                            return{
                                ...state,
                                unsubscribeApi:{
                                    unsubscribeInProgress: false,
                                    unsubscribeSuccess:false,
                                    unsubscribeFailed:true,
                                    unsubscribe: {},
                                    }
                               
                            }
            
                            case UNSUBSCRIBE_RESET:
                                return{
                                    ...state,
                                    unsubscribeApi:{
                                        unsubscribeInProgress: false,
                                        unsubscribeSuccess:false,
                                        unsubscribeFailed:false,
                                        }
                                   
                                }
            default: return state 
    }
}

export default SubscribeReducer