import React, { memo } from 'react'
import { SectionFooterWrepper } from './style'
import {RightOutlined} from '@ant-design/icons';
const SectionFooter = memo((props) => {
  let title = '查看全部'
  let color = ''
  if (props.name) {
    title=`查看更多/${props.name}房源`
    color = '#fadb14'
  }
  return (
    <SectionFooterWrepper textcolor={color}>
      <div className='info'>
          <div className='itme'>{title}</div>
          <RightOutlined></RightOutlined>
      </div>

    </SectionFooterWrepper>
  )
})

export default SectionFooter