import styled from 'styled-components';

export const Wrapper = styled.span`
  color: ${({ isGreen }) => isGreen ? 'green' : 'oranged'};
`;

export const Text = styled.p`
  font-weight: 500;
  font-size: 20px;
  background-color: beige;
  &:hover {
    background-color: tomato;
  }
  &:hover ${Wrapper} {
    color: yellow;
  }
`;