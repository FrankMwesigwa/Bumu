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
//import Home_Activity from './screens/Home';
import Settings_Activity from '../screens/Home/Settings';
import Details_Activity from '../screens/Home/Details';
import Profile_Activity from '../screens/Home/Profile';

const HomeTab = createStackNavigator(
  {
    Feed: FeedScreen,
    Details: Details_Activity,
  },
  {
    defaultNavigationOptions: {
      header: null,
    },
  },
);

const SettingsTab = createStackNavigator(
  {
    Settings: Settings_Activity,
    Details: Details_Activity,
    Profile: Profile_Activity,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#0091EA',
      },
      headerTintColor: '#FFFFFF',
      title: 'Settings Tab',
    },
  },
);

// const BottomNavigator = createBottomTabNavigator(
//   {
//     Feed: {screen: FeedScreen},
//   },
//   {
//     initialRouteName: 'Feed',
//     activeColor: '#1B1F29',
//     inactiveColor: '#1B1F29',
//     barStyle: {backgroundColor: '#1B1F29'},
//   },
// );

const MainApp = createBottomTabNavigator(
  {
    Feed: HomeTab,
    //Settings: SettingsTab,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        const {routeName} = navigation.state;
        if (routeName === 'Feed') {
          return (
            <Image
              source={require('../../assets/images/home.png')}
              style={{width: 20, height: 20}}
            />
          );
        } else {
          return (
            <Image
              source={require('../../assets/images/chatlist.png')}
              style={{width: 20, height: 20}}
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
