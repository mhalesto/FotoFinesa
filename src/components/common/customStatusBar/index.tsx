import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {ICustomStatusBarProps} from './types';
import {useAppTheme} from '../../../../App';

const CustomStatusBar = ({backgroundColor}: ICustomStatusBarProps) => {
  const isDarkMode = useColorScheme() === 'dark';

  const {
    colors: {customVampireBlack, customMediumSlateBlue},
  } = useAppTheme();

  const backgroundStyle = {
    background: backgroundColor
      ? backgroundColor
      : isDarkMode
      ? customVampireBlack
      : customMediumSlateBlue,
  };

  return (
    <StatusBar
      barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      backgroundColor={backgroundStyle.background}
    />
  );
};

export default CustomStatusBar;
