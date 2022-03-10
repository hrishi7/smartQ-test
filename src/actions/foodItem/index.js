import { SET_ALL_FOOD_ITEMS } from "../../constants/foodItems";

import UNIVERSAL from "../../config/config";
import data from "../../data";

export const getAllFoodItems = (category) => {
  return (dispatch) => {
    return fetch(UNIVERSAL.BASEURL, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        let foodItems = data.menu.filter((item) => item.category == category);
        dispatch({
          type: SET_ALL_FOOD_ITEMS,
          payload: {
            response: foodItems,
            total: foodItems.length,
          },
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
};
