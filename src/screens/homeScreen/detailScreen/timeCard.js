import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import Styles from './style';
const SCREEN_WIDTH = Dimensions.get('window').width;

const TimeCard = props => {
  return (
    <View
      style={[
        Styles.timeCardContainer,
        {
          width:
            props.day === 'Sunday' ? SCREEN_WIDTH - 30 : SCREEN_WIDTH / 2 - 20,
        },
      ]}>
      <Text style={Styles.dayText}>{props.day}</Text>
      <Text style={Styles.timeText}>{props.time}</Text>
    </View>
  );
};

export default TimeCard;
