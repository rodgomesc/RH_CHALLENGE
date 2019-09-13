import styled from 'styled-components';

export const Container = styled.View`
  position: absolute;
  font-weight: bold;
  width: 359px;
  margin: 15px 15px 15px 15px;
  padding: 0 15px;
  max-height: 46px;
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
  background: #fff;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#C4C4C4',
})`
  font-family: 'Roboto';
  font-weight: bold;
  background: #fff;
  color: #2c2d30;
  border-radius: 4px;
`;
