import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Container, Input, CText} from './styles';

export default function CustomInput({title, icon, placeholder, ...rest}) {
  return (
    <Container>
      <Icon name={icon} size={20} color="rgba(0,0,0,0.6)" />
      <CText>{placeholder}</CText>
      <Input {...rest} />
    </Container>
  );
}
