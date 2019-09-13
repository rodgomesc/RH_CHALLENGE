import React from 'react';
import {
  Container,
  ProfilePic,
  Profile,
  Info,
  Title,
  Description,
  Row,
  Separator,
} from './styles';

import LinearExtraHeader from '../../../components/LinearExtraHeader';
import profileAvatar from '../../../assets/images/gendalf.jpg';

export default function PersonDetail({navigation}) {
  function handleClick() {
    navigation.navigate('PersonList');
  }
  return (
    <>
      <LinearExtraHeader />
      <Container>
        <ProfilePic source={profileAvatar} />
        <Profile>
          <Row first>
            <Info>
              <Title>Matricula</Title>
              <Description>9999999-9998</Description>
            </Info>
            <Info>
              <Title>Nome</Title>
              <Description>Rodrigo Gomes</Description>
            </Info>
          </Row>
          <Separator />
          <Row>
            <Info>
              <Title>Nascimento</Title>
              <Description>04/04/1992</Description>
            </Info>
            <Info>
              <Title>Município Nasc</Title>
              <Description>9999999-9998</Description>
            </Info>
          </Row>
          <Separator />
          <Row>
            <Info>
              <Title>Estado Civil</Title>
              <Description>04/04/1992</Description>
            </Info>
            <Info>
              <Title>Sexo</Title>
              <Description>9999999-9998</Description>
            </Info>
          </Row>
          <Separator />
          <Row>
            <Info>
              <Title>Lotação</Title>
              <Description>04/04/1992</Description>
            </Info>
            <Info>
              <Title>Cargo</Title>
              <Description>9999999-9998</Description>
            </Info>
          </Row>
        </Profile>
      </Container>
    </>
  );
}

PersonDetail.navigationOptions = {
  title: 'Detalhes',
};
