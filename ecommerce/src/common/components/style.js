import styled from 'styled-components';

export const Button = styled.button`
    height: 40px;
    width: 110px;
    color: black;
    background: ${props => {
      let color;
      switch (props.type) {
        case 'sucess':
          color = 'green';
          break;
        case 'warning':
          color = 'yellow';
          break;
        case 'error':
          color = 'red';
          break;
      }
        return color;
    }};
    border: none;
    border-radius: 7px;
`;