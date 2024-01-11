import React, { memo, useEffect, useRef, useState } from 'react'
import { SectionTabsWrppers } from './style'
import {LeftOutlined,RightOutlined} from '@ant-design/icons'
const ScrollView = memo((props) => {
  const slotEl = useRef()
  const [showRight,SetshowRight] = useState(false)
  const [showLeft,SetshowLeft] = useState(false)
  const [distance,Setdistance] = useState()
  const [currentIndex,SetcurrentIndex] = useState(0)
  useEffect(()=>{
    let scrollwidth = slotEl.current.scrollWidth//可滚动距离
    let clientwidth = slotEl.current.clientWidth//元素占据的宽度
    const distance = scrollwidth-clientwidth //大于零表示可以象 left滚动
    console.log(scrollwidth,clientwidth)
    // console.log(clientwidth,scrollwidth)
     console.log(distance)
    SetshowRight(distance>0)
    Setdistance(distance)
  },[props.children])
  function right(){
    const newIndex = currentIndex+1
    let scopeL = slotEl.current.children[newIndex].offsetLeft//距离元素最左边的距离
    console.log(slotEl.current.children[newIndex])
    slotEl.current.style.transform = `translateX(-${scopeL}px)`
    console.log(distance)
    console.log(scopeL)
    SetcurrentIndex(newIndex)
    SetshowRight(distance>scopeL)
    SetshowLeft(scopeL>0)
  }
  function left(){
    const newIndex = currentIndex-1
    let scopeL = slotEl.current.children[newIndex].offsetLeft//距离元素最左边的距离
    console.log(slotEl.current.children[newIndex])
    slotEl.current.style.transform = `translateX(-${scopeL}px)`
    SetcurrentIndex(newIndex)
    SetshowRight(distance>scopeL)
    SetshowLeft(scopeL>0)
  }   
  return (
    <SectionTabsWrppers>
        { showLeft && <div className="itmes left" onClick={left} >
            <LeftOutlined />
        </div> }
        {showRight && <div className="itmes right" onClick={right}>
            <RightOutlined />
          </div>}

        <div className='Eslot'>
          <div className='slot' ref={slotEl}>
              {props.children}
          </div>
        </div>
    </SectionTabsWrppers>
  )
})

export default ScrollView