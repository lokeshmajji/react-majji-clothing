import { createSelector } from "reselect";

export const categoryReducerSelector = (state) => {
    console.log("selector 1: categories from root reducer")
    return state.categories;
};

export const categoryArraySelector = createSelector(
    [categoryReducerSelector],
    (categoriesSlice) => {
        console.log("selector 2: i don't know why we are doing this")
        return categoriesSlice.categoryArray
    }
)

export const categoryMapSelector = createSelector(
    [categoryArraySelector],
    (categoryArray) => {
        console.log("selector 3: do a final reduce");
        return categoryArray.reduce((acc, document) => {
          const { title, items } = document;
          acc[title.toLowerCase()] = items;
          return acc;
        }, {});
      }
)

export const categoryIsLoadingSelector = createSelector(
    [categoryReducerSelector],
    (categoriesSlice) => categoriesSlice.isLoading
)


