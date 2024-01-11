import React, { memo } from 'react'
import { LongForItmeWerpper } from './style'

const LongForItme = memo((props) => {
    const {itme} = props
    return (
    <LongForItmeWerpper>
        <div className='content'>
            <div className='bj'>
                <img src={itme.picture_url} alt="" />
                <div className="buml">
                    <span>{itme.city}</span>
                    <span className='sty'>均价{itme.price}</span>
                </div>
            </div>
        </div>
    </LongForItmeWerpper>
  )
})

export default LongForItme