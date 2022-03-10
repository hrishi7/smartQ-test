import { combineReducers } from "redux";
import category from "./category/category-reducer";
import foodItem from "./foodItem/food-item-reducer";
import cart from "./cart/cart-reducer";

const appReducer = combineReducers({
  category,
  foodItem,
  cart,
});

const rootReducer = (state, action) => {
  if (action.type === "UNSET_USER") {
    return appReducer(undefined, action);
  }

  return appReducer(state, action);
};

export default rootReducer;
