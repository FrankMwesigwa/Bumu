import React from 'react';
import {Text, View, TouchableHighlight, Image, StyleSheet} from 'react-native';
import {Content, Button} from 'native-base';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Trending = () => {
  return (
    <Content>
      <View style={styles.feedsection}>
        <TouchableHighlight underlayColor="transparent">
          <View style={styles.record}>
            <View style={styles.itemInfo}>
              <Image
                source={require('../../../assets/images/CultureReligion.jpg')}
                style={styles.feedImg}
              />
              <View style={styles.textOverlay}>
                <View style={styles.row1}>
                  <Text style={styles.itemtext}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </Text>
                  <MaterialIcons name="more-vert" color="#FFFFFF" size={25} />
                </View>
                <View style={styles.row2}>
                  <View style={styles.itemBtn1}>
                    <Text style={styles.itemText}>Sports</Text>
                  </View>
                  <View style={styles.itemBtn2}>
                    <Text style={styles.itemText2}>Cnn</Text>
                  </View>
                  <Text style={styles.itemText3}>2 mins ago</Text>
                </View>
              </View>
            </View>
          </View>
        </TouchableHighlight>
      </View>
    </Content>
  );
};

const styles = StyleSheet.create({
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
  itemInfo: {
    flex: 1,
    paddingHorizontal: 15,
  },
  feedImg: {
    borderRadius: 10,
    width: '100%',
    height: 400,
  },
  itemtext: {
    color: '#FFF',
    fontSize: 15,
    fontFamily: 'Montserrat',
    marginBottom: 0,
  },
  itemtext2: {
    color: '#FF2D55',
    fontSize: 15,
    fontFamily: 'Montserrat',
    marginBottom: 0,
  },
  itemtext3: {
    color: '#FFF',
    fontSize: 15,
    fontFamily: 'Montserrat',
    marginBottom: 0,
    marginRight: 50,
    marginTop: 10,
  },
  textOverlay: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    top: 300,
  },
  row1: {
    flexDirection: 'row',
    marginLeft: 50,
  },
  row2: {
    flexDirection: 'row',
    marginLeft: 50,
  },
  itemText: {
    color: '#FFF',
    marginRight: 5,
    fontFamily: 'Montserrat-SemiBold',
    marginTop: 5,
    fontSize: 12,
  },
  itemBtn1: {
    flexDirection: 'row',
    backgroundColor: '#FF2D55',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 10,
    marginRight: 10,
    marginTop: 10,
  },
  itemBtn2: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 10,
    marginRight: 10,
    marginTop: 10,
  },
});

export default Trending;
