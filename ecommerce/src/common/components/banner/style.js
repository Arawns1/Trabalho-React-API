import styled from "styled-components"

export const BannerContainer = styled.div`
    width: 100%;
    height: 50vh;
    background-color: gray;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-around;

`
export const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
`

export const BannerInfo = styled.div`
    width: 488px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`
export const BannerTitle = styled.h2`
    color: ${({theme}) => theme.colors.titles};

`
export const BannerSubTitle = styled.h3`
    color: ${({theme}) => theme.colors.clearText};

`
export const BannerDescription = styled.p`
    margin: 20px 0px;

`