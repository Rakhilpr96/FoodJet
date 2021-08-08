import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../../theme/colors';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.screenBackground,
  },
  headerConatiner: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 1,
  },
  backIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    backgroundColor: colors.lightBlack,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backIcon: {
    paddingLeft: 8,
  },
  imageContainer: {
    width: '100%',
  },
  imageStyle: {
    width: '100%',
    height: undefined,
    aspectRatio: 16 / 9,
    resizeMode: 'stretch',
  },
  contentContainer: {
    paddingHorizontal: 15,
  },
  nameText: {
    fontSize: 25,
    marginTop: 15,
    textTransform: 'capitalize',
    fontFamily: 'Raleway-ExtraBold',
    letterSpacing: 0.5,
    color: colors.mediumBlack,
  },
  Row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  cuisineTypeText: {
    fontSize: 16,
    fontFamily: 'Raleway-SemiBold',
    marginLeft: 5,
  },
  workTimeContainer: {
    marginTop: 35,
  },
  subHeading: {
    fontSize: 16,
    fontFamily: 'Raleway-ExtraBold',
    textTransform: 'uppercase',
    color: colors.lightBlack,
  },
  timeContainer: {
    marginTop: 15,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  timeCardContainer: {
    backgroundColor: colors.white,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginVertical: 7.5,
    elevation: 2,
  },
  dayText: {
    position: 'absolute',
    top: 5,
    left: 8,
    fontSize: 11,
    color: colors.lightBlack,
    fontFamily: 'Raleway-ExtraBold',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  timeText: {
    fontSize: 14,
    marginTop: 15,
    marginBottom: 3,
    fontFamily: 'Quicksand-Bold',
    color: colors.mediumBlack,
  },
  reviewContainer: {
    marginTop: 20,
    marginBottom: 20,
  },
  reviewCardContainer: {
    width: 300,
    backgroundColor: colors.white,
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    elevation: 2,
  },
  reviewRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ratingContainer: {
    borderRadius: 5,
    backgroundColor: colors.green,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ratingText: {
    fontSize: 14,
    fontFamily: 'Quicksand-SemiBold',
    color: colors.white,
    paddingHorizontal: 8,
    paddingVertical: 1,
    marginBottom: 2,
  },
  reviewPersonName: {
    fontSize: 14,
    color: colors.lightBlack,
    fontFamily: 'Raleway-ExtraBold',
    textTransform: 'capitalize',
    letterSpacing: 0.5,
  },
  dateText: {
    fontSize: 12,
    color: colors.lightBlack,
    fontFamily: 'Quicksand-Bold',
    textTransform: 'capitalize',
    marginTop: 2,
  },
  reviewText: {
    fontSize: 14,
    fontFamily: 'Raleway-SemiBold',
    color: colors.mediumBlack,
    marginTop: 5,
  },
  seperator: {
    width: 5,
  },
});

export default Styles;
