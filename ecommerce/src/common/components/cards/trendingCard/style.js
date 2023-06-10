import styled from "styled-components";

export const ProductCard = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 270px;
  height: 300px;
  background-color: #363638;
  margin: 20px;
  padding: 20px;
  border-radius: 10px;
  align-items: center;

  span {
    margin: 5px;
    font-size: 20px;
    font-weight: bold;
  }

  img {
    border-radius: 12px;
    width: 220px;
    height: 300px;
  }

  .btnProduct {
    background-color: transparent;
    border: none;
    padding: 2px;
    font-size: 15px;
    cursor: pointer;
}
`