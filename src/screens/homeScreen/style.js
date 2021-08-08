import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: colors.screenBackground,
  },
  heading: {
    fontSize: 35,
    fontFamily: 'Raleway-Bold',
    marginHorizontal: 15,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: colors.white,
    borderRadius: 5,
    elevation: 5,
    marginTop: 15,
    marginHorizontal: 15,
  },
  searchBarText: {
    fontSize: 14,
    color: colors.lightBlack,
    fontFamily: 'Quicksand-SemiBold',
    paddingHorizontal: 10,
  },
  cardContainer: {
    marginTop: 15,
    backgroundColor: colors.white,
    borderRadius: 5,
    elevation: 5,
    marginHorizontal: 15,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  cardImageContainer: {
    width: '100%',
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
  },
  cardImage: {
    width: '100%',
    height: undefined,
    aspectRatio: 16 / 9,
    resizeMode: 'stretch',
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
  },
  cardBottomContainer: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  nameText: {
    fontSize: 20,
    textTransform: 'capitalize',
    fontFamily: 'Raleway-ExtraBold',
    letterSpacing: 0.5,
    color: colors.mediumBlack,
  },
  Row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cuisineTypeText: {
    fontSize: 16,
    fontFamily: 'Raleway-SemiBold',
    marginLeft: 5,
  },
  scrollContainer: {
    paddingVertical: 15,
  },
});

export default Styles;
