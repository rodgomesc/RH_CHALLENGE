import styled from 'styled-components';
import {Dimensions} from 'react-native';

export const Container = styled.View`
  position: absolute;
  font-weight: bold;
  margin-top: 10;
  width: ${Dimensions.get('window').width - 30};
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
