import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {TouchableOpacity} from 'react-native';
import {ButtonWrapper, ButtonText} from './styles';

export default function LinearButton({title, ...rest}) {
  return (
    <ButtonWrapper>
      <TouchableOpacity {...rest}>
        <LinearGradient
          colors={['#95ADE8', '#6EB7F8']}
          style={{
            height: 54,
            width: 372,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 4,
          }}>
          <ButtonText>{title}</ButtonText>
        </LinearGradient>
      </TouchableOpacity>
    </ButtonWrapper>
  );
}
