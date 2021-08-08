import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';

const Styles = StyleSheet.create({
  headerRow: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    elevation: 5,
    alignItems: 'center',
    height: 45,
  },
  backIcon: {
    paddingLeft: 15,
  },
  searchInput: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    fontSize: 14,
    fontFamily: 'Quicksand-Bold',
    color: colors.mediumBlack,
  },
  textInputContainer: {
    flexDirection: 'row',
  },
  textInput: {
    backgroundColor: '#FFFFFF',
    height: 44,
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontSize: 15,
    flex: 1,
  },
});

export default Styles;
