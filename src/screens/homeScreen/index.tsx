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

const HomeScreen = () => {
  const {
    colors: {customVampireBlack, customBrightGray},
  } = useAppTheme();

  return (
    <CustomAppContainer>
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

      <View style={{height: 320}}>
        <SliderTips />
      </View>
    </CustomAppContainer>
  );
};

export default HomeScreen;
