import React, { memo } from 'react'
import { SectionFooterWrepper } from './style'
import {RightOutlined} from '@ant-design/icons';
const SectionFooter = memo((props) => {
  const {toMore} = props
  function abc(){
    toMore ? toMore(): console.log('没有实现跳转方法')
  }
  let title = '查看全部'
  let color = ''
  if (props.name) {
    title=`查看更多/${props.name}房源`
    color = '#fadb14'
  }
  return (
    <SectionFooterWrepper textcolor={color}>
      <div className='info' onClick={abc}>
          <div className='itme'>{title}</div>
          <RightOutlined></RightOutlined>
      </div>

    </SectionFooterWrepper>
  )
})

export default SectionFooter