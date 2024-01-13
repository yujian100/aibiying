import React, { memo, useEffect, useRef } from 'react'
import { ImgScrollSwrepper } from './style'

const ImgScroll = memo((props) => {
    const swirp = useRef()
    console.log(props.index)
    // const swirps = useRef()
    useEffect(()=>{
        const clientWidth = swirp.current.clientWidth
        const clientScroll = swirp.current.scrollWidth
        console.log(clientWidth,clientScroll)
        const eloffsetleft = swirp.current.children[props.index].offsetLeft
        const elclientWidth = swirp.current.children[props.index].clientWidth
        let scrollWidth = eloffsetleft+(elclientWidth*0.5) - (clientWidth*0.5)
        if(scrollWidth<0) scrollWidth=0
        const to = clientScroll - clientWidth
        if(scrollWidth >to) scrollWidth=to
        swirp.current.style.transform = `translateX(${-scrollWidth}px)`

    },[props.index])

  return (
    <ImgScrollSwrepper>
        <div className='list' ref={swirp}>
            {props.children}
        </div>
          
    </ImgScrollSwrepper>
  )
})

export default ImgScroll