import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #eee;
`;

export const Wrapper = styled.ScrollView`
  flex-direction: column;
  background: #fff;
  padding: 10px 10px 0;
  border-radius: 4px;
  margin: 0 8px;
`;

export const RowWrapper = styled.View`
  flex-direction: row;
`;

export const Error = styled.Text`
  font-size: 13;
  font-weight: bold;
  color: #fff;
  background: #d1243e;
  padding: 4px;
  min-height: 13;
  border-radius: 2;
  align-self: stretch;
  text-align: center;
`;

export const ButtonContainer = styled.View`
  margin-bottom: 15px;
`;
