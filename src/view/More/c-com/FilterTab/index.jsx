import React, { memo, useState } from 'react'
import { FilterWarpper } from './style'
import SelectTab from '@/componset/SelectTab'
const FilterTab = memo(() => {
  const [tablist,Settablist] = useState(['aa','bb','cc','dd','ee','ff','gg','kk','hh'])
  return (
    <FilterWarpper>
      <div className="tablist">
        <SelectTab list={tablist}></SelectTab>
      </div>
    </FilterWarpper>
  )
})

export default FilterTab