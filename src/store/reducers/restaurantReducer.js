import data from '../../appData/restaurants';

const initialState = {
  restaurantList: data,
};

const restaurantReducer = (state = initialState) => {
  return state;
};

export default restaurantReducer;
