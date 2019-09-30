/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {Icon, Thumbnail} from 'native-base';

const Stories = () => {
  return (
    <View>
      <View style={{height: 100}}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 7,
          }}>
          <Text style={{fontWeight: 'bold'}}>meet your celebrity</Text>

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon name="md-play" style={{fontSize: 14}} />
            <Text style={{fontWeight: 'bold'}}> Watch All</Text>
          </View>
        </View>
        <View style={{flex: 3}}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              alignItems: 'center',
              paddingStart: 5,
              paddingEnd: 5,
            }}>
            <Thumbnail
              style={{
                marginHorizontal: 5,
                borderColor: 'pink',
                borderWidth: 2,
              }}
              source={require('../../../assets/StoriesHeaderThumbnails/1.jpg')}
            />
            <Thumbnail
              style={{
                marginHorizontal: 5,
                borderColor: 'pink',
                borderWidth: 2,
              }}
              source={require('../../../assets/StoriesHeaderThumbnails/2.jpg')}
            />
            <Thumbnail
              style={{
                marginHorizontal: 5,
                borderColor: 'pink',
                borderWidth: 2,
              }}
              source={require('../../../assets/StoriesHeaderThumbnails/3.jpg')}
            />
            <Thumbnail
              style={{
                marginHorizontal: 5,
                borderColor: 'pink',
                borderWidth: 2,
              }}
              source={require('../../../assets/StoriesHeaderThumbnails/4.jpg')}
            />

            <Thumbnail
              style={{
                marginHorizontal: 5,
                borderColor: 'pink',
                borderWidth: 2,
              }}
              source={require('../../../assets/StoriesHeaderThumbnails/5.jpg')}
            />
            <Thumbnail
              style={{
                marginHorizontal: 5,
                borderColor: 'pink',
                borderWidth: 2,
              }}
              source={require('../../../assets/StoriesHeaderThumbnails/6.jpg')}
            />
            <Thumbnail
              style={{
                marginHorizontal: 5,
                borderColor: 'pink',
                borderWidth: 2,
              }}
              source={require('../../../assets/StoriesHeaderThumbnails/7.jpg')}
            />
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default Stories;
