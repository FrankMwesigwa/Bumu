/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TouchableOpacity, Image, FlatList, StyleSheet} from 'react-native';
import {View} from 'native-base';

import Celeb from '../../constants/data/Stories';

const Celebrities = () => {
  return (
    <View style={Styles.section}>
      <View style={Styles.celebImg}>
        <FlatList
          data={Celeb}
          horizontal
          style={Styles.slider}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <TouchableOpacity underlayColor="transparent">
              <View>
                <Image source={item.image} style={Styles.sliderImg} />
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  section: {
    paddingHorizontal: 20,
  },
  celebImg: {
    minHeight: 100,
  },
  slider: {
    width: '100%',
  },
  sliderImg: {
    width: 100,
    height: 100,
    marginRight: 10,
    borderRadius: 5,
  },
});

export default Celebrities;
