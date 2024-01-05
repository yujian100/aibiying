import { createSlice} from '@reduxjs/toolkit'
const homeStore = createSlice({
    name:'homeStore',
    initialState:{
        value:100,
        getlist:[]
    },
    reducers:{
        add(state,{payload}){
            state.value +=payload
        }
    }
})

export default homeStore.reducer

export const {add} = homeStore.actions