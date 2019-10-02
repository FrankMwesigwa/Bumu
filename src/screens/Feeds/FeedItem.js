/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {Content} from 'native-base';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const {width, height} = Dimensions.get('window');

const FeedItem = () => {
  return (
    <Content>
      <View style={styles.section}>
        <TouchableHighlight underlayColor="transparent">
          <View style={styles.record}>
            <Image
              source={require('../../../assets/images/ic_background_ptwentyseven.png')}
              style={styles.itemImg}
            />
            <View style={styles.itemInfo}>
              <Text style={styles.itemTitle}>Frank Mwesigwa</Text>
              <Text style={styles.itemDesc}>4 hours ago</Text>
            </View>
            <Text style={styles.itemDate}>
              <MaterialIcons name="more-vert" color="#FFFFFF" size={25} />
            </Text>
          </View>
        </TouchableHighlight>
      </View>

      <View style={styles.feedsection}>
        <TouchableHighlight underlayColor="transparent">
          <View style={styles.record}>
            <View style={styles.socialContainer}>
              <Image
                source={require('../../../assets/images/e-commerce-like-heart.png')}
                style={styles.socialImg}
              />
              <Text style={styles.socialTitle}>1.2k</Text>
              <Image
                source={require('../../../assets/images/path.png')}
                style={styles.socialImg}
              />
              <Text style={styles.socialTitle}>1.2k</Text>
              <Image
                source={require('../../../assets/images/send.png')}
                style={styles.socialImg}
              />
              <Text style={styles.socialTitle} />
              <Image
                source={require('../../../assets/images/save-button.png')}
                style={styles.socialImg}
              />
            </View>

            <View style={styles.itemInfo}>
              <Image
                source={require('../../../assets/images/45.png')}
                style={styles.feedImg}
              />
              <View style={styles.postDateView}>
                <View style={styles.suggestedPeopleImgView}>
                  <Image
                    style={styles.sugestedPeopleImgOne}
                    source={require('../../../assets/images/ProfileUserImg.png')}
                  />
                  <Image
                    style={styles.sugestedPeopleImgTwo}
                    source={require('../../../assets/images/ProfileImg.png')}
                  />
                  <Image
                    style={styles.sugestedPeopleImgThree}
                    source={require('../../../assets/images/reviews_two.png')}
                  />
                </View>
                <Text style={[styles.postAuthorDate, {color: '#adadad'}]}>
                  Liked By
                </Text>
                <Text
                  style={[
                    styles.postAuthorDate,
                    {color: '#FFF', marginLeft: width * 0.01},
                  ]}>
                  Ann, Joy, Emma and 33 others
                </Text>
              </View>
              <Text style={styles.itemDesc}>
                Micheal Jordaon considered one of the greatest basketball
                players in the all world. watch out for kevin dyrant
              </Text>
              <Text style={styles.itemDesc}>View all 240 comments</Text>
            </View>
          </View>
        </TouchableHighlight>
      </View>
    </Content>
  );
};

const styles = StyleSheet.create({
  section: {
    paddingLeft: 0,
    width: '100%',
    marginTop: 15,
  },
  feedsection: {
    paddingLeft: 0,
    width: '100%',
  },
  record: {
    flexDirection: 'row',
    marginLeft: 0,
    paddingVertical: 10,
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  socialContainer: {
    paddingVertical: 20,
  },
  postDateView: {
    width: width * 0.78,
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop: height * 0.015,
    alignItems: 'center',
    marginBottom: 5,
  },
  postAuthorDate: {
    fontSize: 12,
    fontFamily: 'Roboto-Italic',
  },
  suggestedPeopleImgView: {
    flexDirection: 'row',
    marginRight: width * 0.03,
  },
  sugestedPeopleImgOne: {
    width: 30,
    height: 30,
    borderRadius: width * 0.06,
    borderWidth: 1,
    borderColor: 'red',
  },
  sugestedPeopleImgTwo: {
    width: 30,
    height: 30,
    borderRadius: width * 0.06,
    borderWidth: 1,
    borderColor: 'red',
    marginLeft: -width * 0.03,
  },
  sugestedPeopleImgThree: {
    width: 30,
    height: 30,
    borderRadius: width * 0.06,
    borderWidth: 1,
    borderColor: 'red',
    marginLeft: -width * 0.03,
  },
  item: {
    width: '100%',
    flexDirection: 'column',
  },
  itemImg: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: 'red',
  },
  itemInfo: {
    flex: 1,
    paddingHorizontal: 15,
  },
  feedImg: {
    borderRadius: 10,
    width: '100%',
    height: 400,
  },
  itemTitle: {
    color: '#FFF',
    fontSize: 12,
    fontFamily: 'Montserrat-SemiBold',
    marginBottom: 0,
  },
  socialTitle: {
    color: '#FFF',
    fontSize: 12,
    fontFamily: 'Montserrat-SemiBold',
    marginBottom: 0,
    paddingVertical: 15,
  },
  itemDesc: {
    color: '#FFF',
    fontSize: 11,
    fontFamily: 'Montserrat-Regular',
    marginBottom: 5,
    lineHeight: 16,
  },
  itemDate: {
    color: '#FFF',
    fontSize: 10,
    fontFamily: 'Montserrat-Regular',
  },
});

export default FeedItem;
