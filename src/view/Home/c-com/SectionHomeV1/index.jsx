import React, { memo } from 'react'
import SectionHeader from '@/componset/SectionHeader'
import SectionRoomes from '@/componset/SectionRooms'
import { SectionSweapper } from './style'
import SectionFooter from '@/componset/SectionFooter'
import { useNavigate } from 'react-router-dom'


const SectionHomeV1 = memo((props) => {
  const navigate = useNavigate()
  const {datelist} = props
  function clickMore(){
    navigate('/more')
  }
  return (
    <SectionSweapper >
      <SectionHeader title={datelist.title} subtitle={datelist.subtitle}></SectionHeader>
      <SectionRoomes list={datelist.list}></SectionRoomes>
      <SectionFooter toMore={clickMore}></SectionFooter>
  </SectionSweapper>
  )
})


export default SectionHomeV1