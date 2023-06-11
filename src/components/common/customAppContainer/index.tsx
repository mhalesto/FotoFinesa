import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import {ICustomAppContainerProps} from './types';

const CustomAppContainer = ({
  isScrollable,
  children,
}: ICustomAppContainerProps) => {
  const ViewType = isScrollable ? ScrollView : View;
  return <ViewType style={styles.container}>{children && children}</ViewType>;
};

export default CustomAppContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
