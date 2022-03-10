import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
  PLACE_ORDER,
} from "../../constants/cart";

import UNIVERSAL from "../../config/config";

export const addToCart = (payload) => {
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
        dispatch({
          type: ADD_TO_CART,
          payload: payload,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

export const removeFromCart = (foodid) => {
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
        dispatch({
          type: REMOVE_FROM_CART,
          payload: foodid,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

export const clearCart = () => {
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
        dispatch({
          type: CLEAR_CART,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

export const placeOrder = (eventDetails, paymentMode, items, cb) => {
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
        dispatch({
          type: PLACE_ORDER,
          payload: { eventDetails, paymentMode, items },
        });
        cb();
      })
      .catch((error) => {
        console.error(error);
      });
  };
};
