import React, { memo, useState } from 'react'
import { ConterTabsWarpper } from './style'
import classNames from 'classnames'
import ScrollView from '../ScrollView'
const ContrTabs = memo((props) => {
  const [tabclick,settabclick] = useState(0)
  const {cityList,TabClickFun} = props
  function Handclick(index,city){
    settabclick(index)
    TabClickFun(index,city)
  }
  return (

    <ConterTabsWarpper>
        <ScrollView>
          {cityList?.map((itme,index)=>{
          return (
            <div key={index} className={classNames('itme',{'active':tabclick===index})} onClick={e=>Handclick(index,itme)}>
              {itme}
            </div>
          )
        })}
       </ScrollView>
    </ConterTabsWarpper>
  )
})

export default ContrTabs