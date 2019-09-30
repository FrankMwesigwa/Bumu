import {Dimensions} from 'react-native';
import {createTheming} from '@callstack/react-theme-provider';

import {layouts} from '../layouts';

const {width, height} = Dimensions.get('window');

const colors = {
  primary: '#FF2D55',
  secondary: '#1B1F29',
};

const sizes = {
  padding: 8,
  margin: 8,
  fontSize: 12,
  screenHeight: height,
  screenWidth: width,
};

const darkTheme = {
  primaryTextColor: colors.primary,
  secondaryTextColor: 'white',
  primaryBackgroundColor: colors.secondary,
  captionTextColor: 'white',
  iconPrimaryColor: 'white',
  receivedMessageBackgroundColor: '#fefefe',
  sentMessageBackgroundColor: 'gray',
  receivedTextColor: colors.secondary,
  bottomIconNavigatorPrimary: colors.primary,
  bottomIconNavigatorSecondary: 'white',
  sentTextColor: 'white',
};

const lightTheme = {
  primaryTextColor: colors.secondary,
  secondaryTextColor: 'gray',
  primaryBackgroundColor: 'white',
  captionTextColor: colors.secondary,
  iconPrimaryColor: colors.secondary,
  bottomIconNavigatorPrimary: colors.primary,
  bottomIconNavigatorSecondary: 'black',
  receivedMessageBackgroundColor: colors.secondary,
  sentMessageBackgroundColor: 'gray',
  receivedTextColor: 'white',
  sentTextColor: 'white',
};

const {ThemeProvider, withTheme} = createTheming({darkTheme, lightTheme});

export {
  layouts,
  colors,
  sizes,
  ThemeProvider,
  withTheme,
  darkTheme,
  lightTheme,
};
