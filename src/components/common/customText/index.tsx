/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text} from 'react-native-paper';
import {ICustomTextProps} from './types/index';

const CustomText = ({text, color, fontSize, fontWeight}: ICustomTextProps) => {
  return (
    <>
      <Text
        style={[
          {
            color: color ? color : 'white',
            fontSize: fontSize ? fontSize : 16,
            fontWeight: fontWeight,
          },
        ]}>
        {text}
      </Text>
    </>
  );
};

export default CustomText;
