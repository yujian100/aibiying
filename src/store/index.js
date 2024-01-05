import {configureStore,} from '@reduxjs/toolkit'
import homereducer from './module/home'

const store = configureStore({
    reducer:{   
        homeStore:homereducer
    }
})

export default store