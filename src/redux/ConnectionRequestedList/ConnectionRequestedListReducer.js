import { GET_CONNECTION_LIST, GET_CONNECTION_LIST_SUCCESS, GET_CONNECTION_LIST_FAILURE, GET_CONNECTION_LIST_RESET } from './ConnectionRequestedListTypes'
const initialState = {
    connectionRequestedListGetApi:{
    connectionListInProgress: false,
    connectionListSuccess:false,
    connectionListFailed:false,
    connectionList: [],
    }
}

 const ConnectionRequestedListReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_CONNECTION_LIST:
            return{
                ...state,
                connectionRequestedListGetApi:{
                    connectionListInProgress: true,
                    connectionListSuccess:false,
                    connectionListFailed:false,
                    connectionList: [],
                    }
               
            }
            case GET_CONNECTION_LIST_SUCCESS:
                return{
                    ...state,
                    connectionRequestedListGetApi:{
                        connectionListInProgress: false,
                        connectionListSuccess:true,
                        connectionListFailed:false,
                        connectionList: action.payload,
                        }
                   
                }
            case GET_CONNECTION_LIST_FAILURE:
                return{
                    ...state,
                    connectionRequestedListGetApi:{
                        connectionListInProgress: false,
                        connectionListSuccess:false,
                        connectionListFailed:true,
                        connectionList: [],
                        }
                   
                }
                case GET_CONNECTION_LIST_RESET:
                    return{
                        ...state,
                        connectionRequestedListGetApi:{
                            connectionListInProgress: false,
                            connectionListSuccess:false,
                            connectionListFailed:false,
                            }
                       
                    }
            default: return state 
    }
}

export default ConnectionRequestedListReducer