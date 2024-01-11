import styled from "styled-components";

export const FooterWarpper = styled.div`

    border-top:1px solid var(--bordercolor);
    color: #666;
    .Footbox{
        width:1032px;
            margin: 0 auto;
    .frinedLink{
                display: flex;
                align-content: center;
                justify-content: space-between;
                margin-top: 30px;
                font-size: 14px;
                &:last-child{
                    margin-top: 12px;
                }
        }
    .itme{
            display: flex;
            flex-direction: column;
            align-items: center;
        .img{
            width: 45px;
            height: 45px;
            border-radius: 30px;
            background-image: url(${require('asset/image/Footersrp.png')});
            background-size: 212px;
            background-position-x: 50px;
            background-position-y: -4px;
            }
            }

        }
    .detail{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    color: #666;
    font-size: 14px;
    margin-bottom: 10px;
    a{
        color: #666;
    }
    >p{
    margin-bottom: 10px;
   }
    .first{
        span{
            padding: 0 10px;
        }
    }
    }

    
   `