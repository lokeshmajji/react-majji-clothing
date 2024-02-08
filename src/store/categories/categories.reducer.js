import { CATEGORY_ACTION_TYPE } from "./categories.type";
export const INITIAL_STATE = {
  categoryArray: [],
  isLoading: false,
  error: null,
};
export const categoriesReducer = (state = INITIAL_STATE, action) => {
  const { payload, type } = action;
  switch (type) {
    case CATEGORY_ACTION_TYPE.FETCH_CATEGORY_ARRAY_START:
      return { ...state, isLoading: true };
    case CATEGORY_ACTION_TYPE.FETCH_CATEGORY_ARRAY_SUCCESS:
      return { ...state, categoryArray: payload, isLoading: false };
    case CATEGORY_ACTION_TYPE.FETCH_CATEGORY_ARRAY_FAILED:
      return { ...state, error: payload, isLoading: false };
    default:
      return state;
  }
};
