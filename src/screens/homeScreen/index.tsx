/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import CustomAppContainer from '../../components/common/customAppContainer';
import SliderTips from '../../components/common/sliderTips';
import {Dimensions, View} from 'react-native';
import MainFeatures from '../../components/special/mainFeatures';
import BrowseImages from '../../components/special/mainFeatures/components/browseImages';
import PageHeaderConfigure from '../../components/common/customHeader/screenHeaderConfigure';
const heightDimension = Dimensions.get('window').height;

const HomeScreen = () => {
  return (
    <>
      <PageHeaderConfigure />
      <CustomAppContainer
        isScrollable
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[1]}>
        <View style={{height: heightDimension < 835 ? 255 : 285}}>
          <SliderTips />
        </View>

        <MainFeatures />
        <BrowseImages />
      </CustomAppContainer>
    </>
  );
};

export default HomeScreen;
