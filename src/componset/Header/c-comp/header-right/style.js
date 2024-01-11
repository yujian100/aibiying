import styled from "styled-components";

export const RightWrapper = styled.div`
    flex:1;
    display: flex;
    justify-content: end;
    align-items:center;
    padding-right: 80px;
    cursor: pointer;
    .lang{
        width:18px;
        height:18px
    }
    .serice{
        position:relative;
        margin-left: 22px;
        width:85px;
        height:48px;
        border-radius:30px;
        display: flex;
        align-items: center;
        border:1px solid;
        border-color:var(--bordercolor);
        box-sizing: border-box;
        transition: box-shadow ease 0.4ms;
        &:hover{
            box-shadow: var(--boxS);

        }
        .handxian{
            width:32px;
            height:32px
        };
        .an{
            width:16px;
            height:16px;
            margin-left: 15px;
            margin-right: 8px;
            stroke: #161615;
            stroke-width: 3;
        };
        .menus{
            position: absolute;
            width: 200px;
            background: white;
            top: 50px;
            right: 0px;
            border-radius: 10px;
            border: 1px solid var(--bordercolor);
            padding: 5px 0;
            .menusTop{
                padding-bottom: 5px;
            }
            .menusbottom{
                border-top: 1px solid var(--bordercolor);
                padding-top: 5px;
            }
            .em{
                padding: 7px 0 7px 8px;
                &:hover{
                    background-color: #f7f7f7;
                }
            }
        }
    }

`