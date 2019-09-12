import styled from 'styled-components/native';
import {DatePicker, Card} from 'native-base';

export const Container = styled(Card)`
  flex: 1;
  padding: 0 15px;
  max-height: 46px;
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
`;

export const CDate = styled(DatePicker).attrs(props => ({
  defaultDate: new Date(),
  minimumDate: new Date(1950, 1, 1),
  maximumDate: new Date(2100, 12, 31),
  locale: 'pt',
  timeZoneOffsetInMinutes: undefined,
  modalTransparent: true,
  animationType: 'fade',
  androidMode: 'default',
  placeHolderText: props.placeholder ? props.placeholder : '',
  disabled: false,
  placeHolderTextStyle: {
    color: '#C4C4C4',
  },
}))``;
