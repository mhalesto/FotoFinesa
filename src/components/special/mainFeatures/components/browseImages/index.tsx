/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {CameraRoll} from '@react-native-camera-roll/camera-roll';
import {Dimensions} from 'react-native';
import CustomText from '../../../../common/customText';
import hasAndroidPermission from '../../../../../utils/permissions';
import CustomFlatList from '../../../../common/customFlatList';

import {
  PESDK,
  PhotoEditorModal,
  Configuration,
} from 'react-native-photoeditorsdk';

const BrowseImages = () => {
  const [photos, setPhotos] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState([]);
  const windowWidth = Dimensions.get('window').width;

  // const savePicture = async () => {
  //   if (Platform.OS === 'android' && !(await hasAndroidPermission())) {
  //     return;
  //   }
  //   // CameraRoll.save(tag, {type, album});
  // };

  const handleGetPhotos = async (album: any) => {
    const permissionGranted = await hasAndroidPermission();
    if (permissionGranted) {
      CameraRoll.getPhotos({
        groupTypes: 'Album',
        groupName: album.title,
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
      handleGetAlbums();
    }
  };

  const handleGetAlbums = async () => {
    const permissionGranted = await hasAndroidPermission();
    if (permissionGranted) {
      CameraRoll.getAlbums({
        assetType: 'Photos',
      })
        .then((r: any) => {
          setAlbums(r);
        })
        .catch(err => {
          console.log(err);
          // Error Loading Albums
        });
    }
  };

  useEffect(() => {
    handleGetPhotos(selectedAlbum);
  }, []);

  const handleAlbumPress = (album: any) => {
    setSelectedAlbum(album);
    handleGetPhotos(album);
  };

  const handleOpenEditImage = (image: any) => {
    PESDK.openEditor({
      uri: image?.node?.image?.uri,
    });
  };

  return (
    <View style={styles.containerView}>
      <CustomText
        text="Edit your photos"
        fontWeight={700}
        style={styles.editHeading}
      />

      <CustomFlatList
        data={albums}
        uniqueIdentifier={'title'}
        itemPress={handleAlbumPress}
      />

      <ScrollView
        contentContainerStyle={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          marginHorizontal: 10,
        }}>
        {photos.map((picture: any, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => handleOpenEditImage(picture)}
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
                source={{uri: picture?.node?.image?.uri}}
              />
            </TouchableOpacity>
          );
        })}
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
    paddingTop: 12,
  },
});
