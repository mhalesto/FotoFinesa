/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from 'react-native-paper';
import CustomText from '../customText';
import {useAppTheme} from '../../../../App';
import {ICustomeButtonProps} from './types';

const CustomButton = ({
  icon,
  mode,
  buttonColor,
  buttonStyle,
  disabled,
  loading,
  loadingStyle,
  rippleColor,
  onPress,
  onLongPress,

  title,
  textStyle,
  textColor,
}: ICustomeButtonProps) => {
  const {
    colors: {customBrightGray, customMediumSlateBlue, customDarkPastelPurple},
  } = useAppTheme();

  const handleOnPress = () => {
    onPress && onPress('Action button was pressed');
  };

  const handleOnLongPress = () => {
    onLongPress && onLongPress('Long press was triggered');
  };

  return (
    <View style={styles.actionBtnContainer}>
      <View style={{flexDirection: 'row'}}>
        <Button
          icon={icon ? icon : ''}
          mode={mode ? mode : 'contained'}
          buttonColor={buttonColor ? buttonColor : customMediumSlateBlue}
          textColor={textColor ? textColor : customBrightGray}
          rippleColor={rippleColor ? rippleColor : customDarkPastelPurple}
          disabled={disabled ? disabled : false}
          loading={loading ? loading : false}
          style={[
            buttonStyle,
            loadingStyle,
            [
              {
                height: 43,
                justifyContent: 'center',
                // borderWidth: 1,
                // borderColor: '#6336D3',
              },
            ],
          ]}
          onPress={handleOnPress}
          onLongPress={handleOnLongPress}>
          <CustomText
            text={title ? title : ''}
            fontSize={16}
            fontWeight={700}
            style={[textStyle, [{}]]}
          />
        </Button>
      </View>
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  actionBtnContainer: {},
});
