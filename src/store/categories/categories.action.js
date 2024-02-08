import { createAction } from "../../utils/redux/redux.util"
import { CATEGORY_ACTION_TYPE } from "./categories.type"

export const setCategories = (categoryArray) => {
   return createAction(CATEGORY_ACTION_TYPE.SET_CATEGORY_ARRAY, categoryArray);
}