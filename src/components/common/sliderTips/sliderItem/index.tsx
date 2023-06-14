/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {useAppTheme} from '../../../../../App';
import CustomAvatar from '../../customAvatar';
import {AvatarTypeList} from '../../customAvatar/types';
import {Button} from 'react-native-paper';
import CustomText from '../../customText';
import {ISliderTypes} from '../sliderData/sliderTypes';

const SliderItem = ({item}: any) => {
  const [slide, setSlide] = useState<ISliderTypes>(item);

  useEffect(() => {
    setSlide(item);
  }, [item]);

  const {
    colors: {customBrightGray, customMediumSlateBlue},
  } = useAppTheme();
  return (
    <View
      style={{
        borderWidth: 1,
        padding: 0,
        borderRadius: 0,
        alignItems: 'center',
        backgroundColor: customBrightGray,
      }}>
      <Image
        source={{
          uri: slide?.url
            ? slide?.url
            : 'https://cdn.pixabay.com/photo/2016/10/31/19/04/balloons-1786430_960_720.jpg',
        }}
        style={{width: '100%', height: '100%'}}
      />
      <View style={styles.sliderText}>
        <View style={styles.titleWrapper}>
          {slide?.leftIcon && (
            <CustomAvatar
              avatarType={AvatarTypeList.Icon}
              icon={slide.leftIcon}
              color={customBrightGray}
            />
          )}
          <CustomText
            text={slide?.title ? slide.title : ''}
            fontSize={22}
            fontWeight={700}
            color={customBrightGray}
            style={{marginBottom: 6, marginLeft: 5}}
          />
        </View>
        <View style={[styles.descContainer]}>
          <CustomText
            text={slide?.description}
            fontSize={14}
            color={customBrightGray}
          />
        </View>
        {/* TODO Custom Btn Component*/}
        {item?.actionButtonText && (
          <View style={styles.actionBtnContainer}>
            <Button
              icon=""
              mode="contained"
              buttonColor={customMediumSlateBlue}
              textColor={customBrightGray}
              // rippleColor={customDarkPastelPurple}
              style={{
                width: '80%',
                height: 43,
                justifyContent: 'center',
                // borderWidth: 1,
                // borderColor: '#6336D3',
              }}
              onPress={() => console.log('Pressed')}>
              <CustomText
                text="Start FREE Trial"
                fontSize={16}
                fontWeight={700}
              />
            </Button>
          </View>
        )}
      </View>
    </View>
  );
};

export default SliderItem;

const styles = StyleSheet.create({
  sliderText: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'flex-start',
    paddingLeft: 20,
    paddingBottom: 20,
    paddingRight: 10,
    paddingTop: 10,
    zIndex: 9,
    // backgroundColor: 'rgba(0, 0, 0, 0.786)',
    // backgroundColor: 'rgba(0,0,0,0.5)',
    borderTopRightRadius: 10,
  },
  titleWrapper: {
    flexDirection: 'row',
  },
  descContainer: {
    marginBottom: 15,
  },
  actionBtnContainer: {
    // width: '100%',
    flex: 1,
  },
});
