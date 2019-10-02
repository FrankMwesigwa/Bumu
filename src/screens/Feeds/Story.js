import React from 'react';
import {TouchableOpacity, Image, FlatList, StyleSheet} from 'react-native';
import {Text, View} from 'native-base';

import Stories from '../../constants/data/Stories';

const Story = () => {
  return (
    <View style={Styles.section}>
      <FlatList
        data={Stories}
        horizontal
        style={Styles.stories}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <TouchableOpacity
            style={Styles.itemStory}
            underlayColor="transparent">
            <View>
              <Image source={item.image} style={Styles.itemStoryImg} />
              <Text style={Styles.itemStoryName}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const Styles = StyleSheet.create({
  section: {
    paddingVertical: 28,
  },
  stories: {
    paddingHorizontal: 15,
  },
  itemStoryName: {
    color: '#FFF',
    fontSize: 10,
    fontFamily: 'Montserrat-SemiBold',
    textAlign: 'center',
  },
  itemStory: {
    width: 45,
    marginLeft: 5,
    marginRight: 5,
  },
  itemStoryImg: {
    marginBottom: 5,
    width: 45,
    height: 45,
    borderRadius: 35,
    textAlign: 'center',
    borderColor: '#FF2D55',
    borderWidth: 1,
  },
});

export default Story;
