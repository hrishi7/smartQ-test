import { SET_ALL_FOOD_ITEMS, LIMIT } from "../../constants/foodItems";

const initialState = {
  allFoodItems: [],
  startAfter: 0,
  limit: LIMIT,
  total: 0,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_ALL_FOOD_ITEMS:
      return (state = {
        ...state,
        allFoodItems: action.payload.response,
        total: action.payload.total,
      });
    default:
      return state;
  }
}
