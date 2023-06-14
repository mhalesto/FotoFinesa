import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import {ICustomAppContainerProps} from './types';

const CustomAppContainer = ({
  isScrollable,
  children,
}: ICustomAppContainerProps) => {
  if (isScrollable) {
    return (
      <ScrollView style={styles.container}>{children && children}</ScrollView>
    );
  }
  return <View style={styles.container}>{children && children}</View>;
};

export default CustomAppContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
