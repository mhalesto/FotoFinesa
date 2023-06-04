import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {ICustomStatusBarProps} from './types';

const CustomStatusBar = ({backgroundColor}: ICustomStatusBarProps) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    background: backgroundColor
      ? backgroundColor
      : isDarkMode
      ? Colors.darker
      : Colors.lighter,
  };

  return (
    <StatusBar
      barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      backgroundColor={backgroundStyle.background}
    />
  );
};

export default CustomStatusBar;
