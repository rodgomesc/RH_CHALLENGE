import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {ToastAndroid as toast, KeyboardAvoidingView} from 'react-native';
import {Container, Wrapper, RowWrapper, Error, ButtonContainer} from './styles';

import LinearExtraHeader from '../../../components/LinearExtraHeader';
import LinearButton from '../../../components/LinearButton';
import Input from '../../../components/Input';
import DatePicker from '../../../components/DatePicker';
import Picker from '../../../components/Picker';
import database from '../../../config/firebase';
import {Separator} from '../Detail/styles';

export default function PersonEdit({navigation}) {
  // receive all fields values

  const {
    nome,
    nascimento,
    municipioNascimento,
    estadoNascimento,
    matricula,
    sexo,
    cargo,
    lotacao,
    estadoCivil,
    celular,
    telefone,
    email,
  } = navigation.getParam('data');

  const schema = Yup.object().shape({
    nome: Yup.string().required('Campo nome é obrigatório!'),
    matricula: Yup.string().required('Campo Matricula é obrigatório!'),
    lotacao: Yup.string().required('Campo Lotação é obrigatório!'),
    cargo: Yup.string().required('Campo Cargo é obrigatório!'),
    celular: Yup.string().required('Campo Celular é obrigatório!'),
    telefone: Yup.string().required('Campo telefone é obrigatório!'),
    email: Yup.string().required('Campo email é obrigatório!'),
  });

  async function handleSubmit(values) {
    await database.ref(`person/${values.matricula}`).set({
      nome: values.nome,
      nascimento: values.nascimento,
      matricula: values.matricula,
      sexo: values.sexo,
      municipioNascimento: values.municipioNascimento,
      estadoNascimento: values.estadoNascimento,
      estadoCivil: values.estadoCivil,
      lotacao: values.lotacao,
      cargo: values.cargo,
      celular: values.celular,
      telefone: values.telefone,
      email: values.email,
    });
    toast.show('Dados salvos com sucesso', toast.LONG);
    navigation.navigate('PersonList');
  }

  return (
    <>
      <Container>
        <LinearExtraHeader />
      </Container>
      <Formik
        initialValues={{
          nome,
          nascimento,
          municipioNascimento,
          estadoNascimento,
          matricula,
          sexo,
          cargo,
          lotacao,
          estadoCivil,
          celular,
          telefone,
          email,
        }}
        validationSchema={schema}
        onSubmit={values => handleSubmit(values)}>
        {props => (
          <KeyboardAvoidingView
            keyboardVerticalOffset={-200}
            behavior="padding">
            <Wrapper>
              <Input
                onChangeText={props.handleChange('matricula')}
                onBlur={() => props.setFieldTouched('matricula')}
                value={props.values.matricula}
                placeholder="matricula"
                icon="list"
              />
              {props.touched.matricula && props.errors.matricula && (
                <Error>{props.errors.matricula}</Error>
              )}
              <Input
                onChangeText={props.handleChange('nome')}
                onBlur={() => props.setFieldTouched('nome')}
                value={props.values.nome}
                placeholder="nome"
                icon="person-pin"
              />
              {props.touched.nome && props.errors.nome && (
                <Error>{props.errors.nome}</Error>
              )}

              <RowWrapper>
                <DatePicker placeholder="Nascimento" />
                <Picker
                  selectedValue={props.values.sexo}
                  onValueChange={(itemValue, itemIndex) =>
                    props.setFieldValue('sexo', itemValue)
                  }>
                  <Picker.Item label="Masculino" value="M" />
                  <Picker.Item label="Feminino" value="F" />
                </Picker>
              </RowWrapper>

              <Input
                onChangeText={props.handleChange('municipioNascimento')}
                onBlur={props.handleBlur('municipioNascimento')}
                value={props.values.municipioNascimento}
                placeholder="Municipio Nasc."
                icon="child-friendly"
              />

              <Input
                onChangeText={props.handleChange('estadoNascimento')}
                onBlur={props.handleBlur('estadoNascimento')}
                value={props.values.estadoNascimento}
                placeholder="Estado Nasc."
                icon="location-city"
              />

              <RowWrapper>
                <Picker
                  selectedValue={props.values.estadoCivil}
                  onValueChange={(itemValue, itemIndex) =>
                    props.setFieldValue('estadoCivil', itemValue)
                  }
                  onBlur={props.handleBlur('estadoCivil')}
                  icon="wc">
                  <Picker.Item label="Solteiro(a)" value="Solteiro" />
                  <Picker.Item label="Casado(a)" value="Casado" />
                  <Picker.Item label="Divorciado(a)" value="Divorciado" />
                </Picker>
              </RowWrapper>

              <Input
                onChangeText={props.handleChange('cargo')}
                onBlur={() => props.setFieldTouched('cargo')}
                value={props.values.cargo}
                placeholder="Cargo"
                icon="work"
              />
              {props.touched.cargo && props.errors.cargo && (
                <Error>{props.errors.cargo}</Error>
              )}
              <Input
                onChangeText={props.handleChange('lotacao')}
                onBlur={() => props.setFieldTouched('lotacao')}
                value={props.values.lotacao}
                placeholder="Lotação"
                icon="directions-bus"
              />
              {props.touched.lotacao && props.errors.lotacao && (
                <Error>{props.errors.lotacao}</Error>
              )}

              <Separator />

              <RowWrapper>
                <Input
                  onChangeText={props.handleChange('celular')}
                  onBlur={() => props.setFieldTouched('celular')}
                  value={props.values.celular}
                  placeholder="Cel"
                  icon="smartphone"
                />
                {props.touched.celular && props.errors.celular && (
                  <Error>{props.errors.celular}</Error>
                )}

                <Input
                  onChangeText={props.handleChange('telefone')}
                  onBlur={() => props.setFieldTouched('telefone')}
                  value={props.values.telefone}
                  placeholder="Tel"
                  icon="local-phone"
                />
                {props.touched.telefone && props.errors.telefone && (
                  <Error>{props.errors.telefone}</Error>
                )}
              </RowWrapper>
              <Input
                onChangeText={props.handleChange('email')}
                onBlur={props.handleBlur('email')}
                value={props.values.email}
                placeholder="E-mail"
                icon="mail"
              />
              {props.touched.email && props.errors.email && (
                <Error>{props.errors.email}</Error>
              )}
              <ButtonContainer>
                <LinearButton
                  type="button"
                  onPress={props.handleSubmit}
                  title="SALVAR"
                />
              </ButtonContainer>
            </Wrapper>
          </KeyboardAvoidingView>
        )}
      </Formik>
    </>
  );
}

PersonEdit.navigationOptions = {
  title: 'Dados Pessoais',
};
