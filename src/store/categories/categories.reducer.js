import { CATEGORY_ACTION_TYPE } from "./categories.type"
export const INITIAL_STATE = {
    categoryArray : [],
}
export const categoriesReducer = (state = INITIAL_STATE , action) => {
    const {payload, type} = action;
    console.log("received event", type, payload);
    switch(type){
        case CATEGORY_ACTION_TYPE.SET_CATEGORY_ARRAY:
            return {...state, categoryArray: payload};
        default:
            return state;
    }
}