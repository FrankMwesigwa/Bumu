import React from 'react';
import {TouchableOpacity, Image, FlatList, StyleSheet} from 'react-native';
import {Button, Icon, Text, Right, View} from 'native-base';

import Stories from '../../constants/data/Stories';

const Story = () => {
  return (
    <View style={Styles.sectionGrey}>
      <View style={Styles.headerBg}>
        <Icon name="group" type="FontAwesome" style={Styles.headerIcon} />
        <Text style={Styles.sHeader}>Meet our celebrities</Text>
        <Right>
          <Button small rounded style={Styles.sBtn}>
            <Text style={Styles.sLink}>See All</Text>
          </Button>
        </Right>
      </View>
      <FlatList
        data={Stories}
        horizontal
        style={Styles.agents}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <TouchableOpacity
            style={Styles.itemAgent}
            underlayColor="transparent">
            <View>
              <Image source={item.image} style={Styles.itemAgentImg} />
              <Text style={Styles.itemAgentName}>
                {item.name.toUpperCase()}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const Styles = StyleSheet.create({
  sectionGrey: {
    paddingVertical: 30,
  },
  headerBg: {
    flexDirection: 'row',
    marginBottom: 15,
    paddingHorizontal: 20,
  },
  headerIcon: {
    fontSize: 20,
    color: '#FFF',
  },
  sHeader: {
    color: '#FFF',
    marginLeft: 3,
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold',
    marginTop: 5,
},
  sBtn: {
    padding: 1,
    backgroundColor: '#FF2D55',
    color: '#FFF',
  },
  sLink: {
    color: '#FFF',
    fontSize: 10,
    fontFamily: 'Montserrat',
    textTransform: 'capitalize',
  },
  agents: {
    paddingHorizontal: 15,
  },
  itemAgentName: {
    color: '#FFF',
    fontSize: 12,
    fontFamily: 'Montserrat-SemiBold',
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  itemAgent: {
    width: 72,
    marginLeft: 5,
    marginRight: 5,
  },
  itemAgentImg: {
    marginBottom: 10,
    width: 72,
    height: 72,
    borderRadius: 35,
    textAlign: 'center',
    borderColor: '#FF2D55',
    borderWidth: 2,
  },
});

export default Story;
