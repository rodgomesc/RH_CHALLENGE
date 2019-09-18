import styled from 'styled-components/native';
import {Card, Picker as BasePicker} from 'native-base';
import {Switch as CSwitch} from 'react-native';

import {BallIndicator} from 'react-native-indicators';

export const Container = styled.View`
  flex: 1;
  background: #eee;
`;

export const Wrapper = styled(Card)`
  flex-direction: column;
  background: #fff;
  margin: 15px;
  padding: 10px 10px 0;
  top: -115px;
  border-radius: 4px;
  height: 580;
`;

export const SwitchWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 8;
  margin-right: 5;
`;

export const Switch = styled(CSwitch).attrs({
  thumbColor: '#95ADE8',
})``;

export const Picker = styled(BasePicker)`
  height: 40;
  background: white;
  color: #747474;
  margin-bottom: 3;
  border: solid 1px;
`;

export const PickerWrapper = styled.View`
  flex-direction: column;
`;

export const PickerWrapperRow = styled.View`
  flex-direction: row;
`;

export const ResultWrapper = styled.View`
  flex-direction: row;
  margin-top: 10;
`;

export const ResultText = styled.Text`
  font-family: 'Roboto';
  font-size: 14;
  margin-left: 5;
`;

export const ResultCont = styled.Text`
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 14;
`;

export const Persons = styled.FlatList.attrs({
  showsVerticalScrollIndicator: true,
})`
  margin-top: 10px;
`;

export const PersonItem = styled.TouchableOpacity`
  flex-direction: row;
  height: 90;
  margin: 10px 0 2px;
  background: #f2f2f2;
  border-radius: 4;
  elevation: 3;
`;

export const PersonAvatar = styled.Image`
  margin: 15px 0px 0 10px;
`;

export const PersonInfo = styled.View`
  flex: 1;
  padding-top: 14;
  flex-direction: row;
`;

export const PersonBlock = styled.View`
  flex-direction: row;
`;

export const PersonTitle = styled.Text`
  flex-direction: row;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 14;
  margin-top: 5px;
  margin-left: 2px;

  color: #7b7b7b;
`;

export const PersonData = styled.Text`
  flex-direction: row;
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 13;
  margin: 6px 0 0 3px;
  color: #7b7b7b;
`;

export const PersonInfoLeft = styled.View`
  flex: 1;
  flex-direction: column;
  padding-left: 5px;
  margin-right: 5px;
  margin-top: 7px;
`;
export const PersonInfoRight = styled.View`
  flex: 1;
  flex-direction: column;
  padding-left: 5px;
  margin-right: 5px;
  margin-top: 7px;
`;

export const Separator = styled.View`
  border-bottom-width: 1;
  border-color: rgba(0, 0, 0, 0.1);
`;

export const ActivityIndicator = styled(BallIndicator).attrs({
  color: '#7b7b7b',
})``;

export const ButtonAdd = styled.TouchableOpacity`
  border-radius: 3px;
  flex-direction: row;
  align-items: center;
  background: #95ade8;
  padding: 0 4px;
`;

export const ButtonText = styled.Text`
  font-weight: bold;
  color: white;
  margin-left: 2px;
`;

export const SwitchContainer = styled.View`
  border-radius: 3px;
  flex-direction: row;
  align-items: center;
  background: #fff;
  padding: 0 4px;
`;
export const SwitchText = styled.Text`
  font-weight: bold;
  color: #9c9c9c;
  margin-right: 2px;
`;
