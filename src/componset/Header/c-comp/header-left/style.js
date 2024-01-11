import styled from "styled-components";
export const LeftWrapper = styled.div`
    flex:1;
    .log{
        margin-left: 100px;
    }
    .logImg{
        display: block;
        width:160px;
        height: 32px;
        background: url(${require('asset/image/log.png')}) center;
        background-size: cover;
        background-position: center;
        text-indent:-9999px;
    }
`