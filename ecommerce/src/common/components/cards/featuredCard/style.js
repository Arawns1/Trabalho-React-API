import styled from "styled-components";

export const ContainerCard = styled.div `
  width: 633px;
  height: 333px;
  background-color: #363638;
  border-radius: 10px;
`

export const Featured = styled.div `
  display: flex;
  background-color: black;
  border-radius: 12px;

  img {
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
  }
`

export const Description = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;
  gap: 14.91px;
  isolation: isolate;
  margin-left: 25px;

  .btnFeatured {
    display: flex;
    flex-direction: row;
    font-size: 15px;
    justify-content: center;
    align-items: center;
    width: 330px;
    height: 40px;
    padding: 9px 10px;
    gap: 5px;
    background-color: #9460E9;
    border-radius: 5px;
    cursor: pointer;
    border: none;
  }
`