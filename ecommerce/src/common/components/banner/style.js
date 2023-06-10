import styled from "styled-components"

export const BannerContainer = styled.div`
    width: 100%;
    height: 50vh;
    background-color: gray;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 20px;
    border-radius: 20px;
`
export const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
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
    text-transform: uppercase;
`
export const BannerSubTitle = styled.h3`
    color: ${({theme}) => theme.colors.clearText};

`
export const BannerDescription = styled.p`
    margin: 20px 0px;
 `

export const ButtonWrapper = styled.div`
    width: ${props => props.width};
    height: ${props => props.height};
`