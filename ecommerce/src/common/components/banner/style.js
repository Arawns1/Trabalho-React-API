import styled from "styled-components"

export const BannerContainer = styled.div`
    width: 100%;
    height: 50vh;
    background-color: gray;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    border-radius: 20px;
    padding: 0px 25px;
    
        img{
            object-fit: contain;
            object-position: center;
            height: 350px;
            width: 80%;
            
            filter: drop-shadow(30px 10px 10px rgba(33, 33, 36, 0.44));
        }

        @media (max-width: 1024px) {
            img{
            object-fit: contain;
            object-position: center;
            height: 50%;
            width: 50%;
            
        }

        @media (max-width: 480px) {
            flex-direction: column-reverse;
            justify-content: center;
            img{
            object-fit: contain;
            object-position: center;
            height: 50%;
            width: 80%;
            }
        }
    }
`

export const InfoWrapper = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    @media (max-width: 480px) {
      text-align: center;
      align-items: center;
      gap: 0px;
    }
`

export const BannerInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    @media (max-width: 480px) {
      text-align: center;
      align-items: center
    }

`
export const BannerTitle = styled.h2`
    color: ${({theme}) => theme.colors.titles};
    font-size: 1.3em;
    text-transform: uppercase;
    @media (max-width: 480px) {
        font-size: 1em;   
    }
`
export const BannerSubTitle = styled.h3`
    color: ${({theme}) => theme.colors.clearText};
    font-size: 1.1em;

    @media (max-width: 768px) {
        font-size:0.9em;
    }

    @media (max-width: 480px) {
        font-size: 0.8em;   
    }
    @media (max-width: 375px) {
        display: none;
    }

`
export const BannerDescription = styled.p`
    margin: 20px 0px;
    font-size: 0.8em;

    @media (max-width: 768px) {
        font-size: 0.7em;
        margin: 5px 0px;
    }

    @media (max-width: 480px) {
      display: none;
    }
 `

export const ButtonWrapper = styled.div`
    width: ${props => props.width};
    height: ${props => props.height};

    
`