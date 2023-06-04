import React from 'react';
import {SafeAreaView, Text, useColorScheme, View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import CustomStatusBar from './src/components/common/customStatusBar';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <CustomStatusBar />
      <View>
        <Text>Welcome to Foto Finesa</Text>
      </View>
    </SafeAreaView>
  );
}

export default App;
