/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../../../../screens/homeScreen';
import MyProjectsScreen from '../../../../screens/myProjects';
import DiscoverScreen from '../../../../screens/discover';
import {useTheme} from 'react-native-paper';
import {useAppTheme} from '../../../../../App';

const Tab = createMaterialBottomTabNavigator();

const BottomTabs = () => {
  const theme = useTheme();

  const {
    colors: {customVampireBlack, customMediumPurple, customMediumSlateBlue},
  } = useAppTheme();

  theme.colors.secondaryContainer = 'transparent';
  // theme.colors.secondaryContainer = customIris ? customIris : '#6336D3';

  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor={customMediumSlateBlue}
      // activeColor={customIris ? customIris : '#6336D3'}
      // inactiveColor={customIris ? customIris : '#6336D3'}
      barStyle={{
        backgroundColor: customVampireBlack ? customVampireBlack : '#090409',
        borderColor: customMediumPurple ? customMediumPurple : '#8D86EF',
        borderTopWidth: 0.3,
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
        // opacity: 0.5,
        // borderTopStartRadius: 15,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarBadge: true,
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
