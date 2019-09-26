/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Text,
  View,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';

class Properties extends Component {
  state = {
    properties: [],
    error: '',
    isLoading: true,
  };

  componentDidMount = () => {
    axios
      .get('https://jupaapp.firebaseio.com/properties.json')
      .then(res => {
        console.log('Data Debugger XXXXX', res.data);
        this.setState({properties: res.data, isLoading: false});
      })
      .catch(err => {
        this.setState({error: err.message, isLoading: false});
      });
  };

  //   fetchData = async () => {
  //       const response = await axios.get('https://mololo-items.firebaseio.com/properties.json')
  //       const fetched = response.data;
  //       this.setState({properties: fetched})
  //   }

  //   renderItem = ({item}) => {
  //     return (
  //       <View>
  //         <Text>{item.firstname}</Text>
  //         <Text>{item.lastname}</Text>
  //         <Text>{item.age}</Text>
  //         <Text>{item.city}</Text>
  //         <Text>{item.district}</Text>
  //       </View>
  //     );
  //   };

  // renderItem = data => {
  //   return (
  //     <TouchableOpacity style={{backgroundColor: 'transparent'}}>
  //       <View>
  //         <Text>{data.item.firstname}</Text>
  //         <Text>{data.item.lastname}</Text>
  //         <Text>{data.item.age}</Text>
  //         <Text>{data.item.city}</Text>
  //         <Text>{data.item.district}</Text>
  //       </View>
  //     </TouchableOpacity>
  //   );
  // };

  render() {
    const {properties, isLoading} = this.state;

    if (isLoading) {
      return (
        <View>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View>
        <Text>Properties Window!!!</Text>
        <FlatList
          data={properties}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View>
              <Text>{item.firstname}</Text>
              <Text>{item.lastname}</Text>
              <Text>{item.age}</Text>
              <Text>{item.city}</Text>
              <Text>{item.district}</Text>
            </View>
          )}
        />
      </View>
    );
  }
}

export default Properties;
