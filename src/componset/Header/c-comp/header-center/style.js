import styled from "styled-components";

export const CenterWrapper = styled.div`
    display:flex;
    width: 313px;
    height: 48px;
    border: 1px solid var(--bordercolor);
    border-radius: 25px;
    font-size: 14px;
    align-items: center;
    box-sizing: border-box;
    padding-top: 5px;
    transition: box-shadow ease 0.4ms;
    cursor: pointer;
    &:hover{
        box-shadow:var(--boxS);
    }
    .itme{
        width: 88px;
        text-align: center;
        border-right: 1px solid var(--bordercolor);
        font-weight: 700;
        height:22px;
    }
    .centerRight{
        flex:1;
        display: flex;
        align-items:center;
        padding:0 8px;
        .text{
            border-right:none;
        }
        .bor{
            width: 32px;
            height: 32px;
            background: red;
            border-radius: 20px;
            display: flex;
            align-items: center;
            justify-content: center
        }
        .search{
            display: block;
            width: 16px;
            height: 16px;
            stroke: currentColor;
            color: white;
            stroke-width: 4px;
            overflow: hidden;
        
        }
    }
`