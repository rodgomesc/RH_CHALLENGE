import {Card} from 'native-base';
import styled from 'styled-components/native';

export const Container = styled(Card)`
  flex: 1;
  padding: 0 15px;
  max-height: 46px;
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
`;

export const Input = styled.TextInput`
  flex: 1;
  font-size: 15px;
  margin-left: 10px;
  color: #1f1e1c;
  font-family: 'Roboto';
`;

export const CText = styled.Text`
  color: #8c8c8c;
  margin-left: 2px;
`;
