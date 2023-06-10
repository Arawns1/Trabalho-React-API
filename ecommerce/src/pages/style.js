import styled from "styled-components";

export const MainContainer = styled.div`
    margin: 0 auto;
    background-color: ${({theme}) => theme.colors.body};
    width: 95%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 50px;
`

