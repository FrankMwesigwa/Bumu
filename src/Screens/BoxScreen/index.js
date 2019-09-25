import React from 'react';
import {
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
//import {Avatar} from 'react-native-elements';
import {
  Button,
  Icon,
  Text,
  Right,
  View,
  Footer,
  FooterTab,
  Badge,
  Container,
  Header,
} from 'native-base';

import Stories from './stories';

import Style from '@Theme/Style';
import Styles from './styles';

const BoxScreen = props => {
  return (
    <Container style={Style.bgMain}>
      <Header style={Style.navigation}>
        <StatusBar
          backgroundColor="#FF2D55"
          animated
          barStyle="light-content"
        />

        <View style={Style.actionBarLeft}>
          <Button
            transparent
            style={Style.actionMenu}
            onPress={() => {
              NavigationService.openDrawer();
            }}>
            <Image source={require('@Asset/images/menu.png')} />
          </Button>
        </View>
        <View style={Style.actionBarMiddle}>
          <Text style={Style.actionBarText}>Discover</Text>
        </View>
        <View style={Style.actionBarRight} />
      </Header>
      <View style={styles.body}>
        <View style={Styles.sectionGrey}>
          <View style={Styles.headerBg}>
            <Icon name="group" type="FontAwesome" style={Styles.headerIcon} />
            <Text style={Styles.sHeader}>Meet Your Celebrity</Text>
            <Right>
              <Button
                small
                rounded
                style={Styles.sBtn}
                onPress={() => {
                  props.navigation.navigate('friends');
                }}>
                <Text style={Styles.sLink}>See All</Text>
              </Button>
            </Right>
          </View>
          <FlatList
            data={Stories}
            horizontal
            style={Styles.agents}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, separators}) => (
              <TouchableOpacity
                style={Styles.itemAgent}
                underlayColor="transparent"
                onPress={() => {
                  props.navigation.navigate('PublicAgentDetail');
                }}>
                <View>
                  <Image
                    source={{uri: item.image}}
                    style={Styles.itemAgentImg}
                  />
                  <Text style={Styles.itemAgentName}>{item.name}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>

      <Footer style={Style.greyTopLine}>
        <FooterTab style={Style.bgBot}>
          <Button
            style={Style.bgBot}
            onPress={() => {
              props.navigation.navigate('PublicHome');
            }}>
            <Icon name="home" type="FontAwesome" style={Style.textBlue} />
          </Button>
          <Button
            style={Style.bgBot}
            onPress={() => {
              props.navigation.navigate('PublicPropertySearch');
            }}>
            <Icon name="search" type="Octicons" style={Style.textBlue} />
          </Button>
          <Button
            style={Style.bgBot}
            onPress={() => {
              props.navigation.navigate('MemberHome');
            }}>
            <Icon name="user" type="FontAwesome" style={Style.textActive} />
          </Button>
          <Button
            style={Style.bgBot}
            onPress={() => {
              props.navigation.navigate('MemberFavorites');
            }}>
            <Icon name="heart" type="FontAwesome" style={Style.textBlue} />
          </Button>
          <Button
            badge
            vertical
            style={Style.bgBot}
            onPress={() => {
              props.navigation.navigate('MemberMessages');
            }}>
            <Badge>
              <Text>1</Text>
            </Badge>
            <Icon name="bell" type="Entypo" style={Style.textBlue} />
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#1B1f29',
    top: -60,
    //marginLeft: 20,
    //marginRight: 20,
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    overflow: 'hidden',
  },
  stories: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: 'white',
    fontSize: 15,
  },
  // body: {
  //   zIndex: 1,
  //   backgroundColor: '#1B1f29',
  //   height: 700,
  //   marginTop: 80,
  //   //marginLeft: 10,
  //   //marginRight: 1,
  //   //borderWidth: 2,
  //   borderTopLeftRadius: 60,
  //   borderTopRightRadius: 60,
  //   overflow: 'hidden',
  // },
  // main: {
  //   borderWidth: 1,
  //   borderColor: 'red',
  //   marginTop: 50,
  //   marginLeft: 20,
  //   marginRight: 20,
  // },
});

export default BoxScreen;
