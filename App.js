import React, {useEffect} from 'react';
import SafeArea from './src/components/safeArea';
import MainNavigation from './src/navigation/mainNavigation';
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import allReducers from './src/store/reducers';

const store = createStore(allReducers);

const App = () => {
  useEffect(() => SplashScreen.hide());

  return (
    <Provider store={store}>
      <SafeArea>
        <MainNavigation />
      </SafeArea>
    </Provider>
  );
};

export default App;
