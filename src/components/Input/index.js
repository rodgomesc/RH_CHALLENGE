import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Container, Input, CText} from './styles';

export default function CustomInput({title, icon, placeholder, ...rest}) {
  return (
    <Container>
      <Icon name={icon} size={20} color="#8c8c8c" />
      <CText>{placeholder}</CText>
      <Input {...rest} />
    </Container>
  );
}
