import ContrTabs from '@/componset/ContrTabs'
import SectionHeader from '@/componset/SectionHeader'
import SectionRoomes from '@/componset/SectionRooms'
import React, { memo,useState,useCallback} from 'react'
import { SectionSweapper } from './style'
import SectionFooter from '@/componset/SectionFooter'
const SectionHomeV2 = memo((props) => {
  const {infoData} =props
  const initcity = Object.keys(infoData?.dest_list)[0]
  const [city,Setcity] = useState(initcity)
  //获取城市列表
  const cityList = infoData?.dest_address?.map((itme)=>{
      return itme.name
  })
  const TabClickFun = useCallback((index,city)=>{
    Setcity(city)
  },[]) 
  return (
    <SectionSweapper className='highScore'>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle}></SectionHeader>
      <ContrTabs cityList={cityList} TabClickFun={TabClickFun}></ContrTabs>
      <SectionRoomes list={infoData?.dest_list?.[city]} itmewith={'33.333%'}></SectionRoomes>
      <SectionFooter name={city}></SectionFooter>
  </SectionSweapper>
  )
})

export default SectionHomeV2