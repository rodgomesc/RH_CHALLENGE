import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Container, CDate} from './styles';

export default function CustomDatePicker({...data}) {
  return (
    <Container>
      <Icon name="date-range" size={20} color="rgba(0,0,0,0.6)" />
      <CDate {...data} />
    </Container>
  );
}
