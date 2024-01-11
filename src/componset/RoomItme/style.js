import styled from "styled-components";


export const Itme = styled.li`
    width:${props=>props.itmewith};
    box-sizing: border-box;
    padding:8px;
    cursor: pointer;
    .ablum{
        height: 180px;
        width: 100%;
        img{
            height: 100%;
            width: 100%;
            border-radius: 6px
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
    
`