/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TouchableOpacity, Image, FlatList, StyleSheet} from 'react-native';
import {View} from 'native-base';

import Featured from '../../constants/data/Stories';

const Celebrities = () => {
  return (
    <View style={Styles.gallery}>
      <View style={Styles.galleryImg}>
        <FlatList
          data={Featured}
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
  gallery: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  galleryTitle: {
    fontFamily: 'Montserrat-SemiBold',
    color: '#333',
  },
  galleryImg: {
    color: '#666',
    lineHeight: 20,
    minHeight: 100,
  },
  slider: {
    width: '100%',
  },
  sliderImg: {
    width: 120,
    height: 120,
    marginRight: 10,
    borderRadius: 5,
  },
});

export default Celebrities;
