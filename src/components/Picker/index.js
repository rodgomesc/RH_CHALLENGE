import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Container, CPicker} from './styles';

export default function CustomPicker({icon, ...data}) {
  return (
    <Container>
      <Icon name={icon} size={20} color="rgba(0,0,0,0.6)" />
      <CPicker {...data} />
    </Container>
  );
}
