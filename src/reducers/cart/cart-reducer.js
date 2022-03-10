import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
  PLACE_ORDER,
} from "../../constants/cart";

const initialState = {
  eventDetails: {
    name: "",
    contactNo: "",
    eventName: "",
    eventLocation: "",
    eventDate: "",
    deliveryMode: "",
  },
  paymentMode: "",
  items: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      let prevItems1 = [...state.items];
      prevItems1.push(action.payload);
      return (state = {
        ...state,
        items: prevItems1,
      });
    case REMOVE_FROM_CART:
      let prevItems2 = state.items.filter(
        (item) => item.foodid != action.payload
      );
      return (state = {
        ...state,
        items: prevItems2,
      });
    case CLEAR_CART:
      return (state = {
        ...state,
        items: [],
      });
    case PLACE_ORDER:
      return (state = {
        ...state,
        eventDetails: action.payload.eventDetails,
        paymentMode: action.payload.paymentMode,
        items: action.payload.items,
      });
    default:
      return state;
  }
}
