import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

export default function LinearExtraHeader() {
  return (
    <LinearGradient
      colors={['#95ADE8', '#6EB7F8']}
      style={{
        height: 186,
      }}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
    />
  );
}
