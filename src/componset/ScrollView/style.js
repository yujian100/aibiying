import styled from "styled-components";

export const SectionTabsWrppers = styled.div`
        position: relative;
        .Eslot{
            overflow: hidden;
        }
        .slot{
            display: flex;
            align-items: center;
            flex-wrap: nowrap;
            transition: all linear 0.5s;
        }
        .itmes{
            position: absolute;
            display: flex;
            align-items: center;
            top: 50%;
            transform: translateY(-50%);
            width: 20px;
            height: 20px;
            border-radius: 50px;
            background: #fff;
        }
        .right{
            position: absolute;
            right: -39px;
            border-radius: 50px
        }
        .left{
            position: absolute;
            width: 20px;
            height: 20px;
            left: -17px;
        }
`