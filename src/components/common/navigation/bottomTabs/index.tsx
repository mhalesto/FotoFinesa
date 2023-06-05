/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../../../../screens/homeScreen';
import MyProjectsScreen from '../../../../screens/myProjects';
import DiscoverScreen from '../../../../screens/discover';

const Tab = createMaterialBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#745BE9"
      // inactiveColor="#EDEBF1"
      barStyle={{
        backgroundColor: '#090409',
        borderColor: '#8D86EF',
        borderTopWidth: 0.5,
        // borderTopEndRadius: 15,
        // borderTopStartRadius: 15,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="MyProjects"
        component={MyProjectsScreen}
        options={{
          tabBarLabel: 'My Projects',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="image-filter-vintage"
              // name="image-edit"
              // name="image-filter-hdr"
              // name="image-multiple"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Discover"
        component={DiscoverScreen}
        options={{
          tabBarLabel: 'Discover',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="heart" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
