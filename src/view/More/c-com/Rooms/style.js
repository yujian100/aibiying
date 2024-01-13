import styled from "styled-components";

export const RoomsWrapper = styled.div`
    position:relative ;
    .roomtitle{
        font-size: 25px;
    font-weight: 700;
    margin: 8px 0;
    padding-left: 3px
    }
    .roomlist{
        display: flex;
        flex-wrap: wrap;
        /* .ablum{
            height: 100%;
    width: 100%;
        } */
    }
    .blume{
        position: absolute;
    top: 4px;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(0,0,0,0.3);
    }
`