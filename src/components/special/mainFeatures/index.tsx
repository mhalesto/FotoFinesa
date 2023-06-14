/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {MAINFEATURESDATA} from './main-features-data';
import CustomAvatar from '../../common/customAvatar';
import {useAppTheme} from '../../../../App';
import {} from 'react-native-paper';
import CustomText from '../../common/customText';
import {IMainFeaturesDataProps} from './main-features-data/types';

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
              // borderWidth: 0.5,
              // borderBottomColor: '#4c4c4c85',
            },
          ],
        ]}>
        {MAINFEATURESDATA.map((iconz: any, index: number) => {
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
            featureName,
            featureNameColor,
          }: IMainFeaturesDataProps = iconz;
          return (
            <View
              key={index + 1}
              style={{
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
              }}>
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
                style={{marginHorizontal: 5, borderRadius: 3, opacity: 0.88}}
                color={color ? color : customBrightGray}
              />
              <CustomText
                text={featureName}
                style={{padding: 5}}
                fontSize={13}
                color={featureNameColor ? featureNameColor : customBrightGray}
              />
            </View>
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
    alignItems: 'center',
    alignContent: 'center',
    paddingTop: 15,
  },
  shadow: {
    // borderBottomColor: '#eeeeeeb8',
    // shadowColor: '#ffffffb8',
    // shadowOffset: {
    //   width: 0,
    //   height: 10,
    // },
    // shadowOpacity: 0.51,
    // shadowRadius: 13.16,
    // elevation: 24,
  },
});
