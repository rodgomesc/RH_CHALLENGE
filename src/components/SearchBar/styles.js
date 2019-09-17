import styled from 'styled-components';

export const Container = styled.View`
  position: absolute;
  font-weight: bold;
  width: 359px;
  margin: 15px 15px 15px 15px;
  padding-left: 15;
  height: 54px;
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
  background: #fff;
  background: rgba(255, 255, 255, 0.6);
  align-self: center;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#8c8c8c',
})`
  flex: 1;
  font-family: 'Roboto';
  font-weight: bold;
  background: transparent;
  color: #2c2d30;
  padding-left: 10;
  margin-left: 5;
`;
