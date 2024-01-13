import React, { memo } from 'react'
import RoommItme from '@/componset/RoomItme'
import { RoomsWrapper } from './style'
import { useSelector } from 'react-redux'
const Rooms = memo((props) => {
  const {isShow}=useSelector(state=>state.moreStore)
  const {roomList,roomcount} = props
  return (
    <RoomsWrapper>
      <div className='roomtitle'>{roomcount}处房源</div>
      <div className='roomlist'>
          {
            roomList?.map((itme)=>{
              return <RoommItme itme={itme} key={itme._id} itmewith={'20%'}></RoommItme>
            })
          }
      </div>
      {isShow?<div className='blume'></div> : ''}
      
    </RoomsWrapper>
  )
})

export default Rooms