import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import colors from '../theme/colors';

const SafeArea = ({children}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar
        animated={true}
        backgroundColor={colors.screenBackground}
        hidden={false}
        barStyle="dark-content"
      />
      {children}
    </SafeAreaView>
  );
};

export default SafeArea;
