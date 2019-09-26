import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
} from 'react-navigation';

import {Platform} from 'react-native';

import {Icon} from 'native-base';

import HomeTab from '../screens/HomeTab';
import SearchTab from '../screens/SearchTab';
import AddMediaTab from '../screens/AddMediaTab';
import LikesTab from '../screens/LikesTab';
import ProfileTab from '../screens/ProfileTab';

const MainNavigator = createBottomTabNavigator(
  {
    HomeTab: {
      screen: HomeTab,
    },
    SearchTab: {
      screen: SearchTab,
    },
    AddMediaTab: {
      screen: AddMediaTab,
    },
    LikesTab: {
      screen: LikesTab,
    },
    ProfileTab: {
      screen: ProfileTab,
    },
  },
  {
    animationEnabled: true,
    swipeEnabled: true,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      style: {
        ...Platform.select({
          android: {
            backgroundColor: 'white',
          },
        }),
      },
      activeTintColor: '#000',
      inactiveTintColor: '#d1cece',
      showLabel: false,
      showIcon: true,
    },
  },
);

export default createAppContainer(MainNavigator);
