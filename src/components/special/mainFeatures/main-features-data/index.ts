import {AvatarTypeList} from '../../../common/header/types';
import {IMainFeaturesDataProps} from './types';

const size = 70;
const avatarType = AvatarTypeList.Icon;

export const MAINFEATURESDATA: IMainFeaturesDataProps[] = [
  {
    icon: 'image-edit',
    avatarType,
    size,
    color: 'white',
    featureName: 'Edit Photo',
    backgroundColor: '#8B6CCC',
  },
  {
    icon: 'face-man-shimmer-outline',
    avatarType,
    size,
    featureName: 'Retouch',
    color: 'white',
    backgroundColor: '#745BE9',
  },
  {
    icon: 'image-multiple',
    avatarType,
    size,
    featureName: 'Combine',
    color: 'white',
    backgroundColor: '#6336D3',
  },
  {
    icon: 'camera',
    avatarType,
    size,
    featureName: 'Capture',
    color: 'white',
    backgroundColor: '#8D86EF',
  },
];
