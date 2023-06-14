import React from 'react';
import {StyleSheet, View} from 'react-native';

const MainFeatures = () => {
  return (
    <View style={[styles.featuresContainer, [{backgroundColor: '#EDEBF1'}]]} />
  );
};

export default MainFeatures;

const styles = StyleSheet.create({
  featuresContainer: {
    minHeight: 100,
  },
});
