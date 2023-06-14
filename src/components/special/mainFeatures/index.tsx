/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {MAINFEATURESDATA} from './main-features-data';
import CustomAvatar from '../../common/customAvatar';
import {ICustomAvatarProps} from '../../common/customAvatar/types';
import {useAppTheme} from '../../../../App';

const MainFeatures = () => {
  const {
    colors: {customBrightGray, customBodyDark},
  } = useAppTheme();
  if (MAINFEATURESDATA.length > 0) {
    return (
      <View
        style={[
          styles.featuresContainer,
          [
            {
              backgroundColor: customBodyDark,
              borderWidth: 0.5,
              borderBottomColor: '#4c4c4c85',
            },
          ],
        ]}>
        {MAINFEATURESDATA.map((iconz: any, index: number) => {
          console.log(iconz);
          const {
            iconName,
            avatarType,
            avatarImagesource,
            avatarPosition,
            backgroundColor,
            icon,
            source,
            label,
            size,
            color,
          }: ICustomAvatarProps = iconz;
          return (
            <CustomAvatar
              key={index + 1}
              iconName={iconName}
              avatarType={avatarType}
              avatarImagesource={avatarImagesource}
              avatarPosition={avatarPosition}
              backgroundColor={backgroundColor}
              icon={icon}
              source={source}
              label={label}
              size={size}
              style={{marginHorizontal: 5, borderRadius: 5}}
              color={color ? color : customBrightGray}
            />
          );
        })}
      </View>
    );
  }
  return <></>;
};

export default MainFeatures;

const styles = StyleSheet.create({
  featuresContainer: {
    flex: 1,
    flexDirection: 'row',
    minHeight: 100,
    justifyContent: 'center',
  },
});
