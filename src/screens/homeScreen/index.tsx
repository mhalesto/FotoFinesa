/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {useAppTheme} from '../../../App';
import CustomHeader from '../../components/common/header';
import CustomAvatar from '../../components/common/customAvatar';
import {AvatarTypeList} from '../../components/common/header/types';
import AvatarImage from '../../assets/images/avatar/avatarWoman.png';
import CustomAppContainer from '../../components/common/customAppContainer';
import SliderTips from '../../components/common/sliderTips';
import {View} from 'react-native';
import MainFeatures from '../../components/special/mainFeatures';
import BrowseImages from '../../components/special/mainFeatures/components/browseImages';

const HomeScreen = () => {
  const {
    colors: {customVampireBlack, customBrightGray},
  } = useAppTheme();

  return (
    <>
      <CustomHeader
        customBckgroundColor={customVampireBlack}
        leftAvatarComponent={
          <>
            <CustomAvatar
              avatarType={AvatarTypeList.Image}
              size={35}
              source={AvatarImage}
            />
          </>
        }
        rightAvatarComponent={
          <>
            <CustomAvatar
              color={customBrightGray}
              avatarType={AvatarTypeList.Icon}
              icon={'cog'}
              size={40}
              avatarPosition={'center'}
              backgroundColor="transparent"
            />
          </>
        }
        title={''}
      />
      <CustomAppContainer
        isScrollable
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[1]}>
        <View style={{height: 260}}>
          <SliderTips />
        </View>

        <MainFeatures />
        <BrowseImages />
      </CustomAppContainer>
    </>
  );
};

export default HomeScreen;
