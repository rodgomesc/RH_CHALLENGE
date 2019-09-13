import styled from 'styled-components/native';
import {Card} from 'native-base';

export const Container = styled.View`
  flex: 1;
  background: #eee;
`;

export const Wrapper = styled(Card)`
  position: absolute;
  flex-direction: column;
  background: #fff;
  margin: 5px 15px 0;
  padding: 10px 10px 0;
  border-radius: 4px;
  height: 380;
  width: 380;
`;

export const RowWrapper = styled.View`
  flex-direction: row;
`;

export const Error = styled.Text`
  font-size: 12;
  color: red;
`;
