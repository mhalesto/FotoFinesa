import React, {useEffect} from 'react';
import {PaperProvider, MD3LightTheme, useTheme} from 'react-native-paper';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import BottomTabs from './src/components/common/navigation/bottomTabs';
import CustomStatusBar from './src/components/common/customStatusBar';
import {CustomThemeColors} from './src/assets/theme';
import SplashScreen from 'react-native-splash-screen';

const theme = {
  ...MD3LightTheme,
  custom: 'property',
  colors: {
    ...MD3LightTheme.colors,
    ...CustomThemeColors,
  },
};

export type AppTheme = typeof theme;
export const useAppTheme = () => useTheme<AppTheme>();

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: theme.colors.customBodyDark,
  },
};

function App(): JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={navTheme}>
        <CustomStatusBar />
        <BottomTabs />
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
