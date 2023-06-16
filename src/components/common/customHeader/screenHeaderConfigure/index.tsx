/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import CustomHeader from '..';
import CustomAvatar from '../../customAvatar';
import AvatarImage from '../../../../assets/images/avatar/avatarWoman.png';
import {AvatarTypeList} from '../../customAvatar/types';
import {useAppTheme} from '../../../../../App';
import {IPageHeaderConfigureProps} from './types';
import {ScreenNames} from './constants';

const PageHeaderConfigure = ({
  screenName,
  title,
}: IPageHeaderConfigureProps) => {
  const {
    colors: {customVampireBlack, customInactiveDark},
  } = useAppTheme();

  //Discover Screen Header Config
  if (screenName === ScreenNames.DiscoverScreen) {
    return (
      <CustomHeader
        customBckgroundColor={customVampireBlack}
        rightAvatarComponent={
          <>
            <CustomAvatar
              color={customVampireBlack}
              avatarType={AvatarTypeList.Icon}
              icon={'help'}
              size={24}
              avatarPosition={'center'}
              backgroundColor={customInactiveDark}
              style={{
                width: 24,
                height: 24,
                borderRadius: 25,
                marginHorizontal: 7,
              }}
            />
            <CustomAvatar
              color={customInactiveDark}
              avatarType={AvatarTypeList.Icon}
              icon={'magnify'}
              size={38}
              avatarPosition={'center'}
              backgroundColor="transparent"
              style={{
                width: 25,
                height: 25,
                borderRadius: 25,
                marginHorizontal: 3,
              }}
            />
            <CustomAvatar
              color={customInactiveDark}
              avatarType={AvatarTypeList.Icon}
              icon={'account-circle'}
              size={38}
              avatarPosition={'center'}
              backgroundColor="transparent"
              style={{
                width: 25,
                height: 25,
                borderRadius: 25,
                marginLeft: 5,
              }}
            />
          </>
        }
        title={title ? title : ''}
      />
    );
  }

  //Default Header Config
  return (
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
            color={customInactiveDark}
            avatarType={AvatarTypeList.Icon}
            icon={'cog'}
            size={38}
            avatarPosition={'center'}
            backgroundColor="transparent"
          />
        </>
      }
      title={title ? title : ''}
    />
  );
};

export default PageHeaderConfigure;
