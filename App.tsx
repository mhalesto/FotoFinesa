import React from 'react';
import {PaperProvider, MD3DarkTheme, MD3LightTheme} from 'react-native-paper';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import BottomTabs from './src/components/common/navigation/bottomTabs';
import CustomStatusBar from './src/components/common/customStatusBar';
// import {useColorScheme} from 'react-native';
// import {theme} from './src/assets/theme';

const theme = {
  ...MD3LightTheme,
  custom: 'property',
  colors: {
    ...MD3LightTheme.colors,
    background: 'red',
    brandPrimary: '#fefefe',
    brandSecondary: 'red',
  },
};

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#212121',
  },
};

function App(): JSX.Element {
  // const colorScheme = useColorScheme();
  // const isDarkMode = colorScheme === 'dark';

  // const theme = isDarkMode ? MD3DarkTheme : MD3DarkTheme;

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={navTheme}>
        <CustomStatusBar backgroundColor="#8D86EF" />
        <BottomTabs />
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
