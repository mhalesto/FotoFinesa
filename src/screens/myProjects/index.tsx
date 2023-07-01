import React from 'react';
import PageHeaderConfigure from '../../components/common/customHeader/screenHeaderConfigure';
import logo from '../../assets/images/logo/logo.jpg';
// import logo from '../../../../assets/images/logo/logo.jpg';

import {
  PESDK,
  PhotoEditorModal,
  Configuration,
} from 'react-native-photoeditorsdk';

const MyProjectsScreen = () => {
  return (
    <>
      <></>
      <PageHeaderConfigure />

      <PhotoEditorModal visible={true} image={logo} />
    </>
  );
};

export default MyProjectsScreen;
