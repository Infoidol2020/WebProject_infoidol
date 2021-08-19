import { INTERNSHIP_REGISTER_MAP, INTERNSHIP_REGISTER_MAP_SUCCESS, INTERNSHIP_REGISTER_MAP_FAILURE, INTERNSHIP_REGISTER_MAP_RESET } from './InternshipRegisterMapType'
const initialState = {
    internshipRegisterMapGetApi:{
    internshipRegisterMapInProgress: false,
    internshipRegisterMapSuccess:false,
    internshipRegisterMapFailed:false,
    internshipRegisterMap: [],
    }
}

const InternshipRegisterMapReducer = (state = initialState, action) => {
    switch(action.type){
        case INTERNSHIP_REGISTER_MAP:
            return{
                ...state,
                internshipRegisterMapGetApi:{
                    internshipRegisterMapInProgress: true,
                    internshipRegisterMapSuccess:false,
                    internshipRegisterMapFailed:false,
                    internshipRegisterMap: [],
                    }

            }
            case INTERNSHIP_REGISTER_MAP_SUCCESS:
                return{
                    ...state,
                    internshipRegisterMapGetApi:{
                        internshipRegisterMapInProgress: false,
                        internshipRegisterMapSuccess:true,
                        internshipRegisterMapFailed:false,
                        internshipRegisterMap: action.payload,
                        }

                }
            case INTERNSHIP_REGISTER_MAP_FAILURE:
                return{
                    ...state,
                    internshipRegisterMapGetApi:{
                        internshipRegisterMapInProgress: false,
                        internshipRegisterMapSuccess:false,
                        internshipRegisterMapFailed:true,
                        internshipRegisterMap: [],
                        }

                }
                case INTERNSHIP_REGISTER_MAP_RESET:
                    return{
                        ...state,
                        internshipRegisterMapGetApi:{
                            internshipRegisterMapInProgress: false,
                            internshipRegisterMapSuccess:false,
                            internshipRegisterMapFailed:false,
                            }
                    }
            default: return state 
    }
}

export default InternshipRegisterMapReducer




















// import { INTERNSHIP_REGISTER_MAP, INTERNSHIP_REGISTER_MAP_SUCCESS, INTERNSHIP_REGISTER_MAP_FAILURE, INTERNSHIP_REGISTER_MAP_RESET } from './InternshipRegisterMapType'

// const initialState = {
//     internshipRegisterMapGetApi:{
//     internshipRegisterMapInProgress: false,
//     internshipRegisterMapSuccess:false,
//     internshipRegisterMapFailed:false,
//     internshipRegisterMap: {},
//     }
// }

// const InternshipRegisterMapReducer = (state = initialState, action) => {
//     switch(action.type){
//         case INTERNSHIP_REGISTER_MAP:
//             return{
//                 ...state,
//                 internshipRegisterMapGetApi:{
//                     internshipRegisterMapInProgress: true,
//                     internshipRegisterMapSuccess:false,
//                     internshipRegisterMapFailed:false,
//                     internshipRegisterMap: {},
//                     }

//             }
//             case INTERNSHIP_REGISTER_MAP_SUCCESS:
//                 return{
//                     ...state,
//                     internshipRegisterMapGetApi:{
//                         internshipRegisterMapInProgress: false,
//                         internshipRegisterMapSuccess:true,
//                         internshipRegisterMapFailed:false,
//                         internshipRegisterMap: action.payload,
//                         }

//                 }
//             case INTERNSHIP_REGISTER_MAP_FAILURE:
//                 return{
//                     ...state,
//                     internshipRegisterMapGetApi:{
//                         internshipRegisterMapInProgress: false,
//                         internshipRegisterMapSuccess:false,
//                         internshipRegisterMapFailed:true,
//                         internshipRegisterMap: {},
//                         }

//                 }
//                 // case INTERNSHIP_REGISTER_MAP_RESET:
//                 //     return{
//                 //         ...state,
//                 //         internshipRegisterMapGetApi:{
//                 //             internshipRegisterMapInProgress: false,
//                 //             internshipRegisterMapSuccess:false,
//                 //             internshipRegisterMapFailed:false,
//                 //             }
//                 //     }
//             default: return state 
//     }
// }

// export default InternshipRegisterMapReducer