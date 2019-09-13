import React, {useState} from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {Container, Wrapper, RowWrapper, Error} from './styles';

import LinearExtraHeader from '../../../components/LinearExtraHeader';
import LinearButton from '../../../components/LinearButton';
import Input from '../../../components/Input';
import DatePicker from '../../../components/DatePicker';
import Picker from '../../../components/Picker';

export default function PersonEdit({navigation}) {
  const {
    nome,
    genero,
    nascimento,
    MunicipioNascimento,
    matricula,
    sexo,
    cargo,
    lotacao,
    estadoCivil,
  } = navigation.getParam('data');

  const schema = Yup.object().shape({
    nome: Yup.string().required('Campo nome é obrigatório!'),
    matricula: Yup.string().required('Campo Matricula é obrigatório!'),
    lotacao: Yup.string().required('Campo Lotação é obrigatório!'),
    cargo: Yup.string().required('Campo Cargo é obrigatório!'),
  });

  function handleSubmit(values) {
    // navigation.navigate('PersonList');
    console.log(`---> ${JSON.stringify(values)}`);
  }

  return (
    <>
      <Container>
        <LinearExtraHeader />
      </Container>
      <Formik
        initialValues={{
          nome,
          genero,
          nascimento,
          MunicipioNascimento,
          matricula,
          sexo,
          cargo,
          lotacao,
          estadoCivil,
        }}
        validationSchema={schema}
        onSubmit={values => handleSubmit(values)}>
        {props => (
          <Wrapper>
            {props.errors.nome && <Error>{props.errors.nome}</Error>}
            {props.errors.matricula && <Error>{props.errors.matricula}</Error>}
            {props.errors.lotacao && <Error>{props.errors.lotacao}</Error>}
            {props.errors.cargo && <Error>{props.errors.cargo}</Error>}
            <RowWrapper>
              <Input
                onChangeText={props.handleChange('nome')}
                onBlur={props.handleBlur('nome')}
                value={props.values.nome}
                placeholder="nome"
                icon="face"
              />
            </RowWrapper>
            <RowWrapper>
              <DatePicker placeholder="Nascimento" />
              <Picker
                onValueChange={(itemValue, itemIndex) =>
                  props.setFieldValue('genero', itemValue)
                }>
                <Picker.Item label="Masculino" value="Masculino" />
                <Picker.Item label="Feminino" value="Feminino" />
              </Picker>
            </RowWrapper>

            <RowWrapper>
              <Input
                onChangeText={props.handleChange('MunicipioNascimento')}
                onBlur={props.handleBlur('MunicipioNascimento')}
                value={props.values.MunicipioNascimento}
                placeholder="Municipio de nascimento"
                icon="call"
              />

              <Input
                onChangeText={props.handleChange('matricula')}
                onBlur={props.handleBlur('matricula')}
                value={props.values.matricula}
                placeholder="Matricula"
                icon="call"
              />
            </RowWrapper>

            <RowWrapper>
              <Picker
                onValueChange={(itemValue, itemIndex) =>
                  props.setFieldValue('sexo', itemValue)
                }>
                <Picker.Item label="Masculino" value="Masculino" />
                <Picker.Item label="Feminino" value="Feminino" />
              </Picker>
              <Picker
                onValueChange={(itemValue, itemIndex) =>
                  props.setFieldValue('estadoCivil', itemValue)
                }>
                <Picker.Item label="Solteiro" value="Solteiro" />
                <Picker.Item label="Casado" value="Casado" />
                <Picker.Item label="Divorciado" value="Divorciado" />
              </Picker>
            </RowWrapper>

            <RowWrapper>
              <Input
                onChangeText={props.handleChange('cargo')}
                onBlur={props.handleBlur('cargo')}
                value={props.values.cargo}
                placeholder="Cargo"
                icon="call"
              />
              <Input
                onChangeText={props.handleChange('lotacao')}
                onBlur={props.handleBlur('lotacao')}
                value={props.values.lotacao}
                placeholder="Lotação"
                icon="call"
              />
            </RowWrapper>

            <LinearButton onPress={props.handleSubmit} title="SALVAR" />
          </Wrapper>
        )}
      </Formik>
    </>
  );
}

PersonEdit.navigationOptions = {
  title: 'Dados Pessoais',
};
