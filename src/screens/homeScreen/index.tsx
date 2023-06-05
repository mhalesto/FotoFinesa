import React from 'react';
import {Text, View} from 'react-native';
import {useAppTheme} from '../../../App';

const HomeScreen = () => {
  const {
    colors: {customVampireBlack},
  } = useAppTheme();

  return (
    <View>
      <View style={{backgroundColor: customVampireBlack}}>
        <Text>HomeScreen component</Text>
        <Text />
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
          saepe magnam modi autem laboriosam nesciunt molestias a asperiores
          officia aliquam facere accusamus natus, sed voluptas rerum eum?
          Dolorem, nobis commodi.
        </Text>
      </View>
    </View>
  );
};

export default HomeScreen;
