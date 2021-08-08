import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../../../theme/colors';
import ContentView from './contentView';
import {useSelector} from 'react-redux';
import Styles from './style';

const DetailScreen = ({navigation}) => {
  const data = useSelector(state => state.restaurantDetailReducer);

  return (
    <View style={Styles.container}>
      <View style={Styles.headerConatiner}>
        <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
          <View style={Styles.backIconContainer}>
            <MaterialIcons
              style={Styles.backIcon}
              name="arrow-back-ios"
              size={30}
              color={colors.white}
            />
          </View>
        </TouchableWithoutFeedback>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true}>
        <View style={Styles.imageContainer}>
          <Image style={Styles.imageStyle} source={data.photograph} />
        </View>
        <ContentView data={data} />
      </ScrollView>
    </View>
  );
};

export default DetailScreen;
