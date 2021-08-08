import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, TextInput} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../../theme/colors';
import Styles from './style';

const SearchBar = props => {
  const navigation = useNavigation();
  return (
    <View style={Styles.headerRow}>
      <MaterialIcons
        style={Styles.backIcon}
        name="arrow-back-ios"
        size={30}
        color={colors.mediumBlack}
        onPress={() => navigation.goBack()}
      />
      <TextInput
        style={Styles.searchInput}
        placeholder="Search Restaurants"
        placeholderTextColor={colors.lightBlack}
        autoFocus={true}
        onChangeText={props.onChangeText}
        onSubmitEditing={props.onSubmitEditing}
      />
    </View>
  );
};

export default SearchBar;
