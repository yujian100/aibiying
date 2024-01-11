import styled from "styled-components";

export const SectionFooterWrepper = styled.div`
        display: flex;
    align-items: center;
    color: #000;
    font-weight: 700;
    margin-top: 8px;
    .info{
        display: flex;
        align-items: center;
        color: ${props=>props.textcolor};
        cursor: pointer;
        &:hover{
            text-decoration: underline;
        }
    }
` 