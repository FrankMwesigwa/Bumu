/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  ScrollView,
  StatusBar,
  Platform,
  TouchableOpacity,
} from 'react-native';
import {Header, Right, Container} from 'native-base';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';

import Stories from './Stories';
import Celebrites from './Celebrities';
import FeedItem from './FeedItem';
import Bumers from './Bumers';
import Story from './Story';

class FeedsScreen extends Component {
  render() {
    return (
      <Container style={styles.bgMain}>
        <Header style={styles.navigation}>
          <StatusBar
            backgroundColor="#FF2D55"
            animated
            barStyle="light-content"
          />
          <View style={styles.actionBarMiddle}>
            <Text style={styles.actionBarText}>
              Talk to your Celebrity Bumu
            </Text>
          </View>
          <View style={styles.actionBarRight} />
          <Right style={styles.right}>
            <TouchableOpacity>
              <MaterialIcons
                name="search"
                color="#FFFFFF"
                size={25}
                style={{marginRight: 10}}
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <MaterialIcons name="more-vert" color="#FFFFFF" size={25} />
            </TouchableOpacity>
          </Right>
        </Header>

        <View style={styles.subheader} />
        <View style={[styles.content]}>
          <Story />
          <Celebrites />
          <ScrollView>
            <FeedItem />
            <Bumers />
            <FeedItem />
          </ScrollView>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  bgMain: {
    backgroundColor: '#1B1F29',
  },
  navigation: {
    shadowOpacity: 0,
    elevation: 0,
    shadowOffset: {
      height: 0,
    },
    shadowRadius: 0,
    backgroundColor: 'transparent',
    width: '100%',
    borderBottomWidth: 0,
    borderColor: '#FF2D55',
    backgroundColor: '#FF2D55',
  },
  actionBarMiddle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 6,
  },
  actionBarText: {
    color: '#FFFFFF',
    fontFamily: 'Montserrat-Regular',
    fontSize: 20,
    textAlign: 'center',
  },
  subheader: {
    backgroundColor: '#FF2D55',
    height: 70,
  },
  content: {
    flex: 12,
    backgroundColor: '#1B1F29',
    marginTop: -70,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
});

export default FeedsScreen;
