import React, { memo } from 'react'
import { LeftWrapper } from './style'

const HeaderLeft = memo(() => {
  return (
    <LeftWrapper>
      <h1 className='log'>
        <a href="as" className='logImg'>爱彼迎</a>
      </h1>
    </LeftWrapper>
  )
})

export default HeaderLeft