import React, { memo } from 'react'
import { LongForWerpper } from './style'
import SectionHeader from '@/componset/SectionHeader'
import SectionFooter from '@/componset/SectionFooter'
import LongForItme from '@/componset/LongForItme'
import ScrollView from '@/componset/ScrollView'

const LongFor = memo((props) => {
    const {datelist} = props
  return (
    <LongForWerpper>
        <SectionHeader title={datelist.title} subtitle={datelist.subtitle}></SectionHeader>
        <div className='longforlist'>
              <ScrollView >

                {
                  datelist?.list?.map((itme,index)=>{
                    return <LongForItme itme={itme}></LongForItme>
                  })
                }
              </ScrollView>

      </div>

        <SectionFooter></SectionFooter>
    </LongForWerpper>
  )
})

export default LongFor