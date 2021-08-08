import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../../theme/colors';
import {useDispatch} from 'react-redux';
import {getDetail} from '../../store/actions';
import Styles from './style';

const RestaurantCard = ({item}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <>
      <TouchableWithoutFeedback
        onPress={() => {
          dispatch(getDetail(item.id));
          navigation.navigate('DetailScreen');
        }}>
        <View style={Styles.cardContainer}>
          <View style={Styles.cardImageContainer}>
            <Image style={Styles.cardImage} source={item.photograph} />
          </View>
          <View style={Styles.cardBottomContainer}>
            <Text style={Styles.nameText} numberOfLines={1}>
              {item.name}
            </Text>
            <View style={Styles.Row}>
              <MaterialCommunityIcons
                name="food"
                size={25}
                color={colors.mediumBlack}
              />
              <Text style={Styles.cuisineTypeText}>{item.cuisine_type}</Text>
            </View>
            <View
              style={[
                Styles.Row,
                {marginTop: 5, marginLeft: -2, marginBottom: 5},
              ]}>
              <MaterialIcons
                name="location-pin"
                size={22}
                color={colors.mediumBlack}
              />
              <Text style={[Styles.cuisineTypeText, {marginLeft: 10}]}>
                {item.neighborhood}
              </Text>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

export default RestaurantCard;
