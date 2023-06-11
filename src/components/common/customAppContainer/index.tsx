import React from 'react';
import {View, ScrollView, Text, StyleSheet} from 'react-native';
import {ICustomAppContainerProps} from './types';

const CustomAppContainer = ({isScrollable}: ICustomAppContainerProps) => {
  const ViewType = isScrollable ? ScrollView : View;
  return (
    <ViewType style={styles.container}>
      <Text>Main Container</Text>
    </ViewType>
  );
};

export default CustomAppContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
