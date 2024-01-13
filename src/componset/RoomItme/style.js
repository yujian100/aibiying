import styled from "styled-components";


export const Itme = styled.li`
    width:${props=>props.itmewith};
    box-sizing: border-box;
    padding:8px;
    cursor: pointer;
    .ablum{
        height: 180px;
        width: 100%;
        .imgs{
            height: 100%;
            width: 100%;
            border-radius: 6px;
            object-fit: cover
        }
    }
    .detail{
        .mode{
            font-size: 14px;
            margin: 5px 0px;
            color:${(props=>props.textcolor)}
        }
        .title{
            font-size: 20px;
            font-weight: 700;
            margin-bottom: 5px;
}
        }
        .price{
            font-size: 14px;
  margin-bottom: 5px;
            color:${(props=>props.textcolor)}
        }
        .stkyi{
            color:${(props=>props.textcolor)}
        }
        .anticon.anticon-star {
  font-size: 12px;
  margin: 0 -2px;}
        .line-clamp2{
            overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        }
    .ant-carousel,.slick-slider ,.slick-list,.slick-track{
        height:100%
    }
    div:has(> .imgs){
        /* height:100%; */
        width:100%;
    }
    .swirp{
        position:relative;
        width:100%;
        height:100%;

    }
    .cotner{
        position: absolute;
        z-index: 99;
        top: 50%;
        transform: translateY(-50%);
        z-index: 99;
    }
    .anticon{
        color: #fff;
        font-size: 25px;
    }
    .left{
            left: 15px;
        }
    .right{
            right: 15px;
        }
        .l{
            position: absolute;
    z-index: 999;
    bottom: 5px;
    left: 50%;
    transform: translateX(-50%)
        }
        .s{
            width: 20%;
    flex-shrink: 0;
            span{
                display: inline-block;
    width: 6px;
    height: 6px;
    background: #a7a5a0;
    border-radius: 5px
            }
        }
    .slick-slide{
        >div{
            height:100%;
        }
    }
    .slick-list{
        border-radius:6px;
    }
        .active{
            background-color: #fff!important;
        }

`