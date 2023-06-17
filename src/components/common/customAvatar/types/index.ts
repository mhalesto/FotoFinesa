import {
  AvatarIconProps,
  AvatarImageProps,
  AvatarTextProps,
} from 'react-native-paper';
import {IAvatarTypes} from '../../../../models/avatarModel';

export interface ICustomAvatarProps
  extends Omit<
    CustomAvatarIconProps & CustomAvatarImageProps & CustomAvatarTextProps,
    'onLayout'
  > {
  id?: any;
  iconName?: string;
  iconSize?: number;
  avatarType?: IAvatarTypes;
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
