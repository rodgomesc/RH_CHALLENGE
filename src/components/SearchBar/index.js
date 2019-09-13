import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Container, Input} from './styles';

export default function CustomSearchBar({icon, ...rest}) {
  return (
    <Container>
      <Icon name={icon} size={20} color="rgba(0,0,0,0.6)" />
      <Input {...rest} />
    </Container>
  );
}
