import React, { memo, useEffect } from 'react'
import { MoreWerapper } from './style'
import FilterTab from './c-com/FilterTab'
import Rooms from './c-com/Rooms'
import PagBar from './c-com/PagBar'
import { useDispatch, useSelector } from 'react-redux'
import { GetMoreDate, changecurrentPage } from '@/store/module/more/action'

const More = memo(() => {
  const {roomCount,roomList} = useSelector(state=>state.moreStore)
  const dis = useDispatch()
  useEffect(()=>{
    dis(GetMoreDate())
  },[])
  console.log(roomCount)
  return (
    <MoreWerapper>
      <FilterTab></FilterTab>
      <Rooms roomList={roomList} roomcount={roomCount}></Rooms>
      <PagBar roomcount={roomCount}></PagBar>

    </MoreWerapper>
  )
})

export default More