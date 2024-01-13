import { getMoredate } from '@/service/module/more'
import * as Type from './constants'
export const changecurrentPage = (currentPage)=>({type:Type.ROOM_PAGE,currentPage})
export const changeroomList = (roomList)=>({type:Type.ROOM_LIST,roomList})
export const changeroomCount = (roomCount)=>({type:Type.ROOM_COUNT,roomCount})
export const changeisShow = (isShow)=>({type:Type.Is_Show,isShow})
export const GetMoreDate=()=>{
    return (dispatch,getState)=>{
        const {moreStore} =getState()
        const offset =moreStore.currentPage*20
        dispatch(changeisShow(true))
        getMoredate(offset).then((res)=>{
            dispatch(changeroomList(res.list))
            dispatch(changeroomCount(res.totalCount))
            dispatch(changeisShow(false))
        })
    }
}