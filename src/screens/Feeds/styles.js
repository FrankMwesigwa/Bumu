import {StyleSheet} from 'react-native';
import {Metrics} from '../../constants/metrics';

const styles = StyleSheet.create({
  HeaderBg: {
    //backgroundColor: '#CC0001',
    borderBottomWidth: 1,
    //flex: 4,
    backgroundColor: '#FF2D55',
  },

  left: {
    flex: 1,
    marginLeft: 5,
  },

  body: {
    flex: 3,
  },

  right: {
    flex: 1,
    marginRight: 5,
    flexDirection: 'row',
  },

  headerTitle: {
    color: '#FFFFFF',
    fontFamily: 'robotoRegular',
    fontSize: 500,
    textAlign: 'left',
    alignSelf: 'flex-start',
  },
  /* -- Featured -- */
  section: {
    flex: 1,
    paddingTop: 30,
    paddingBottom: 30,
  },
  sectionGrey: {
    flex: 1,
    paddingVertical: 30,
    backgroundColor: '#f0f0f0',
  },
  flatList: {
    paddingLeft: 10,
  },
  headerBg: {
    flexDirection: 'row',
    marginBottom: 15,
    paddingHorizontal: 20,
  },
  headerIcon: {
    fontSize: 24,
    color: '#333',
  },
  sHeader: {
    color: '#333',
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

  itemList: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: 10,
  },
  itemBig: {
    width: 300,
    backgroundColor: '#FFF',
    borderRadius: 5,
    elevation: 10,
    shadowOffset: {
      width: 15,
      height: 15,
    },
    shadowColor: '#999',
    shadowOpacity: 0.1,
    shadowRadius: 0,
    margin: 10,
    marginBottom: 20,
  },
  itemImgBig: {
    marginBottom: 10,
    width: '100%',
    height: 150,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    ...Platform.select({
      ios: {
        borderRadius: 5,
      },
    }),
  },
  itemNoCrv: {
    ...Platform.select({
      ios: {
        width: '100%',
        height: 5,
        backgroundColor: '#FFF',
        bottom: 10,
        position: 'absolute',
      },
    }),
  },
  itemBg: {
    ...Platform.select({
      ios: {},
    }),
  },

  item: {
    width: 200,
    marginBottom: 20,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#FFF',
    borderRadius: 5,
    elevation: 10,
    shadowOffset: {
      width: 15,
      height: 15,
    },
    shadowColor: 'grey',
    shadowOpacity: 0.1,
    shadowRadius: 0,
  },
  itemImg: {
    marginBottom: 10,
    width: 200,
    height: 100,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    ...Platform.select({
      ios: {
        borderRadius: 5,
      },
    }),
  },
  itemFavorite: {
    position: 'absolute',
    alignSelf: 'flex-end',
    color: '#FCC300',
    marginTop: 10,
    paddingRight: 10,
  },
  itemPrice: {
    color: '#333',
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
    paddingHorizontal: 20,
  },
  itemPriceSm: {
    color: '#333',
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold',
    paddingHorizontal: 20,
  },
  itemLocation: {
    color: '#999',
    fontSize: 11,
    fontFamily: 'Montserrat-Regular',
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  crv: {
    borderRadius: 8,
  },
  itemRow: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingBottom: 15,
  },
  itemOverview: {
    flexGrow: 1,
    flexDirection: 'row',
  },
  itemIcon: {
    color: '#999',
    marginRight: 5,
    fontSize: 24,
  },
  itemNo: {
    color: '#333',
    marginRight: 5,
    fontFamily: 'Montserrat-SemiBold',
    marginTop: 5,
    fontSize: 14,
  },
});

export default styles;
