import { GET_ALL_PICTUREVIEW, GET_ALL_PICTUREVIEW_SUCCESS, GET_ALL_PICTUREVIEW_FAILURE } from './PictureViewTypes'
const initialState = {
    PictureDetailPageGetApi:{
    PictureDetailPageInProgress: false,
    PictureDetailPageSuccess:false,
    PictureDetailPageFailed:false,
    allPictureDetail: [],
    error: '',
    }
}
 const PictureViewPageReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_ALL_PICTUREVIEW:
            return{
                ...state,
                PictureDetailPageGetApi:{
                    PictureDetailPageInProgress: true,
                    PictureDetailPageSuccess:false,
                    PictureDetailPageFailed:false,
                    allPictureDetail: [],
                    error: '',
                    }
            }
            case GET_ALL_PICTUREVIEW_SUCCESS:
                return{
                    ...state,
                    PictureDetailPageGetApi:{
                        PictureDetailPageInProgress: false,
                        PictureDetailPageSuccess:true,
                        PictureDetailPageFailed:false,
                        allPictureDetail: action.payload,
                        error: '',
                        }
                }
            case GET_ALL_PICTUREVIEW_FAILURE:
                return{
                    ...state,
                    PictureDetailPageGetApi:{
                        PictureDetailPageInProgress: false,
                        PictureDetailPageSuccess:false,
                        PictureDetailPageFailed:true,
                        allPictureDetail: [],
                        error: '',
                        }
                }
            default: return state 
    }
}
export default PictureViewPageReducer
// const initialState = {
//     loading: false,
//     allPictureView: [],
//     error: ''
// }

//  const PictureViewPageReducer = (state = initialState, action) => {
//     switch(action.type){
//         case GET_ALL_PICTUREVIEW:
//             return{
//                 ...state,
//                 loading: true
//             }
//             case GET_ALL_PICTUREVIEW_SUCCESS:
//             return{
//                 loading: false,
//                 allPictureView: action.payload,
//                 error: ''
//             }
//             case GET_ALL_PICTUREVIEW_FAILURE:
//             return{
//                 loading: false,
//                 allPictureView: [],
//                 error: action.payload
//             }
//             default: return state 
//     }
// }

// export default PictureViewPageReducer