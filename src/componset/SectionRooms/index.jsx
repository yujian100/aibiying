import React, { memo } from 'react'
import RoommItme from '../RoomItme'
import { Rooms } from './style'
const SectionRoomes = memo((props) => {
  const {itmewith ='25%'} = props
  return (
    <Rooms className='rooms'>
    {props?.list?.slice(0,8).map((itme)=>{
     return (
         <RoommItme itme={itme} key={itme.id} itmewith={itmewith}></RoommItme>
     )
   })}
 </Rooms>
  )
})

export default SectionRoomes