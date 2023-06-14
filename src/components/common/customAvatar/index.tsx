/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Avatar} from 'react-native-paper';
import AvatarImage from '../../../assets/images/avatar/avatar.png';
import {ICustomAvatarProps, AvatarTypeList} from './types';
import {StyleSheet, View} from 'react-native';
import {useAppTheme} from '../../../../App';

const CustomAvatar = ({
  icon,
  size,
  color,
  style,
  source,
  label,
  avatarType,
  avatarPosition,
  backgroundColor,
}: ICustomAvatarProps) => {
  const {
    colors: {customVampireBlack},
  } = useAppTheme();
  return (
    <View
      style={[
        {
          alignSelf: avatarPosition ? avatarPosition : 'center',
        },
      ]}>
      {avatarType && avatarType === AvatarTypeList.Icon ? (
        <Avatar.Icon
          size={size ? size : 20}
          icon={icon ? icon : 'arrow-left'}
          color={color ? color : `${color ? color : customVampireBlack}`}
          style={[
            style,
            [
              styles.avatarIcon,
              {
                backgroundColor: backgroundColor && backgroundColor,
              },
            ],
          ]}
        />
      ) : avatarType && avatarType === AvatarTypeList.Image ? (
        <Avatar.Image
          size={size ? size : 65}
          source={source ? source : AvatarImage}
          style={[
            style,
            [
              styles.avatarImage,
              {backgroundColor: backgroundColor && backgroundColor},
            ],
          ]}
        />
      ) : (
        <Avatar.Text
          size={size ? size : 50}
          label={label ? label : 'XD'}
          style={[
            style,
            [
              styles.avatarText,
              {
                backgroundColor: backgroundColor && backgroundColor,
              },
            ],
          ]}
        />
      )}
    </View>
  );
};

export default CustomAvatar;

const styles = StyleSheet.create({
  avatarIcon: {},
  avatarImage: {},
  avatarText: {},
});
