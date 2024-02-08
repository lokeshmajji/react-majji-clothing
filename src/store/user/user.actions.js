import { createAction } from "../../utils/redux/redux.util";
import { USER_STATE_ACTIONS } from "./user.types";

export const setCurrentUser = (user) => {
  return createAction(USER_STATE_ACTIONS.SET_CURRENT_USER, user);
};
