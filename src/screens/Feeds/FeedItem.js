/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

import {Card, CardItem, Thumbnail, Body, Left, Button, Icon} from 'native-base';

class FeedItem extends Component {
  render() {
    const images = {
      '1': require('../../../assets/feed_images/1.jpg'),
      '2': require('../../../assets/feed_images/2.jpg'),
      '3': require('../../../assets/feed_images/3.png'),
    };

    return (
      <View style={styles.container}>
        <View style={styles.feedheader}>
          <Left>
            <Thumbnail source={require('../../../assets/me.png')} />
            <Body>
              <Text>Varun </Text>
              <Text note>Jan 15, 2018</Text>
            </Body>
          </Left>
        </View>
        <View style={styles.container}>
          <Image
            source={images[this.props.imageSource]}
            style={{height: 200, width: null, flex: 1}}
          />
        </View>
        <View style={styles.feedicons}>
          <Left>
            <Button transparent>
              <Icon name="md-heart-outline" style={{color: 'black'}} />
            </Button>
            <Button transparent>
              <Icon name="md-chatbubbles-outline" style={{color: 'black'}} />
            </Button>
            <Button transparent>
              <Icon name="md-send-outline" style={{color: 'black'}} />
            </Button>
          </Left>
        </View>

        <View>
          <Text style={styles.feedlikes}>{this.props.likes} likes</Text>
        </View>
        <View style={styles.container}>
          <Body>
            <Text style={styles.feedtext}>
              <Text style={styles.feeduser}>varun</Text>
              Ea do Lorem occaecat laborum do. Minim ullamco ipsum minim eiusmod
              dolore cupidatat magna exercitation amet proident qui. Est do
              irure magna dolor adipisicing do quis labore excepteur. Commodo
              veniam dolore cupidatat nulla consectetur do nostrud ea cupidatat
              ullamco labore. Consequat ullamco nulla ullamco minim.
            </Text>
          </Body>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1B1F29',
  },
  feedheader: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  feedlikes: {
    color: '#FFF',
    height: 20,
  },
  feedicons: {
    color: '#FFF',
    height: 45,
  },
  feeduser: {
    color: '#FFF',
    fontWeight: '300',
  },
  feedtext: {
    color: '#FFFF',
  },
});

export default FeedItem;
