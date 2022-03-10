import { SET_ALL_CATEGORY } from "../../constants/category";

import UNIVERSAL from "../../config/config";

export const getAllCategories = () => {
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
          type: SET_ALL_CATEGORY,
          payload: {
            response: [
              {
                categoryName: "Pizza",
                bannerImage:
                  "https://storage.googleapis.com/smartqprdnz_pub/im/ci/compassevents/vector-italian-pizza-horizontal-banners.jpg",
                icon: "https://storage.googleapis.com/smartqprdnz_pub/im/ci/compassevents/pizza_1.png",
              },
              {
                categoryName: "Consumables",

                bannerImage:
                  "https://storage.googleapis.com/smartqprdnz_pub/im/ci/compassevents/6.jpg",
                icon: "https://storage.googleapis.com/smartqprdnz_pub/im/ci/compassevents/restaurant-cutlery.png",
              },
              {
                categoryName: "Decorations",
                bannerImage:
                  "https://storage.googleapis.com/smartqprdnz_pub/im/ci/compassevents/free_banner_ads_corel_format.jpg",
                icon: "https://storage.googleapis.com/smartqprdnz_pub/im/ci/compassevents/corporate-event.png",
              },
            ],
            total: 3,
          },
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
};
