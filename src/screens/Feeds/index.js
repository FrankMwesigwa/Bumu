import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  ScrollView,
  StatusBar,
} from 'react-native';

import Stories from './Stories';
import FeedItem from './FeedItem';

let {height} = Dimensions.get('window');

let box_count = 3;
let box_height = height / box_count;

class FeedsScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.box, styles.header]}>
          <Text>Bumu</Text>
        </View>
        <View style={[styles.box, styles.content]}>
          <Stories />
          <ScrollView style={styles.feeditems}>
            <FeedItem imageSource="1" likes="101" />
            <FeedItem imageSource="2" likes="201" />
            <FeedItem imageSource="3" likes="301" />
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  box: {
    height: box_height,
  },
  header: {
    flex: 4,
    backgroundColor: '#FF2D55',
  },
  content: {
    flex: 12,
    backgroundColor: '#1B1F29',
    marginTop: -70,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  feeditems: {
    marginHorizontal: 5,
  }
});

export default FeedsScreen;
