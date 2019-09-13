import styled from 'styled-components/native';
import {Card} from 'native-base';

export const Container = styled(Card)`
  position: absolute;
  width: 380;
  height: 500;
  flex-direction: column;
  background: #fff;
  margin: 88px 15px 0px;
  padding: 10px 10px 0;
  border-radius: 4px;
`;

export const ProfilePic = styled.Image`
  height: 138;
  width: 138;
  border-radius: 69;
  align-self: center;
  top: -70;
  border-width: 4px;
  border-color: #fff;
`;

export const Profile = styled.View`
  top: -50;
  flex-direction: column;
`;

export const Info = styled.View`
  width: 100;
`;

export const Title = styled.Text`
  font-size: 14;
  font-family: 'Roboto';
  color: #a5a3a3;
  margin-bottom: 3px;
`;

export const Description = styled.Text`
  font-weight: bold;
  font-size: 14;
  font-family: 'Roboto';
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-top: ${props => (props.first ? 0 : 10)};
`;

export const Separator = styled.View`
  margin: 18px 0 0;
  border-bottom-width: 1;
  border-color: rgb(204, 204, 204);
`;
