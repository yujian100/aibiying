import React, { memo } from 'react'
import {HeaderWrapper} from './style.js'
import HeaderCenter from './c-comp/header-center/index.jsx'
import HeaderRight from './c-comp/header-right/index.jsx'
import HeaderLeft from './c-comp/header-left/index.jsx'
const Header = memo(() => {
  return (
      <HeaderWrapper>
        <HeaderLeft></HeaderLeft>
        <HeaderCenter></HeaderCenter>
        <HeaderRight></HeaderRight>
      </HeaderWrapper>
  )
})

export default Header