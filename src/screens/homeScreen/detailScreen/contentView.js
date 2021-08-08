import React from 'react';
import {View, Text, FlatList, ScrollView} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../../../theme/colors';
import ReviewCard from './reviewCard';
import Styles from './style';
import TimeCard from './timeCard';

const ContentView = ({data}) => {
  return (
    <View style={Styles.contentContainer}>
      <View>
        <Text style={Styles.nameText} numberOfLines={1}>
          {data.name}
        </Text>
        <View style={Styles.Row}>
          <MaterialCommunityIcons
            name="food"
            size={25}
            color={colors.mediumBlack}
          />
          <Text style={Styles.cuisineTypeText}>{data.cuisine_type}</Text>
        </View>
        <View style={[Styles.Row, {marginTop: 5}]}>
          <MaterialIcons
            name="location-pin"
            size={25}
            color={colors.mediumBlack}
          />
          <Text style={Styles.cuisineTypeText}>{data.address}</Text>
        </View>
      </View>
      <View style={Styles.workTimeContainer}>
        <Text style={Styles.subHeading}>Open Hours</Text>
        <View style={Styles.timeContainer}>
          <TimeCard day="Monday" time={data.operating_hours.Monday} />
          <TimeCard day="Tuesday" time={data.operating_hours.Tuesday} />
          <TimeCard day="Wednesday" time={data.operating_hours.Wednesday} />
          <TimeCard day="Thursday" time={data.operating_hours.Thursday} />
          <TimeCard day="Friday" time={data.operating_hours.Friday} />
          <TimeCard day="Saturday" time={data.operating_hours.Saturday} />
          <TimeCard day="Sunday" time={data.operating_hours.Sunday} />
        </View>
      </View>
      <View style={Styles.reviewContainer}>
        <Text style={[Styles.subHeading, {marginBottom: 10}]}>Reviews</Text>
        <FlatList
          data={data.reviews}
          keyExtractor={item => item.name}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={Styles.seperator} />}
          renderItem={({item}) => (
            <ReviewCard
              key={item.name}
              name={item.name}
              rating={item.rating}
              date={item.date}
              review={item.comments}
            />
          )}
        />
      </View>
    </View>
  );
};

export default ContentView;
