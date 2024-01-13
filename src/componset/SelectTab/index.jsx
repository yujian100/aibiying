import PropTypes from 'prop-types'
import React, { memo,useState} from 'react'
import classNames from 'classnames'
import { SelectTabWarpper } from './style'

const SelectTab = memo((props) => {
    const {list} = props
    const [select,Setselect] = useState([])
    function clickTab(itme,index){
        const newlist = [...select]
        if (select.includes(itme)) {
          const index = select.findIndex((itmeindex)=>{return itmeindex==itme})
          newlist.splice(index,1)
          Setselect(newlist)
          return
        }
        newlist.push(itme)
        Setselect(newlist)
      }
    return (
        <SelectTabWarpper>
            {list.map((itme, index) => {
                return <div key={index} className={classNames('itme', { active: select.includes(itme) })} onClick={e => clickTab(itme, index)}>{itme}</div>
            })}
        </SelectTabWarpper>
    )
})

SelectTab.propTypes = {
    list:PropTypes.array
}

export default SelectTab