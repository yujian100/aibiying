import React, { memo, useEffect, useState } from 'react'
import { BannerWerapper } from './c-com/HomeBanner/style'
import { HomeWrapper } from './style'
import { useDispatch, useSelector } from 'react-redux'
import { GoodPriceGet } from '@/store/module/home'
import SectionHomeV1 from './c-com/SectionHomeV1'
import { isEmptyO } from '@/ulits/isEmptyO'
import SectionHomeV2 from './c-com/SectionHomeV2'
import LongFor from './c-com/LongFor'
import SectionHomeV3 from './c-com/SectionHomeV3'
const Home = memo(() => {
  const dispatch = useDispatch()
  //网络请求数据
  useEffect(()=>{
    dispatch(GoodPriceGet())
  },[])
  //获取store的数据
  const {GoodPriceList,HighScoreDate,DisCountDate,HotRecommendDestDate,LongForDate,PlusDate} = useSelector(state=>state.homeStore)

  return (
    <HomeWrapper>
         <BannerWerapper/>
         <div className='content'>


            {isEmptyO(GoodPriceList) && <SectionHomeV1 datelist={GoodPriceList}/>}
            {isEmptyO(HighScoreDate) &&  <SectionHomeV1 datelist={HighScoreDate}/>}
            {isEmptyO(DisCountDate.dest_list) && <SectionHomeV2 infoData={DisCountDate} />}
            {isEmptyO(HotRecommendDestDate.dest_list) && <SectionHomeV2 infoData={HotRecommendDestDate} />}
            {isEmptyO(LongForDate) && <LongFor datelist={LongForDate}></LongFor> }
            {isEmptyO(PlusDate) &&  <SectionHomeV3 datelist={PlusDate}/>}
         </div>
    </HomeWrapper>
 
  )
})

export default Home