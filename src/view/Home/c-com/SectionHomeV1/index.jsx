import React, { memo } from 'react'
import SectionHeader from '@/componset/SectionHeader'
import SectionRoomes from '@/componset/SectionRooms'
import { SectionSweapper } from './style'
import SectionFooter from '@/componset/SectionFooter'


const SectionHomeV1 = memo((props) => {
    const {datelist} = props
  return (
    <SectionSweapper >
      <SectionHeader title={datelist.title} subtitle={datelist.subtitle}></SectionHeader>
      <SectionRoomes list={datelist.list}></SectionRoomes>
      <SectionFooter></SectionFooter>
  </SectionSweapper>
  )
})

// SectionHomeV1={
//   GoodPriceList:PropTypes.object
// }

export default SectionHomeV1