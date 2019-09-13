import React from 'react';
import { Container, Wrapper, RowWrapper, ButtonWrapper } from './styles';

import LinearExtraHeader from '../../../components/LinearExtraHeader';
import LinearButton from '../../../components/LinearButton';
import Input from '../../../components/Input';
import DatePicker from '../../../components/DatePicker';
import Picker from '../../../components/Picker';


export default function PersonEdit({ navigation }) {
  function handleClick() {
    navigation.navigate('PersonList');
  }
  return (
    <>
      <Container>
        <LinearExtraHeader />
      </Container>
      <Wrapper>
        <RowWrapper>
          <Input title="Nome" icon="face" />
        </RowWrapper>

        <RowWrapper>
          <Input title="Genero" icon="wc" />
          <DatePicker placeholder="Nascimento" />
        </RowWrapper>

        <RowWrapper>
          <Input title="Município de nascimento" icon="call" />
          <Input title="Matrícula" icon="call" />
        </RowWrapper>

        <RowWrapper>
          <Picker icon="pan-tool">
            <Picker.Item label="Solteiro" value="M" />
            <Picker.Item label="Casado" value="F" />
            <Picker.Item label="Divorciado" value="F" />
          </Picker>
          <Picker icon="swap-calls">
            <Picker.Item label="Masculino" value="M" />
            <Picker.Item label="Feminino" value="F" />
          </Picker>
        </RowWrapper>

        <RowWrapper>
          <Input title="Cargo" icon="work" />
          <Input title="Lotação" icon="directions-bus" />
        </RowWrapper>

        <ButtonWrapper>
          <LinearButton title="SALVAR" onPress={handleClick} />
        </ButtonWrapper>
      </Wrapper>
    </>
  );
}

PersonEdit.navigationOptions = {
  title: 'Editar Pessoa',
};
