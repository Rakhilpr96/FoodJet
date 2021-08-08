import {combineReducers} from 'redux';
import restaurantReducer from './restaurantReducer';
import restaurantDetailReducer from './restaurantDetailReducer';

const allReducers = combineReducers({
  restaurantReducer,
  restaurantDetailReducer,
});

export default allReducers;
