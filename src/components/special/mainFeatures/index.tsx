/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {MAINFEATURESDATA} from './main-features-data';
import CustomAvatar from '../../common/customAvatar';
import {useAppTheme} from '../../../../App';
import {} from 'react-native-paper';
import CustomText from '../../common/customText';
import {IMainFeaturesDataProps} from './main-features-data/types';
import {Dimensions} from 'react-native';
import {CustomThemeColors} from '../../../assets/theme';

const MainFeatures = () => {
  const windowWidth = Dimensions.get('window').width;
  const {
    colors: {customBrightGray, customBodyDark},
  } = useAppTheme();
  if (MAINFEATURESDATA.length > 0) {
    return (
      <View
        style={[
          styles.featuresContainer,
          styles.shadow,
          [
            {
              backgroundColor: customBodyDark,
              paddingHorizontal: '2%',
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
                alignItems: 'center',
                marginHorizontal: 0,
                borderRadius: 5,
                opacity: 0.9,
                flex: 1,
                paddingTop: windowWidth <= 360 ? 10 : 15,
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
                style={{
                  marginHorizontal: 5,
                  borderRadius: 5,
                  opacity: 0.88,
                  width: windowWidth <= 360 ? 77 : 88,
                  minHeight: windowWidth <= 360 ? '65%' : '75%',
                }}
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
    minHeight: 130,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    paddingBottom: 5,
  },
  shadow: {
    shadowColor: CustomThemeColors.customMediumSlateBlue,
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.5,
    shadowRadius: 15,
    elevation: 10,
  },
});
