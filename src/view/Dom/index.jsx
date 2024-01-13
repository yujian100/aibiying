import React, { memo, useState } from 'react'
import { DomSwarpper } from './style'
import ImgScroll from '@/componset/ImgScroll'

const Dom = memo(() => {
  const list = ['aa','bb','cc','dd','ee']
  const [selectcurrent,Setselectcurrent] = useState(0)
  function netx(istrue){
    let newIndex = istrue ? selectcurrent+1 : selectcurrent-1
    if (newIndex<0) newIndex= list.length-1
    if (newIndex>list.length-1) newIndex=0

    Setselectcurrent(newIndex)
    }
  return (
    <DomSwarpper>
        <div>{selectcurrent}</div>
        <div>
            <button onClick={e=>netx(false)}>上一个</button>
            <button onClick={e=>netx(true)}>下一个</button>
        </div>
        <ImgScroll index={selectcurrent}>
                {list.map((itme)=>{
                    return <button>{itme}</button>
                })}
            
        </ImgScroll>
    </DomSwarpper>
  )
})

export default Dom