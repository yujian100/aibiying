import React, { memo } from 'react'
import { Pagination } from 'antd';
import { PagBarWarpper } from './style';
import { useDispatch } from 'react-redux';
import { GetMoreDate, changecurrentPage } from '@/store/module/more/action';
const PagBar = memo((props) => {
  const dispatch = useDispatch()
  const {roomcount} = props
  function onChange(current, size){
    window.scrollTo(0, 0)
    dispatch(changecurrentPage(current-1))
    dispatch(GetMoreDate())
  }
  return (
    <PagBarWarpper>
      <Pagination defaultCurrent={1} total={roomcount} defaultPageSize={20} showSizeChanger={false}
        onChange={onChange}
      />
    </PagBarWarpper>
  )
})

export default PagBar