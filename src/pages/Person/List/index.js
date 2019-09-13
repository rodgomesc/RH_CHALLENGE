import React, {useEffect, useState} from 'react';
import {AsyncStorage} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import avatar from '../../../assets/images/avatar.png';
import SearchBar from '../../../components/SearchBar';
import {
  Container,
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
  const INITIAL_DATA = [
    {
      nome: 'Rodrigo Gomes',
      nascimento: '04/04/1992',
      matricula: '1234-99',
      sexo: 'M',
      municipioNascimento: 'Quirinópolis',
      estadoCivil: 'casado',
      lotacao: 'palmas',
      cargo: 'Developer',
    },
    {
      nome: 'Manoel Calixto',
      nascimento: '04/04/1980',
      matricula: '12j34-99',
      sexo: 'F',
      municipioNascimento: 'Ceará',
      estadoCivil: 'divorciado',
      lotacao: 'santa helena',
      cargo: 'faxineiro',
    },
  ];
  const [personData, setPersonData] = useState(INITIAL_DATA);

  const [resultData, setResultData] = useState(INITIAL_DATA);

  useEffect(() => {
    async function setData() {
      await AsyncStorage.setItem(
        'data',
        JSON.stringify([
          {
            nome: 'Rodrigo Gomes',
            nascimento: '04/04/1992',
            matricula: '1234-99',
            sexo: 'M',
            municipioNascimento: 'Quirinópolis',
            estadoCivil: 'casado',
            lotacao: 'palmas',
            cargo: 'Developer',
          },
          {
            nome: 'Manoel Calixto',
            nascimento: '04/04/1980',
            matricula: '12j34-99',
            sexo: 'F',
            municipioNascimento: 'Ceará',
            estadoCivil: 'divorciado',
            lotacao: 'santa helena',
            cargo: 'faxineiro',
          },
        ]),
      );
    }
    async function getData() {
      const data = await AsyncStorage.getItem('data');
      setPersonData(await JSON.parse(data));
    }
    // setData();
    // getData();
  }, []);

  function handleClick(data) {
    navigation.navigate('PersonDetail', {data});
  }

  async function handleSearch(text) {
    const formatedQuery = text.toLowerCase();
    const data = personData.filter(person => {
      return (
        person.nome.toLowerCase() === formatedQuery ||
        person.matricula.toLowerCase() === formatedQuery
      );
    });
    if (!text) {
      setResultData(personData);
    } else {
      setResultData(data);
    }
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
        <SearchBar
          placeholder="Pesquise Por Um Nome ou Matricula"
          onChangeText={handleSearch}
          icon="search"
        />
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
                mode="dropdown">
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
            <ResultCont>{resultData.length}</ResultCont>
            <ResultText>Registros encontrados...</ResultText>
          </ResultWrapper>
          <Persons
            data={resultData}
            keyExtractor={person => String(person.matricula)}
            renderItem={({item}) => (
              <PersonItem onPress={() => handleClick(item)}>
                <PersonAvatar source={avatar} />
                <PersonInfoLeft>
                  <PersonTitle>{item.nome}</PersonTitle>
                  <PersonBlock>
                    <PersonTitle>Matricula:</PersonTitle>
                    <PersonData>{item.matricula}</PersonData>
                  </PersonBlock>
                </PersonInfoLeft>
                <PersonInfoRight>
                  <PersonBlock>
                    <PersonTitle>Nasc:</PersonTitle>
                    <PersonData>{item.nascimento}</PersonData>
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
