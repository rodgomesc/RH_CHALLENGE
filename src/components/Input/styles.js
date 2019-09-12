import {Card} from 'native-base';
import styled from 'styled-components';

export const Container = styled(Card)`
  flex: 1;
  padding: 0 15px;
  max-height: 46px;
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#C4C4C4',
})`
  flex: 1;
  font-size: 15px;
  margin-left: 10px;
  color: #aaa;
  font-family: 'Roboto';
`;
