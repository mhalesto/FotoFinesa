/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import {useAppTheme} from '../../../App';
import CustomHeader from '../../components/common/header';
import CustomAvatar from '../../components/common/customAvatar';
import {AvatarTypeList} from '../../components/common/header/types';
import AvatarImage from '../../assets/images/avatar/avatarWoman.png';

const HomeScreen = () => {
  const {
    colors: {customVampireBlack, customMediumPurple, customBrightGray},
  } = useAppTheme();

  return (
    <View>
      <CustomHeader
        customBckgroundColor={customVampireBlack}
        leftAvatarComponent={
          <>
            <CustomAvatar
              color={customMediumPurple}
              avatarType={AvatarTypeList.Image}
              size={42}
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
    </View>
  );
};

export default HomeScreen;
