/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useAppTheme} from '../../../../App';
import {ICustomHeaderProps} from './types';
import CustomText from '../customText';

const CustomHeader = ({
  customBckgroundColor,
  leftAvatarComponent,
  rightAvatarComponent,
  title,
  titleFontSize,
  titleFontWeight,
}: ICustomHeaderProps) => {
  const {
    colors: {customVampireBlack},
  } = useAppTheme();

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: customBckgroundColor
            ? customBckgroundColor
            : customVampireBlack,
        },
      ]}>
      <View style={styles.leftIcons}>
        {leftAvatarComponent && leftAvatarComponent}
      </View>
      <View style={[styles.titleContainer]}>
        <CustomText
          text={title ? title : ''}
          fontSize={titleFontSize ? titleFontSize : 20}
          fontWeight={titleFontWeight ? titleFontWeight : 300}
        />
      </View>

      <View style={[styles.rightIcons]}>
        {rightAvatarComponent && rightAvatarComponent}
      </View>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingHorizontal: 20,
    width: '100%',
  },
  leftIcons: {
    flexDirection: 'row',
    width: '20%',
    justifyContent: 'flex-start',
    alignContent: 'center',
  },
  rightIcons: {
    flexDirection: 'row',
    width: '20%',
    justifyContent: 'flex-end',
    alignContent: 'center',
  },
  titleContainer: {
    width: '60%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
