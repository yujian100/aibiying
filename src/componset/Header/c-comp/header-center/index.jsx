import React, { memo } from 'react'
import { CenterWrapper } from './style'
import Search from '@/asset/svg/Search'

const HeaderCenter = memo(() => {
  return (
    <CenterWrapper>
      <div className='itme centerLeft'>任何地方</div>
      <div className='itme centerCenter'>任意一周</div>
      <div className='centerRight'>
        <div className='itme text'>
            添加人数
        </div>
        <div className='bor'>
          <div className='search'>
            <Search></Search>
            </div>
        </div>

      </div>
    </CenterWrapper>
  )
})

export default HeaderCenter