/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  Image,
  View,
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity,
} from 'react-native';
import {CameraRoll} from '@react-native-camera-roll/camera-roll';
import {Dimensions} from 'react-native';
import CustomText from '../../../../common/customText';
import hasAndroidPermission from '../../../../../utils/permissions';
import {CustomThemeColors} from '../../../../../assets/theme';

const BrowseImages = () => {
  const [photos, setPhotos] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState([]);
  const [selectedAlbumId, setSelectedAlbumId] = useState(null);
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
    setSelectedAlbumId(album.title);
    setSelectedAlbum(album);
    handleGetPhotos(album);
  };

  const renderItem = ({item}: any) => {
    const isSelected = item.title === selectedAlbumId;
    return (
      <View style={{marginVertical: 5}}>
        <TouchableOpacity
          onPress={() => handleAlbumPress(item)}
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
    <View style={styles.containerView}>
      <CustomText
        text="Edit your photos"
        fontWeight={700}
        style={styles.editHeading}
      />

      <FlatList
        data={albums}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item: any) => item.title}
        renderItem={renderItem}
        style={{padding: 5, marginLeft: 2, marginRight: 8, marginBottom: 4}}
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

  button: {
    borderWidth: 1,
    borderColor: '#090409',
    borderRadius: 5,
    paddingVertical: 7,
    paddingHorizontal: 16,
    backgroundColor: 'transparent',
    marginHorizontal: 5,
  },
  selectedButton: {
    backgroundColor: '#6336D3',
  },
  buttonText: {
    fontSize: 14,
    // fontWeight: 'bold',
    color: CustomThemeColors.customBrightGray,
  },
  selectedButtonText: {
    color: '#EDEBF1',
  },
});
