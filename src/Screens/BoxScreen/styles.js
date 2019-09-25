import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  sectionGrey: {
    flex: 1,
    paddingVertical: 30,
  },
  headerBg: {
    flexDirection: 'row',
    marginBottom: 15,
    paddingHorizontal: 20,
  },
  headerIcon: {
    fontSize: 24,
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
    backgroundColor: '#e7e7e7',
    color: '#FFF',
  },
  sLink: {
    color: '#666',
    fontSize: 10,
    fontFamily: 'Montserrat',
  },
  agents: {
    paddingHorizontal: 15,
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
  },
  itemAgentName: {
    color: '#FFF',
    fontSize: 12,
    fontFamily: 'Montserrat-SemiBold',
    textAlign: 'center',
  },
});

export default styles;
