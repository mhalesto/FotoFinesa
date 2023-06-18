/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Avatar, IconButton} from 'react-native-paper';
import AvatarImage from '../../../assets/images/avatar/avatar.png';
import {ICustomAvatarProps} from './types';
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
    colors: {customVampireBlack, customIris},
  } = useAppTheme();
  return (
    <View
      style={[
        [
          {
            alignSelf: avatarPosition ? avatarPosition : 'center',
          },
        ],
      ]}>
      {avatarType && avatarType === 'Icon' ? (
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
                // borderWidth: 3,
              },
            ],
          ]}
        />
      ) : avatarType && avatarType === 'Image' ? (
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
      ) : avatarType && avatarType === 'IconButton' ? (
        // TODO: IconButton props
        <IconButton
          icon={icon ? icon : 'camera'}
          iconColor={color ? color : customIris}
          size={size}
          onPress={() => console.log('Pressed')}
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
