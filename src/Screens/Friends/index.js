import React, {Component} from 'react';
import {Text, View, FlatList} from 'react-native';

class Friends extends Component {
  render() {
    const friends = [
      {name: 'Friend ~#1'},
      {name: 'Friend ~#2'},
      {name: 'Friend ~#3'},
      {name: 'Friend ~#4'},
      {name: 'Friend ~#5'},
      {name: 'Friend ~#6'},
    ];

    return (
      <View>
        <FlatList
          keyExtractor={friend => friend.name}
          data={friends}
          renderItem={({item}) => {
            return <Text>{item.name}</Text>;
          }}
        />
      </View>
    );
  }
}

export default Friends;
