import React from 'react';
import PageHeaderConfigure from '../../components/common/customHeader/screenHeaderConfigure';
import {ScreenNames} from '../../components/common/customHeader/screenHeaderConfigure/constants';

const DiscoverScreen = () => {
  return (
    <>
      <PageHeaderConfigure
        screenName={ScreenNames.DiscoverScreen}
        title="Discover"
      />
    </>
  );
};

export default DiscoverScreen;
