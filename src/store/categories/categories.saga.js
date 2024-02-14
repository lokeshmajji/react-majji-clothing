import { takeLatest, all, call, put } from "redux-saga/effects";
import { getCollectionAndDocuments } from "../../utils/firebase/firebase.util";
import {
  fetchCategoryArrayFailed,
  fetchCategoryArraySuccess,
} from "./categories.action";
import { CATEGORY_ACTION_TYPE } from "./categories.type";

// export const fetchCategoriesAsync = () => async (dispatch) => {
//   dispatch(fetchCategoryArrayStart());
//   try {
//     console.log("fetching categories from thunk");
//     const categoriesArray = await getCollectionAndDocuments();
//     dispatch(fetchCategoryArraySuccess(categoriesArray));
//   } catch (error) {
//     dispatch(fetchCategoryArrayFailed(error));
//   }
// };

export function* fetchCategoriesAsync() {
  try {
    const categoriesArray = yield call(getCollectionAndDocuments, "categories");
    yield put(fetchCategoryArraySuccess(categoriesArray));
  } catch (error) {
    yield put(fetchCategoryArrayFailed(error));
  }
}

export function* onFetchCategories() {
  yield takeLatest(CATEGORY_ACTION_TYPE.FETCH_CATEGORY_ARRAY_START, fetchCategoriesAsync);
}
export function* categoriesSaga() {
  yield all([call(onFetchCategories)]);
}
