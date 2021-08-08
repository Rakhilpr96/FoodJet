import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, TouchableWithoutFeedback, FlatList} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../../theme/colors';
import RestaurantCard from './restaurantCard';
import {connect} from 'react-redux';
import Styles from './style';

const HomeScreen = props => {
  const navigation = useNavigation();
  return (
    <View style={Styles.container}>
      <Text style={Styles.heading}>Find the best restaurants</Text>
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate('SearchScreen')}>
        <View style={Styles.searchBar}>
          <MaterialIcons name="search" size={25} color={colors.lightBlack} />
          <Text style={Styles.searchBarText}>Search Restaurants</Text>
        </View>
      </TouchableWithoutFeedback>
      <FlatList
        contentContainerStyle={Styles.scrollContainer}
        data={props.items}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <RestaurantCard item={item} />}
      />
    </View>
  );
};

const mapStateToProps = state => {
  return {items: state.restaurantReducer.restaurantList};
};

export default connect(mapStateToProps)(HomeScreen);
