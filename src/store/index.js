import {configureStore,} from '@reduxjs/toolkit'
import homereducer from './module/home'
import {reducer} from './module/more/index'
const store = configureStore({
    reducer:{   
        homeStore:homereducer,
        moreStore: reducer
    }
})

export default store