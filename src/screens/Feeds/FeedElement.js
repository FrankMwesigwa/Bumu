import React from 'react';
import {View, Text, Image, TouchableHighlight, StyleSheet} from 'react-native';
import {Icon, Button} from 'native-base';

const FeedElement = () => {
  return (
    <View style={Styles.section}>
      <TouchableHighlight underlayColor="transparent">
        <View style={Styles.record}>
          <Image
            source={require('../../../assets/images/CultureReligion.jpg')}
            style={Styles.itemImg}
          />
          <View style={Styles.itemInfo}>
            <Text style={Styles.itemTitle}>4000</Text>
            <Text style={Styles.itemLocation}>Kampala</Text>
            <View style={Styles.itemRow}>
              <View style={Styles.itemOverview}>
                <Icon name="bed" type="FontAwesome" style={Styles.itemIcon} />
                <Text style={Styles.itemNo}>10</Text>
              </View>
              <View style={Styles.itemOverview}>
                <Icon
                  name="bathtub"
                  type="FontAwesome"
                  style={Styles.itemIcon}
                />
                <Text style={Styles.itemNo}>50</Text>
              </View>
            </View>
          </View>
          <View style={Styles.trash}>
            <Button transparent>
              <Icon name="trash-o" type="FontAwesome" style={Styles.itemIcon} />
            </Button>
          </View>
        </View>
      </TouchableHighlight>
    </View>
  );
};

const Styles = StyleSheet.create({
  section: {
    paddingLeft: 0,
    width: '100%',
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
  },
  itemImg: {
    width: 100,
    height: 68,
    borderRadius: 5,
  },
  itemInfo: {
    paddingHorizontal: 15,
  },
  itemTitle: {
    color: '#333',
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold',
    marginBottom: 0,
  },
  itemLocation: {
    color: '#666',
    fontSize: 11,
    fontFamily: 'Montserrat-Regular',
    marginBottom: 5,
    lineHeight: 16,
  },
  itemDate: {
    color: '#999',
    fontSize: 10,
    fontFamily: 'Montserrat-Regular',
  },
  itemRow: {
    flexDirection: 'row',
  },
  itemOverview: {
    flexGrow: 1,
    flexDirection: 'row',
  },
  itemIcon: {
    color: '#999',
    marginRight: 5,
    fontSize: 18,
  },
  itemNo: {
    color: '#333',
    marginRight: 5,
    fontFamily: 'Montserrat-SemiBold',
    marginTop: 5,
    fontSize: 12,
  },
  trash: {
    justifyContent: 'center',
  },
});

export default FeedElement;
