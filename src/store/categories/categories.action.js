// import { getCollectionAndDocuments } from "../../utils/firebase/firebase.util";
import { createAction } from "../../utils/redux/redux.util"
import { CATEGORY_ACTION_TYPE } from "./categories.type"

// export const setCategories = (categoryArray) => {
//    return createAction(CATEGORY_ACTION_TYPE.SET_CATEGORY_ARRAY, categoryArray);
// }

export const fetchCategoryArrayStart = () => {
   return createAction(CATEGORY_ACTION_TYPE.FETCH_CATEGORY_ARRAY_START);
}

export const fetchCategoryArrayFailed = (error) => {
   return createAction(CATEGORY_ACTION_TYPE.FETCH_CATEGORY_ARRAY_FAILED, error);
}

export const fetchCategoryArraySuccess = (categoryArray) => {
   return createAction(CATEGORY_ACTION_TYPE.FETCH_CATEGORY_ARRAY_SUCCESS, categoryArray);
}

// create a Thunk
// export const fetchCategoriesAsync = () => async (dispatch) => {
//    dispatch(fetchCategoryArrayStart());
//    try {
//       console.log("fetching categories from thunk")
//       const categoriesArray = await getCollectionAndDocuments();
//       dispatch(fetchCategoryArraySuccess(categoriesArray))
//    } catch(error) {
//       dispatch(fetchCategoryArrayFailed(error))
//    }
// }