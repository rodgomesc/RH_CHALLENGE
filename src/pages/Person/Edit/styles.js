import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #eee;
`;

export const Wrapper = styled.ScrollView`
  position: absolute;
  flex-direction: column;
  background: #fff;
  margin: 20px 15px 0;
  padding: 10px 10px 0;
  border-radius: 4px;
  height: 540;
  width: 380;
  align-self: center;
`;

export const RowWrapper = styled.View`
  flex-direction: row;
`;

export const Error = styled.Text`
  width: 360px;
  font-size: 14;
  font-weight: bold;
  color: #fff;
  background: #d1243e;
  margin: 4px;
  padding: 4px;
  min-height: 15;
  border-radius: 3;
  align-self: center;
  text-align: center;
`;

export const ButtonContainer = styled.View`
  margin-bottom: 15px;
`;
