/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {CustomThemeColors} from '../../../assets/theme';
import {ICustomFlatListProps} from './types';

const windowWidth = Dimensions.get('window').width;

const CustomFlatList = ({
  uniqueIdentifier,
  data,
  itemPress,
}: ICustomFlatListProps) => {
  const [selectedItemUniqueProp, setSelectedItemUniqueProp] = useState(null);

  const handleItemPress = (item: any) => {
    itemPress(item);
    setSelectedItemUniqueProp(getUniqueProp(item, uniqueIdentifier));
  };

  const getUniqueProp = (item: any, uniqueId: any) => {
    return item[uniqueId];
  };

  const renderItem = ({item}: any) => {
    const isSelected =
      getUniqueProp(item, uniqueIdentifier) === selectedItemUniqueProp;
    return (
      <View style={{marginVertical: 5}}>
        <TouchableOpacity
          onPress={() => handleItemPress(item)}
          style={[styles.button, isSelected && styles.selectedButton]}>
          <Text
            style={[
              styles.buttonText,
              isSelected && styles.selectedButtonText,
            ]}>
            {item.title}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={[styles.containerView, [{}]]}>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item: any) => getUniqueProp(item, uniqueIdentifier)}
        renderItem={renderItem}
        style={{padding: 5}}
      />
    </View>
  );
};

export default CustomFlatList;

const styles = StyleSheet.create({
  containerView: {
    marginRight: windowWidth <= 360 ? 13 : 3,
    marginLeft: windowWidth <= 360 ? 3 : 3,
    marginBottom: 4,
  },
  button: {
    borderWidth: 1,
    borderColor: CustomThemeColors.customInactiveBorderColor,
    borderRadius: 5,
    paddingVertical: 7,
    paddingHorizontal: 16,
    backgroundColor: 'transparent',
    marginHorizontal: 5,
  },
  selectedButton: {
    backgroundColor: CustomThemeColors.customIris,
    borderColor: CustomThemeColors.customIris,
  },
  buttonText: {
    fontSize: 14,
    // fontWeight: 'bold',
    color: CustomThemeColors.customInactiveTextColor,
  },
  selectedButtonText: {
    color: CustomThemeColors.customBrightGray,
  },
});
