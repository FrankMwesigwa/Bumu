import React from 'react';
import {
  TouchableOpacity,
  Image,
  FlatList,
  StyleSheet,
  Platform,
} from 'react-native';
import {Button, Icon, Text, Right, View} from 'native-base';

import Featured from '../../constants/data/Bumers';

const Bumers = () => {
  return (
    <View style={Styles.section}>
      <View style={Styles.headerBg}>
        <Icon name="clock" type="Feather" style={Styles.headerIcon} />
        <Text style={Styles.sHeader}>Bumers You Might Know</Text>
        <Right>
          <Button small rounded style={Styles.sBtn}>
            <Text style={Styles.sLink}>See All</Text>
          </Button>
        </Right>
      </View>
      <FlatList
        data={Featured}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={Styles.flatList}
        renderItem={({item}) => (
          <TouchableOpacity style={Styles.item} underlayColor="transparent">
            <View>
              <View>
                <Image source={item.image} style={Styles.itemImg} />
                <View style={Styles.itemNoCrv} />
              </View>
              <Text style={Styles.itemLocation}>{item.name}</Text>
              <View style={Styles.itemRow}>
                <View style={Styles.itemOverview}>
                  <Button style={Styles.bumuBtn}>
                    <Text style={Styles.bumuLink}>Bumu + </Text>
                  </Button>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const Styles = StyleSheet.create({
  section: {
    flex: 1,
    paddingTop: 30,
    paddingBottom: 30,
    backgroundColor: '#232733',
  },
  headerBg: {
    flexDirection: 'row',
    marginBottom: 15,
    paddingHorizontal: 20,
  },
  headerIcon: {
    fontSize: 24,
    color: '#333',
  },
  sHeader: {
    color: '#FF2D55',
    marginLeft: 3,
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
    marginTop: 5,
  },
  sBtn: {
    padding: 1,
    backgroundColor: '#e7e7e7',
    color: '#FFF',
  },
  bumuBtn: {
    padding: 1,
    backgroundColor: '#FF2D55',
    color: '#FFF',
    borderRadius: 20,
  },
  sLink: {
    color: '#666',
    fontSize: 10,
    fontFamily: 'Montserrat',
  },
  bumuLink: {
    color: '#FFF',
    fontSize: 13,
    fontFamily: 'Montserrat',
  },
  flatList: {
    paddingLeft: 10,
  },
  item: {
    width: 200,
    marginBottom: 20,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#1B1F29',
    borderRadius: 10,
    elevation: 10,
    shadowOffset: {
      width: 15,
      height: 15,
    },
    shadowColor: 'grey',
    shadowOpacity: 0.1,
    shadowRadius: 0,
  },
  itemImg: {
    marginBottom: 10,
    width: 250,
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    ...Platform.select({
      ios: {
        borderRadius: 10,
      },
    }),
  },
  itemNoCrv: {
    ...Platform.select({
      ios: {
        width: '100%',
        height: 5,
        backgroundColor: '#FFF',
        bottom: 10,
        position: 'absolute',
      },
    }),
  },
  itemFavorite: {
    position: 'absolute',
    alignSelf: 'flex-end',
    color: '#FF2D55',
    marginTop: 10,
    paddingRight: 10,
  },
  itemPrice: {
    color: '#333',
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
    paddingHorizontal: 20,
  },
  itemPriceSm: {
    color: '#333',
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold',
    paddingHorizontal: 20,
  },
  itemLocation: {
    color: '#999',
    fontSize: 11,
    fontFamily: 'Montserrat-Regular',
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  itemRow: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingBottom: 15,
  },
  itemIcon: {
    color: '#999',
    marginRight: 5,
    fontSize: 24,
  },
  itemNo: {
    color: '#333',
    marginRight: 5,
    fontFamily: 'Montserrat-SemiBold',
    marginTop: 5,
    fontSize: 14,
  },
});

export default Bumers;
