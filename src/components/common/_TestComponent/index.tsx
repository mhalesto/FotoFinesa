import React from 'react';
import CustomText from '../customText';
import {StyleSheet, View} from 'react-native';
import {useAppTheme} from '../../../../App';

const TestComponent = () => {
  const {
    colors: {customMediumSlateBlue},
  } = useAppTheme();
  return (
    <View
      style={[
        styles.containerView,
        [
          {
            backgroundColor: customMediumSlateBlue
              ? customMediumSlateBlue
              : '#745BE9',
          },
        ],
      ]}>
      <CustomText text="This is a test component" />
    </View>
  );
};

export default TestComponent;

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    minHeight: 150,
    padding: 20,
    marginVertical: 20,
  },
});
