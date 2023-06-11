import {
  AvatarIconProps,
  AvatarImageProps,
  AvatarTextProps,
} from 'react-native-paper';

export interface ICustomAvatarProps
  extends Omit<
    CustomAvatarIconProps & CustomAvatarImageProps & CustomAvatarTextProps,
    'onLayout'
  > {
  iconName?: string;
  iconSize?: number;
  avatarType?: string;
  avatarImagesource?: string;
  avatarPosition?: any;
  backgroundColor?: string;
}

interface CustomAvatarIconProps extends Omit<AvatarIconProps, 'icon'> {
  icon?: AvatarIconProps['icon'];
}
interface CustomAvatarImageProps extends Omit<AvatarImageProps, 'source'> {
  source?: AvatarImageProps['source'];
}
interface CustomAvatarTextProps extends Omit<AvatarTextProps, 'label'> {
  label?: AvatarTextProps['label'];
}

export interface IAvatarTypes {
  Icon: string;
  Image: IImage;
  Text: string;
}

export interface IImage {
  size: number;
  source: string;
}

export const AvatarTypeList = {
  Icon: 'Icon',
  Image: 'Image',
  Text: 'Text',
};
