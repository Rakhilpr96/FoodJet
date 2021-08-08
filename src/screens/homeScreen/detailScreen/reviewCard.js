import React from 'react';
import {View, Text} from 'react-native';
import Styles from './style';

const ReviewCard = props => {
  return (
    <View style={Styles.reviewCardContainer}>
      <View style={Styles.reviewRow}>
        <Text style={Styles.reviewPersonName}>{props.name}</Text>
        <View style={Styles.ratingContainer}>
          <Text style={Styles.ratingText}>{props.rating}</Text>
        </View>
      </View>
      <Text style={Styles.dateText}>{props.date}</Text>
      <Text style={Styles.reviewText}>{props.review}</Text>
    </View>
  );
};

export default ReviewCard;
