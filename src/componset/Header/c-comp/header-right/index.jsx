import React, { memo, useEffect, useState } from 'react'
import { RightWrapper } from './style'
import Ele from '@/asset/svg/Ele'
import Bar from '@/asset/svg/Bar'
import Toan from '@/asset/svg/Toan'

const HeaderRight = memo(() => {
  const [isRes,setRes] = useState(false)
  function click(e){
    e.stopPropagation();
    setRes(true)
  }
  window.addEventListener('click',()=>{
      setRes(false)
    },true)//设置为捕获


  return (
    <RightWrapper>
      <div className='lang'>
        <Ele></Ele> 
      </div>
      <div className='serice' onClick={(e)=>click(e)}>
        <div className='an'>
          <Toan></Toan>
        </div>
        <div className='handxian'>
          <Bar></Bar>
        </div>
        { isRes && <div className='menus'>
                    <div className='menusTop'>
                      <div className='em inup'>注册</div>
                      <div className='em login'>登入</div>
                    </div>
                    <div className='menusbottom'>
                      <div className='em'>
                        帮助中心
                      </div>
                    </div>       
                </div>
        }
      </div>
    </RightWrapper>
  )
})

export default HeaderRight