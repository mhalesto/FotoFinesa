/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useRef, useState} from 'react';
import {View, Dimensions, StyleSheet} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import SliderItem from './sliderItem';
import {useAppTheme} from '../../../../App';
import sliderData from './sliderData';

export const SLIDER_WIDTH = Dimensions.get('window').width;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 1);

const SliderTips = () => {
  const [index, setIndex] = useState(0);
  const isCarousel = useRef(null);
  const [data, setData] = useState<any>(sliderData);

  const {
    colors: {customIris, customBrightGray},
  } = useAppTheme();

  useEffect(() => {
    setData(sliderData);
  }, [data]);

  return (
    <View style={styles.sliderContainer}>
      <Carousel
        vertical={false}
        // layout={'tinder'}
        // layoutCardOffset={0}
        ref={isCarousel}
        data={data}
        renderItem={({item}: any) => <SliderItem item={item} />}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={(sliderIndex: any) => setIndex(sliderIndex)}
        slideStyle={{}}
      />
      <Pagination
        dotsLength={data.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 9.5,
          height: 9.5,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: customIris,
          bottom: 50,
        }}
        tappableDots={true}
        inactiveDotStyle={{
          backgroundColor: customBrightGray,
          // Define styles for inactive dots here
        }}
        inactiveDotOpacity={1}
        inactiveDotScale={0.7}
      />
    </View>
  );
};
export default SliderTips;

const styles = StyleSheet.create({
  sliderContainer: {
    flex: 1,
    marginVertical: 0,
  },
});
