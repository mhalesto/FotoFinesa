import {IAvatarTypes} from '../../../../models/avatarModel';
import {IMainFeaturesDataProps} from './types';

const size = 70;
const avatarType: IAvatarTypes = 'Icon';

export const MAINFEATURESDATA: IMainFeaturesDataProps[] = [
  {
    icon: 'image-edit-outline',
    avatarType,
    size,
    color: 'white',
    featureName: 'Edit Photo',
    backgroundColor: '#8B6CCC',
  },
  {
    icon: 'face-man-shimmer',
    avatarType,
    size,
    featureName: 'Retouch',
    color: 'white',
    backgroundColor: '#745BE9',
  },
  {
    icon: 'image-multiple-outline',
    avatarType,
    size,
    featureName: 'Combine',
    color: 'white',
    backgroundColor: '#6336D3',
  },
  {
    icon: 'camera-outline',
    avatarType,
    size,
    featureName: 'Capture',
    color: 'white',
    backgroundColor: '#8D86EF',
  },
];
