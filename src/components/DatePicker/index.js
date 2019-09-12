import React from 'react';
import {Container, CDate} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function CustomDatePicker({...data}) {
  return (
    <Container>
      <Icon name={'date-range'} size={20} color="rgba(0,0,0,0.6)" />
      <CDate {...data} />
    </Container>
  );
}
