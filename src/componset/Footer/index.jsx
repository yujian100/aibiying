import React, { memo } from 'react'
import { FooterWarpper } from './style'

const Footer = memo(() => {
  return (
    <FooterWarpper>

        <div className='Footbox'>

            <div className='frinedLink'>
              <div className='itme'>
                <div className='img'></div>
                <div>音乐开放平台</div>
              </div>
              <div className='itme'>
                <div className='img'></div>
                <div>云村交易所</div>
              </div>
              <div className='itme'>
                <div className='img'></div>
                <div>Amped Studio（安培一室公寓）</div>
              </div>
              <div className='itme'>
                <div className='img'></div>
                <div>云村交易所</div>
              </div>
              <div className='itme'>
                <div className='img'></div>
                <div>云村交易所</div>
              </div>
              <div className='itme'>
                <div className='img'></div>
                <div>云村交易所</div>
              </div>
              <div className='itme'>
                <div className='img'></div>
                <div>云村交易所</div>
              </div>
            </div>
            <div className='detail'>
                <p className='first'>
                  <a href="">服务条款</a>
                  <span>|</span>
                  <a href="">隐私政策</a>
                  <span>|</span>
                  <a href="">儿童隐私政策</a>
                  <span>|</span>
                  <a href="">版权投诉</a>
                  <span>|</span>
                  <a href="">投资者关系</a>
                  <span>|</span>
                  <a href="">广告合作</a>
                  <span>|</span>
                  <a href="">联系我们</a>
                  <span></span>
                </p>
                <p>
                  <a href="#">廉正举报</a>
                  <span>不良信息举报邮箱: 51jubao@service.netease.com</span>
                  <span>客服热线：95163298</span>
                </p>
                <p>
                  <span>互联网宗教信息服务许可证：浙（2022）0000120</span>
                  <span>增值电信业务经营许可证：浙B2-20150198</span>
                  <a href="">粤B2-20090191-18  工业和信息化部备案管理系统网站</a>
                </p>
                <p>
                  <span>网易公司版权所有©1997-2024</span>
                  <span>杭州乐读科技有限公司运营：</span>
                  <a href="">浙网文[2021] 1186-054号</a>
                  <a href="">浙公网安备 33010802013307号</a>
                </p>
            </div>
        </div>

    </FooterWarpper>
  )
})

export default Footer