import styled from "styled-components";

export const ConterTabsWarpper = styled.div`

        margin-top: 16px;
    margin-bottom: 8px;
        .itme{
            flex-shrink: 0;
        flex-basis: 120px;
        padding: 14px 16px;
        font-size: 17px;
        box-sizing: border-box;
        margin-right: 14px;
        margin-bottom: 1px;
        border-radius: 12px;
        text-align: center;
        white-space: nowrap;
        border:1px solid #eee;
        cursor: pointer;
        transition: box-shadow ease 0.4ms;
        &:hover{
            box-shadow: var(--boxS);
        }
        }
        .active{
            background-color: red;
        }

`