import React, { memo } from 'react'
import { Itme } from './style'
import { Rate } from 'antd';
const RoommItme = memo((props) => {
  const {itme,itmewith} = props
  return (
    <Itme textcolor={itme.verify_info.text_color} itmewith={itmewith}>
        <div className='ablum'>
              <img src={itme.picture_url} alt="" />
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