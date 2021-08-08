import data from '../../appData/restaurants';

const initialState = {};

const restaurantDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GETDATA':
      const detailData = data.filter(item => item.id === action.payload);
      return detailData[0];
    default:
      return state;
  }
};

export default restaurantDetailReducer;
