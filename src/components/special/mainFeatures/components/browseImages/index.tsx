/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {ScrollView, Image, View, StyleSheet} from 'react-native';
import {CameraRoll} from '@react-native-camera-roll/camera-roll';
import {Dimensions} from 'react-native';
import CustomText from '../../../../common/customText';
import hasAndroidPermission from '../../../../../utils/permissions';

const BrowseImages = () => {
  const [photos, setPhotos] = useState([]);
  const windowWidth = Dimensions.get('window').width;

  // const savePicture = async () => {
  //   if (Platform.OS === 'android' && !(await hasAndroidPermission())) {
  //     return;
  //   }
  //   // CameraRoll.save(tag, {type, album});
  // };

  const handleGetPhotos = async () => {
    const permissionGranted = await hasAndroidPermission();
    if (permissionGranted) {
      CameraRoll.getPhotos({
        first: 24,
        assetType: 'Photos',
      })
        .then((r: any) => {
          setPhotos(r.edges);
        })
        .catch(err => {
          console.log(err);
          // Error Loading Images
        });
    }
  };

  useEffect(() => {
    handleGetPhotos();
  }, []);

  return (
    <View style={styles.containerView}>
      <CustomText
        text="Edit your photos"
        fontWeight={700}
        style={styles.editHeading}
      />
      <ScrollView
        contentContainerStyle={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          marginHorizontal: 10,
        }}>
        {photos.map((p: any, index) => (
          <View
            key={index}
            style={{
              width: windowWidth <= 360 ? '31.5%' : '31.8%',
              aspectRatio: 1,
              marginVertical: 3,
              marginHorizontal: 3,
            }}>
            <Image
              key={index}
              style={{
                width: '100%',
                height: 100,
                borderRadius: 4,
              }}
              source={{uri: p?.node?.image?.uri}}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default BrowseImages;

const styles = StyleSheet.create({
  containerView: {
    marginTop: 5,
    flex: 1,
  },
  editHeading: {
    paddingHorizontal: 13,
    paddingVertical: 10,
  },
});
