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
import {Header, Right, Left, Body} from 'native-base';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';

import Stories from './Stories';
import Celebrites from './Celebrities';
import FeedItem from './FeedItem';
import Bumers from './Bumers';

let {height} = Dimensions.get('window');

let box_count = 3;
let box_height = height / box_count;

class FeedsScreen extends Component {
  render() {
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor('#FF2D55', true);
      StatusBar.setTranslucent(true);
    }
    return (
      <View style={[styles.container]}>
        <Header style={[styles.header]} transparent>
          <Left style={styles.left}>
            <TouchableOpacity
              onPress={() => this.props.navigation.openDrawer()}>
              <Entypo name="menu" color="#FFFFFF" size={30} />
            </TouchableOpacity>
          </Left>

          <Body style={styles.body}>
            <Text style={styles.headerTitle}>Bumu</Text>
          </Body>

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

        <Header style={Style.navigation}>
          <StatusBar
            backgroundColor="#FF2D55"
            animated
            barStyle="light-content"
          />

          <View style={Style.actionBarLeft}>
                    <Button transparent style={Style.actionMenu} onPress={() => {
                        NavigationService.openDrawer()
                    }}>
                        <Image source={require('@Asset/images/menu.png')} />
                    </Button>
                </View>
                <View style={Style.actionBarMiddle}>
                    <Text style={Style.actionBarText}>Talk to your Celebrity Bumu</Text>
                </View>
                <View style={Style.actionBarRight}>
                </View>
            </Header>

        <View style={styles.subheader} />
        <View style={[styles.content]}>
          <View style={styles.storiesheader}>
            <Stories />
          </View>
          {/* <Celebrites /> */}
          <ScrollView style={styles.feeditems}>
            <FeedItem />
            <Bumers />
            <FeedItem />
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#FF2D55',
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
  storiesheader: {
    paddingTop: 3,
  },
  feeditems: {
    marginHorizontal: 5,
  },
});

export default FeedsScreen;
