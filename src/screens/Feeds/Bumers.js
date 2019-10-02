import React from 'react';
import {
  TouchableOpacity,
  Image,
  FlatList,
  StyleSheet,
  Platform,
} from 'react-native';
import {Button, Text, Right, View} from 'native-base';

import Featured from '../../constants/data/Bumers';

const Bumers = () => {
  return (
    <View style={Styles.section}>
      <View style={Styles.headerBg}>
        <Text style={Styles.sHeader}>Bumers you might know</Text>
        <Right>
          <Text style={Styles.sLink}>View All</Text>
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
              </View>
              <Text style={Styles.itemName}>{item.name}</Text>
              <View style={Styles.itemRow}>
                <View style={Styles.itemOverview}>
                  <Button small rounded style={Styles.bumuBtn}>
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
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#232733',
  },
  headerBg: {
    flexDirection: 'row',
    marginBottom: 15,
    paddingHorizontal: 20,
  },
  sHeader: {
    color: '#FF2D55',
    marginLeft: 3,
    fontSize: 15,
    fontFamily: 'Montserrat-SemiBold',
    marginTop: 5,
  },
  bumuBtn: {
    flex: 1,
    backgroundColor: '#FF2D55',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sLink: {
    color: '#FFF',
    fontSize: 15,
    marginTop: 5,
    fontFamily: 'Montserrat',
  },
  bumuLink: {
    color: '#FFF',
    fontSize: 10,
    fontFamily: 'Montserrat-SemiBold',
    textTransform: 'capitalize',
  },
  flatList: {
    paddingLeft: 10,
  },
  item: {
    width: 150,
    marginBottom: 20,
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: '#1B1F29',
    borderRadius: 5,
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
    width: 150,
    height: 100,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    ...Platform.select({
      ios: {
        borderRadius: 10,
      },
    }),
  },
  itemName: {
    color: '#FFF',
    fontSize: 10,
    fontFamily: 'Montserrat-Bold',
    marginBottom: 10,
    paddingHorizontal: 20,
    textAlign: 'center',
  },
  itemRow: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingBottom: 15,
  },
  itemOverview: {
    flexGrow: 1,
    flexDirection: 'row',
  },
});

export default Bumers;
