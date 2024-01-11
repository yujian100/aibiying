import { discount, goodprice, highscore, hotrecommenddest, longfor, plus } from '@/service'
import { createSlice,createAsyncThunk} from '@reduxjs/toolkit'

export const GoodPriceGet = createAsyncThunk('fetchgoodprice',(payload,{dispatch})=>{
     goodprice().then((res)=>{
        dispatch(HandGoodPriceGetDate(res))
     })
     highscore().then((res)=>{
        dispatch(HandHighScore(res))
     })
     discount().then((res)=>{
        dispatch(HandDisCount(res))
     })
     hotrecommenddest().then((res)=>{
        dispatch(HandHotRecommendDest(res))
     })
     longfor().then((res)=>{
        dispatch(HandLongFor(res))
     })
     plus().then((res)=>{
        dispatch(HandPlus(res))
     })
})

const homeStore = createSlice({
    name:'homeStore',
    initialState:{
        value:100,
        GoodPriceList:{},
        HighScoreDate:{},
        DisCountDate:{},
        HotRecommendDestDate:{},
        LongForDate:{},
        PlusDate:{}
    },
    reducers:{
        add(state,{payload}){
            state.value +=payload
        },
        HandGoodPriceGetDate(state,{payload}){
            state.GoodPriceList = payload
        },
        HandHighScore(state,{payload}){
            state.HighScoreDate = payload
        },
        HandDisCount(state,{payload}){
            state.DisCountDate = payload
        },
        HandHotRecommendDest(state,{payload}){
            state.HotRecommendDestDate = payload
        },
        HandLongFor(state,{payload}){
            state.LongForDate = payload
        },
        HandPlus(state,{payload}){
            state.PlusDate = payload
        }
    },

})

export default homeStore.reducer

export const {add,HandGoodPriceGetDate,HandHighScore,HandDisCount,HandHotRecommendDest,HandLongFor,HandPlus} = homeStore.actions