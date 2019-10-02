import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Header, Right, Container, Button} from 'native-base';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Trending from './Trending';
import Events from './Events';

const MediaScreen = () => {
  return (
    <Container style={styles.bgMain}>
      <Header style={styles.navigation}>
        <StatusBar
          backgroundColor="#FF2D55"
          animated
          barStyle="light-content"
        />
        <View style={styles.actionBarMiddle}>
          <Text style={styles.actionBarText}>Media</Text>
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
            <Image
              source={require('../../../assets/images/Notification.png')}
              style={styles.socialImg}
            />
          </TouchableOpacity>
        </Right>
      </Header>

      <View style={styles.subheader} />
      <View style={styles.content}>
        <View style={styles.navHeader}>
          <View style={styles.navRow}>
            <Button style={styles.itemBtn}>
              <Text style={styles.btnText}>Trending</Text>
            </Button>
            <Text style={styles.navText}>Movies & Videos</Text>
          </View>
        </View>
        <View style={styles.navHeader}>
          <View style={styles.navRow}>
            <Text style={styles.navText}>News</Text>
            <Text style={styles.navText}>Fashion</Text>
            <Text style={styles.navText}>Entertainment</Text>
            <Text style={styles.navText}>Sport</Text>
          </View>
        </View>
        <ScrollView>
          <Trending />
          <Trending />
          <Events />
        </ScrollView>
      </View>
    </Container>
  );
};

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
  navHeader: {
    paddingVertical: 28,
  },
  navRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  itemBtn: {
    backgroundColor: '#FF2D55',
    paddingHorizontal: 10,
    borderRadius: 30,
    width: 120,
  },
  navText: {
    color: '#FFF',
    fontSize: 15,
    fontFamily: 'Montserrat',
    marginBottom: 0,
  },
  btnText: {
    color: '#FFF',
    fontSize: 15,
    fontFamily: 'Montserrat',
    marginBottom: 0,
    textAlign: 'center',
  },
});

export default MediaScreen;
