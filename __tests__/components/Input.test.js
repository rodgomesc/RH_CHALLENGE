import {fireEvent, render} from '@testing-library/react-native';
import React from 'react';
import CustomInput from '../../src/components/Input';

describe('CustomInput', () => {
  it('shoud be able to receive texts', () => {
    const {getByTestId} = render(<CustomInput />);
    const FamousActor = 'Gendalf the Grey';

    fireEvent.changeText(getByTestId('input'), FamousActor);
    expect(getByTestId('input')).toBeTruthy();
  });
});
