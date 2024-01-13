import * as Type from './constants'

const initialState = {
    currentPage :0,
    roomList :[],
    roomCount:0,
    isShow:false
}

function reducer(state=initialState,action){
    switch(action.type){
        case(Type.ROOM_PAGE):
            return {...state,currentPage:action.currentPage}
        case(Type.ROOM_LIST):
             console.log(action.roomList)
            return {...state,roomList:action.roomList}
        case(Type.ROOM_COUNT):
            return {...state,roomCount:action.roomCount}
        case(Type.Is_Show):
            return {...state,isShow:action.isShow}
        default:
            return state
     }

}

export{reducer}