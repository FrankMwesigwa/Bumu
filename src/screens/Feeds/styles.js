import {StyleSheet, Platform} from 'react-native';

import * as themes from '../../constants/theming';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    paddingVertical: themes.sizes.padding * 2,
  },
  bell: {
    height: 10,
    position: 'absolute',
    top: 8,
    left: 10,
    zIndex: 20,
    width: 10,
    backgroundColor: themes.colors.primary,
    borderRadius: 25,
  },
  inputBox: {
    backgroundColor: '#D9D9D9',
    borderBottomWidth: 0,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
  },
  avatarContainer: {
    transform: Platform.select({
      ios: [{rotate: '-50deg'}],
      android: [{rotate: '0deg'}],
    }),
  },
  avatar: {
    height: themes.sizes.screenHeight * 0.09,
    width: themes.sizes.screenHeight * 0.09,
  },

  storiesContainer: {
    marginTop: themes.sizes.margin * 2,
    paddingHorizontal: themes.sizes.padding,
  },

  addStoryContainer: {
    height: themes.sizes.screenWidth * 0.04,
    width: themes.sizes.screenWidth * 0.04,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    top: 0,
    left: 4,
    zIndex: 10,
    borderRadius: 20,
  },
  contentContainer: {
    paddingTop: themes.sizes.padding,
  },

  logo: {
    flex: 1,
  },

  captionContainer: {
    padding: themes.sizes.padding * 2,
    borderBottomWidth: 0.5,
    borderColor: 'gray',
  },

  comment: {
    padding: themes.sizes.padding * 2,
    flex: 1,
  },
  username: {
    fontSize: 18,
  },
  suggestedBox: {
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,

    elevation: 18,

    elevation: 5,
    height: themes.sizes.screenHeight * 0.15,
    width: themes.sizes.screenWidth * 0.25,
  },
  suggestedContainer: {
    paddingHorizontal: themes.sizes.padding * 2,
  },
});

export default styles;
