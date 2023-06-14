import {ICustomAvatarProps} from '../../../common/customAvatar/types';
import {AvatarTypeList} from '../../../common/header/types';

const size = 70;
const avatarType = AvatarTypeList.Icon;

export const MAINFEATURESDATA: ICustomAvatarProps[] = [
  {
    icon: 'image-edit',
    avatarType,
    size,
    // color: 'white',
  },
  {
    icon: 'image-filter-vintage',
    avatarType,
    size,
  },
  {
    icon: 'image-multiple',
    avatarType,
    size,
  },
  {
    icon: 'image-filter-hdr',
    avatarType,
    size,
  },
];
