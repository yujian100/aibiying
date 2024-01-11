import React, { memo } from 'react'
import { SectionSweapper } from './style'
import SectionHeader from '@/componset/SectionHeader'
import SectionFooter from '@/componset/SectionFooter'
import RoommItme from '@/componset/RoomItme'
import ContrTabs from '@/componset/ContrTabs'
import ScrollView from '@/componset/ScrollView'

const SectionHomeV3 = memo((props) => {
  const {datelist} = props
  console.log(datelist.list)
  return (
    <SectionSweapper>
        <SectionHeader title={datelist.title} subtitle={datelist.subtitle}></SectionHeader>
        <div className="plus">

            <ScrollView>
              {
                    datelist?.list?.map((itme,index)=>{
                      
                      return <RoommItme key={itme.id} itme={itme} itmewith={'20%'}></RoommItme>
                    })
                  }
            </ScrollView>

        </div>
        <SectionFooter name={'Plus'}></SectionFooter>
    </SectionSweapper>
  )
})

export default SectionHomeV3