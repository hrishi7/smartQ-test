import { SET_ALL_CATEGORY, LIMIT } from "../../constants/category";

const initialState = {
  allCategories: [],
  startAfter: 0,
  limit: LIMIT,
  total: 0,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_ALL_CATEGORY:
      return (state = {
        ...state,
        allCategories: action.payload.response,
        total: action.payload.total,
      });
    default:
      return state;
  }
}
