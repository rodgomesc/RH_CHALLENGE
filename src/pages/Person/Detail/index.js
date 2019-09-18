import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {ToastAndroid as toast} from 'react-native';
import database from '../../../config/firebase';
import {
  Container,
  ProfilePic,
  Profile,
  Info,
  Title,
  Description,
  Row,
  Separator,
  IconWrapper,
} from './styles';

import LinearExtraHeader from '../../../components/LinearExtraHeader';
import profileAvatar from '../../../assets/images/gendalf.jpg';

export default function PersonDetail({navigation}) {
  const data = navigation.getParam('data');

  function handleEdit() {
    navigation.navigate('PersonEdit', {data});
  }
  async function handleDelete() {
    await database
      .ref('person')
      .child(data.matricula)
      .remove();

    // FIXME: app crashes when redirect to PersonList
    toast.show(`Registo de Matricula ${data.matricula} deletado!`, toast.LONG);
    setTimeout(() => navigation.navigate('PersonList'), 1000);
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
              <Description>{data.matricula}</Description>
            </Info>
            <Info>
              <Title>Nome</Title>
              <Description>{data.nome}</Description>
            </Info>
          </Row>
          <Separator />
          <Row>
            <Info>
              <Title>Nascimento</Title>
              <Description>{data.nascimento}</Description>
            </Info>
            <Info>
              <Title>Município Nasc</Title>
              <Description>{data.municipioNascimento}</Description>
            </Info>
          </Row>
          <Separator />
          <Row>
            <Info>
              <Title>Estado Civil</Title>
              <Description>{data.estadoCivil}</Description>
            </Info>
            <Info>
              <Title>Sexo</Title>
              <Description>{data.sexo}</Description>
            </Info>
          </Row>
          <Separator />
          <Row>
            <Info>
              <Title>Lotação</Title>
              <Description>{data.lotacao}</Description>
            </Info>
            <Info>
              <Title>Cargo</Title>
              <Description>{data.cargo}</Description>
            </Info>
          </Row>
        </Profile>
        <IconWrapper>
          <Icon
            name="delete"
            color="#6EB7F8"
            size={36}
            onPress={handleDelete}
          />
          <Icon
            name="edit"
            color="#6EB7F8"
            size={36}
            onPress={() => handleEdit()}
          />
        </IconWrapper>
      </Container>
    </>
  );
}

PersonDetail.navigationOptions = {
  title: 'Detalhes',
};
