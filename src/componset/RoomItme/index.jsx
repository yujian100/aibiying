import React, { memo, useRef,useState } from 'react'
import { Itme } from './style'
import { Rate } from 'antd';
import { Carousel } from 'antd';
import { LeftCircleOutlined,RightCircleOutlined } from '@ant-design/icons';
import ImgScroll from '../ImgScroll';
import classNames from 'classnames';
const RoommItme = memo((props) => {
  const carousel = useRef()
  const [selectcurrent,Setselectcurrent] = useState(0)
  const {itme,itmewith='25%'} = props
  function crtnr(istrue){
    let newIndex = istrue ? selectcurrent+1 : selectcurrent-1
    if (newIndex<0) newIndex= itme?.picture_urls?.length-1
    if (newIndex>itme?.picture_urls?.length-1) newIndex=0
    istrue? carousel.current.next() :carousel.current.prev()
    Setselectcurrent(newIndex)
  }
  return (
    <Itme textcolor={itme.verify_info.text_color} itmewith={itmewith}>
        <div className='ablum'>
 
            {/* <img src={itme.picture_url} alt="" className='imgs' /> */}
              {itme?.picture_urls?.length>2?
              <div className='swirp'>
              <div className='cotner left' onClick={e=>crtnr(false)}><LeftCircleOutlined /></div>
              <div className='cotner right' onClick={e=>crtnr(true)}><RightCircleOutlined /></div>
              <div className='l'>
                <ImgScroll index={selectcurrent}> 
                    {
                      itme?.picture_urls?.map((img_itme,index)=>{
                        return (
                          <div className='s'>
                            <span className={classNames({active:index==selectcurrent})}>{}</span>
                          </div>
                        )
                      })
                    }
                </ImgScroll>
              </div>
              <Carousel ref={carousel} dots={false}>
                    {itme?.picture_urls?.map((img_itme,index)=>{
                      return <img src={img_itme} alt="" className='imgs' key={img_itme} />
                    })}
  
                </Carousel></div>:<img src={itme.picture_url} alt="" className='imgs' />}
            {/* <img src={itme.picture_url} alt="" className='imgs' /> */}
        </div>
        <div className='detail'>
            <div className='mode'>{itme.verify_info.messages[0]}-{itme.verify_info.messages[1]}</div>
            <div className='title line-clamp2'>{itme.name}</div>
            <div className='price'>{itme.price_format}/晚</div>
            <div className='stkyi'>
              <Rate allowHalf defaultValue={5}></Rate> 89{itme.bottom_info?.content}
            </div>
        </div>
        
    </Itme>
  )
})

export default RoommItme