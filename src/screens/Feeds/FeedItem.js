/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {Content} from 'native-base';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FeedElement from './FeedElement';

const {width, height} = Dimensions.get('window');

const FeedItem = () => {
  return (
    <Content>
      {/* <View style={styles.rowHeaderView}>
        <Image
          style={styles.profileImg}
          source={require('../../../assets/images/ic_background_ptwentyseven.png')}
        />
        <View style={styles.rowHeaderNameView}>
          <Text style={styles.rowNameTxt}>Frank Mwesigwa</Text>
          <Text style={styles.rowTimeTxt}>4 Hours Ago</Text>
        </View>
        <Right>
          <TouchableOpacity
            style={[
              styles.statusView,
              {backgroundColor: styles.statusBgColor},
            ]}>
            <MaterialIcons name="more-vert" color="#FFFFFF" size={25} />
          </TouchableOpacity>
        </Right>
      </View> */}

      <View style={styles.section}>
        <TouchableHighlight underlayColor="transparent">
          <View style={styles.record}>
            <Image
              source={require('../../../assets/images/ic_background_ptwentyseven.png')}
              style={styles.itemImg}
            />
            <View style={styles.itemInfo}>
              <Text style={styles.itemTitle}>Frank Mwesigwa</Text>
              <Text style={styles.itemDesc}>
                would love to connect with you
              </Text>
            </View>
            <Text style={styles.itemDate}>
              <MaterialIcons name="more-vert" color="#FFFFFF" size={25} />
            </Text>
          </View>
        </TouchableHighlight>
      </View>

      <View style={styles.section}>
        <TouchableHighlight underlayColor="transparent">
          <View style={styles.record}>
            <Image
              source={require('../../../assets/images/ic_background_ptwentyseven.png')}
              style={styles.itemImg}
            />
            <View style={styles.itemInfo}>
              <Image
                source={require('../../../assets/images/CultureReligion.jpg')}
                style={styles.feedImg}
              />
              <View style={styles.itemDesc}>
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
                  <Text
                    style={[
                      styles.postAuthorDate,
                      {
                        color: '#6f6f6f',
                        marginLeft: width * 0.025,
                        marginTop: -width * 0.007,
                      },
                    ]}>
                    .
                  </Text>
                </View>
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

      <View style={[styles.dividerHorizontal, {marginTop: height * 0.022}]} />
    </Content>
  );
};

const styles = StyleSheet.create({
  rowHeaderView: {
    flexDirection: 'row',
    marginTop: height * 0.022,
    width: width * 0.85,
    alignSelf: 'center',
  },
  rowHeaderNameView: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: width * 0.03,
  },
  profileImg: {
    width: 50,
    height: 50,
    borderRadius: 50,
    alignSelf: 'flex-start',
  },
  rowNameTxt: {
    color: '#6f6f6f',
    fontSize: 17,
    fontFamily: 'Roboto-Bold',
  },
  rowTimeTxt: {
    color: '#b7b7b7',
    fontSize: 14,
    fontFamily: 'Roboto-Bold',
    textAlign: 'left',
  },
  statusView: {
    borderRadius: height * 0.03,
    marginTop: -height * 0.03,
    marginRight: -height * 0.01,
  },
  likeCommentShareText: {
    fontFamily: 'Roboto-Bold',
    fontSize: 17,
    marginLeft: width * 0.03,
    color: '#6f6f6f',
  },
  descriptionView: {
    width: width * 0.85,
    alignSelf: 'center',
  },
  rowDescTxt: {
    color: '#6f6f6f',
    fontSize: 15,
    fontFamily: 'Roboto-Medium',
    marginTop: height * 0.015,
    textAlign: 'left',
  },
  postDescImage: {
    width: width * 0.85,
    height: height * 0.7,
    alignSelf: 'center',
    marginTop: height * 0.015,
    resizeMode: 'stretch',
  },
  likeView: {
    flexDirection: 'row',
    width: width * 0.23,
    alignItems: 'center',
  },

  commentView: {
    flexDirection: 'row',
    width: width * 0.34,
    alignItems: 'center',
    marginLeft: width * 0.045,
  },

  shareView: {
    flexDirection: 'row',
    width: width * 0.28,
    alignItems: 'center',
    marginLeft: width * 0.045,
  },

  likeCommentShareImage: {
    width: width * 0.06,
    height: height * 0.03,
    resizeMode: 'contain',
  },
  shares: {
    marginTop: height * 0.015,
  },
  shareText: {
    color: '#6f6f6f',
    fontSize: 15,
    fontFamily: 'Roboto-Medium',
    marginTop: height * 0.015,
    textAlign: 'left',
  },
  postDateView: {
    width: width * 0.95,
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop: height * 0.015,
    alignItems: 'center',
    marginLeft: 10,
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
    borderWidth: 2,
    borderColor: 'red',
  },
  sugestedPeopleImgTwo: {
    width: 30,
    height: 30,
    borderRadius: width * 0.06,
    borderWidth: 2,
    borderColor: 'red',
    marginLeft: -width * 0.03,
  },
  sugestedPeopleImgThree: {
    width: 30,
    height: 30,
    borderRadius: width * 0.06,
    borderWidth: 2,
    borderColor: 'red',
    marginLeft: -width * 0.03,
  },
  section: {
    paddingLeft: 0,
    width: '100%',
    marginTop: 10,
  },
  item: {
    width: '100%',
    flexDirection: 'column',
  },
  record: {
    flexDirection: 'row',
    marginLeft: 0,
    paddingVertical: 10,
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemImg: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  itemInfo: {
    flex: 1,
    paddingHorizontal: 15,
  },
  feedImg: {
    //width: 100,
    //height: 300,
    borderRadius: 10,
    width: 400,
    height: 500,
    paddingRight: 50,
  },
  itemTitle: {
    color: '#FFF',
    fontSize: 12,
    fontFamily: 'Montserrat-SemiBold',
    marginBottom: 0,
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
