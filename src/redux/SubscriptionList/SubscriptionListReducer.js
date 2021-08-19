import { SUBSCRIPTION_LIST, SUBSCRIPTION_LIST_SUCCESS, SUBSCRIPTION_LIST_FAILURE, SUBSCRIPTION_LIST_RESET } from './SubscriptionListTypes'

const initialState = {
    SubscriptionListApi:{
    SubscriptionListInProgress: false,
    SubscriptionListSuccess:false,
    SubscriptionListFailed:false,
    SubscriptionList: [],
    }
}

const SubscriptionListReducer = (state = initialState, action) => {
    switch(action.type){
        case SUBSCRIPTION_LIST:
            return{
                ...state,
                SubscriptionListApi:{
                    SubscriptionListInProgress: true,
                    SubscriptionListSuccess:false,
                    SubscriptionListFailed:false,
                    SubscriptionList: [],
                    }
            
            }
            case SUBSCRIPTION_LIST_SUCCESS:
                return{
                    ...state,
                    SubscriptionListApi:{
                        SubscriptionListInProgress: false,
                        SubscriptionListSuccess:true,
                        SubscriptionListFailed:false,
                        SubscriptionList: action.payload,
                        }
                
                }
            case SUBSCRIPTION_LIST_FAILURE:
                return{
                    ...state,
                    SubscriptionListApi:{
                        SubscriptionListInProgress: false,
                        SubscriptionListSuccess:false,
                        SubscriptionListFailed:true,
                        SubscriptionList: [],
                        }
                
                }

                case SUBSCRIPTION_LIST_RESET:
                    return{
                        ...state,
                        SubscriptionListApi:{
                            SubscriptionListInProgress: false,
                            SubscriptionListSuccess:false,
                            SubscriptionListFailed:false,
                            }
                    
                    }

            default: return state 
    }
}

export default SubscriptionListReducer