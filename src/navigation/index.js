/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image} from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
} from 'react-navigation';

import FeedScreen from '../screens/Feeds';
import MediaScreen from '../screens/Media';

const HomeTab = createStackNavigator(
  {
    Feed: FeedScreen,
  },
  {
    defaultNavigationOptions: {
      header: null,
    },
  },
);

const MediaTab = createStackNavigator(
  {
    Media: MediaScreen,
  },
  {
    defaultNavigationOptions: {
      header: null,
    },
  },
);

const MainApp = createBottomTabNavigator(
  {
    Feed: HomeTab,
    Media: MediaTab,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        const {routeName} = navigation.state;
        if (routeName === 'Feed') {
          return (
            <Image
              source={require('../../assets/images/home.png')}
              style={{width: 30, height: 30}}
            />
          );
        } else {
          return (
            <Image
              source={require('../../assets/images/Media.png')}
              style={{width: 30, height: 30}}
            />
          );
        }
      },
    }),
    tabBarOptions: {
      showLabel: false,
      activeTintColor: '#FF6F00',
      inactiveTintColor: '#263238',
      style: {
        backgroundColor: '#1B1F29',
    }
    },
  },
);

export default createAppContainer(MainApp);
