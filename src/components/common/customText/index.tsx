/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text} from 'react-native-paper';
import {ICustomTextProps} from './types/index';

const CustomText = ({
  text,
  color,
  fontSize,
  fontWeight,
  style,
}: ICustomTextProps) => {
  return (
    <>
      <Text
        style={[
          style,
          [
            {
              color: color ? color : 'white',
              fontSize: fontSize ? fontSize : 16,
              fontWeight: fontWeight ? fontWeight : 300,
            },
          ],
        ]}>
        {text}
      </Text>
    </>
  );
};

export default CustomText;
