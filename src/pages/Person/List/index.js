import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import avatar from '../../../assets/images/avatar.png';
import {
  Container,
  SearchBar,
  Wrapper,
  PickerWrapper,
  PickerWrapperRow,
  Switch,
  SwitchWrapper,
  SwitchText,
  ResultText,
  ResultCont,
  ResultWrapper,
  Persons,
  PersonItem,
  PersonAvatar,
  PersonTitle,
  PersonData,
  PersonInfoLeft,
  PersonInfoRight,
  PersonBlock,
  Picker,
  Separator,
} from './styles';

export default function PersonList({navigation}) {
  const personData = [
    {
      id: '1',
      name: 'Rodrigo Gomes ',
      nasc: '04/04/1992',
      matricula: '1234-99',
      sexo: 'M',
    },
    {
      id: '2',
      name: 'Manoel Calixto',
      nasc: '04/04/1992',
      matricula: '1234-99',
      sexo: 'M',
    },
    {
      id: '3',
      name: 'Manoel Calixto',
      nasc: '04/04/1992',
      matricula: '1234-99',
      sexo: 'M',
    },
    {
      id: '4',
      name: 'Manoel Calixto',
      nasc: '04/04/1992',
      matricula: '1234-99',
      sexo: 'M',
    },
    {
      id: '5',
      name: 'Manoel Calixto',
      nasc: '04/04/1992',
      matricula: '1234-99',
      sexo: 'M',
    },
  ];
  function handleClick(){
    navigation.navigate('PersonDetail');
  }
  
  return (
    <>
      <Container>
        <LinearGradient
          colors={['#95ADE8', '#6EB7F8']}
          style={{
            height: 186,
          }}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
        />
        <SearchBar placeholder="Buscar" />
        <Wrapper>
          <PickerWrapper>
            <Picker>
              <Picker.Item label="Masculino" value="M" />

              <Picker.Item label="Feminino" value="F" />
            </Picker>
            <Separator />
            <PickerWrapperRow>
              <Picker
                onValueChange={() => console.log('changed')}
                mode="dropdown"
                placeholder="Press to select a region"
                iosIcon={<Icon name="add" size={20} color="#fff" />}>
                <Picker.Item label="Masculino" value="M" />
                <Picker.Item label="Feminino" value="F" />
              </Picker>

              <Picker
                onValueChange={() => console.log('changed')}
                mode="dialog">
                <Picker.Item label="Developer" value="Developer" />
                <Picker.Item label="Dba" value="Dba" />
              </Picker>
            </PickerWrapperRow>
            <Separator />
          </PickerWrapper>
          <SwitchWrapper>
            <SwitchText>Filtrar</SwitchText>
            <Switch />
          </SwitchWrapper>
          <ResultWrapper>
            <ResultCont>10</ResultCont>
            <ResultText>Registros encontrados...</ResultText>
          </ResultWrapper>
          <Persons
            data={personData}
            keyExtractor={person => String(person.id)}
            renderItem={({item}) => (
              <PersonItem onPress={handleClick}>
                <PersonAvatar source={avatar} />

                <PersonInfoLeft>
                  <PersonTitle>{item.name}</PersonTitle>
                  <PersonBlock>
                    <PersonTitle>Matricula:</PersonTitle>
                    <PersonData>{item.matricula}</PersonData>
                  </PersonBlock>
                </PersonInfoLeft>
                <PersonInfoRight>
                  <PersonBlock>
                    <PersonTitle>Nasc:</PersonTitle>
                    <PersonData>{item.nasc}</PersonData>
                  </PersonBlock>
                  <PersonBlock>
                    <PersonTitle>Sexo:</PersonTitle>
                    <PersonData>{item.sexo}</PersonData>
                  </PersonBlock>
                </PersonInfoRight>
              </PersonItem>
            )}
          />
        </Wrapper>
      </Container>
    </>
  );
}

PersonList.navigationOptions = {
  title: 'Pessoas',
};
