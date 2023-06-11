export interface ICustomHeaderProps {
  title?: string;
  titleFontSize?: number;
  titleFontWeight?: number;
  customBckgroundColor?: string;
  rightIconName?: string;
  rightIconSize?: number;
  avatarType?: string;
  rightAvatarImagesource?: string;
  leftAvatarComponent?: any;
  rightAvatarComponent?: any;
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
