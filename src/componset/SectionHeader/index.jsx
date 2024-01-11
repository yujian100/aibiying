import React, { memo } from 'react'
import { Sectionheader } from './style'
const SectionHeader = memo((props) => {
  return (
    <Sectionheader>

        <h3 className='title'>
                {props.title}
        </h3>
        {props.subtitle&& <div className='subtitle'>{props.subtitle}</div>}

    </Sectionheader>
  )
})

export default SectionHeader