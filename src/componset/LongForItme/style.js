import styled from "styled-components";


export const LongForItmeWerpper = styled.div`
        width: 20%;
    height: 248px;
    flex-shrink: 0;
    padding: 8px;
    box-sizing: border-box;

    .content{
        height:100%;
    }
    .bj{
        
        position: relative;
    border-radius: 5px;
    overflow: hidden;
        position: relative;
        height:100%;
        width:100%;
        cursor: pointer;
        img{
            width: 100%;
            height: 100%;
        }
        .buml{
            width: 100%;
    height: 40%;
    /* background: red; */
    position: absolute;
    bottom: 0px;
    /* background: linear-gradient(358deg, #545252, #e5e5e5); */
    background: linear-gradient(357deg, #504d4d, transparent);
    font-size: 22px;
    color: #fff;
    font-weight:700;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
            .sty{
                font-size: 16px;
                font-weight: 400;
            }
        }
    }

`