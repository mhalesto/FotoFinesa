import {IAvatarTypes} from '../../../../models/avatarModel';

export interface ICustomHeaderProps {
  title?: string;
  titleFontSize?: number;
  titleFontWeight?: number;
  customBckgroundColor?: string;
  rightIconName?: string;
  rightIconSize?: number;
  avatarType?: IAvatarTypes;
  rightAvatarImagesource?: string;
  leftAvatarComponent?: any;
  rightAvatarComponent?: any;
}
