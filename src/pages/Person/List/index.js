import React, {useEffect, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';

import Icon from 'react-native-vector-icons/MaterialIcons';
import database from '../../../config/firebase';
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
  ActivityIndicator,
} from './styles';

export default function PersonList({navigation}) {
  const [personData, setPersonData] = useState([]);
  const [resultData, setResultData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    cargo: '',
    sexo: '',
    lotacao: '',
    estadoNascimento: '',
  });
  const [isToggled, setIsToggled] = useState(false);

  useEffect(() => {
    async function fetchFromDb() {
      // map each item to array

      database.ref('person').on('value', snapshot => {
        const items = [];
        snapshot.forEach(child => {
          items.push(child.val());
        });
        setPersonData(items);
        setResultData(items);
        setLoading(false);
      });
    }

    async function searchByFilter() {
      if (isToggled) {
        const data = personData.filter(person => {
          return (
            person.cargo === filters.cargo &&
            person.sexo === filters.sexo &&
            person.lotacao === filters.lotacao &&
            person.estadoNascimento === filters.estadoNascimento
          );
        });
        setResultData(data);
      }
    }

    fetchFromDb();
    searchByFilter();
  }, [filters, isToggled]);

  function handleClick(data) {
    navigation.navigate('PersonDetail', {data});
  }

  // handle dropdown filters
  async function handleFilter() {
    setIsToggled(!isToggled);
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
          placeholder="Pesquise por nome ou matricula..."
          onChangeText={handleSearch}
          icon="search"
        />

        <Wrapper>
          <PickerWrapper>
            <PickerWrapperRow>
              <Picker
                onValueChange={(itemValue, itemIndex) => {
                  setFilters({...filters, cargo: itemValue});
                }}
                selectedValue={filters.cargo}
                mode="dropdown">
                {personData.map(person => (
                  <Picker.Item
                    key={person.matricula}
                    label={person.cargo}
                    value={person.cargo}
                  />
                ))}
              </Picker>
              <Picker
                onValueChange={(itemValue, itemIndex) => {
                  setFilters({...filters, lotacao: itemValue});
                }}
                selectedValue={filters.lotacao}
                mode="dropdown">
                {personData.map(person => (
                  <Picker.Item
                    key={person.matricula}
                    label={person.lotacao}
                    value={person.lotacao}
                  />
                ))}
              </Picker>
            </PickerWrapperRow>

            <Separator />
            <PickerWrapperRow>
              <Picker
                onValueChange={(itemValue, itemIndex) => {
                  setFilters({...filters, sexo: itemValue});
                }}
                selectedValue={filters.sexo}
                mode="dropdown">
                <Picker.Item label="Masculino" value="M" />
                <Picker.Item label="Feminino" value="F" />
              </Picker>
              <Picker
                onValueChange={(itemValue, itemIndex) => {
                  setFilters({...filters, estadoNascimento: itemValue});
                }}
                selectedValue={filters.estadoNascimento}
                mode="dropdown">
                {personData.map(person => (
                  <Picker.Item
                    key={person.matricula}
                    label={person.estadoNascimento}
                    value={person.estadoNascimento}
                  />
                ))}
              </Picker>
            </PickerWrapperRow>
            <Separator />
          </PickerWrapper>
          <SwitchWrapper>
            <Icon
              name="person-add"
              color="#95ADE8"
              size={36}
              onPress={() => navigation.navigate('PersonCreate')}
            />

            <Switch onValueChange={handleFilter} value={isToggled} />
          </SwitchWrapper>
          <ResultWrapper>
            <ResultCont>{resultData.length}</ResultCont>
            <ResultText>Registros encontrados...</ResultText>
          </ResultWrapper>
          {loading ? (
            <ActivityIndicator />
          ) : (
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
                    <PersonBlock>
                      <PersonTitle>Lotação:</PersonTitle>
                      <PersonData>{item.lotacao}</PersonData>
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
                    <PersonBlock>
                      <PersonTitle>Cargo:</PersonTitle>
                      <PersonData>{item.cargo}</PersonData>
                    </PersonBlock>
                  </PersonInfoRight>
                </PersonItem>
              )}
            />
          )}
        </Wrapper>
      </Container>
    </>
  );
}

PersonList.navigationOptions = {
  title: 'Pessoas',
};
