import { initialState } from ".";
import { SET_SELECTED_ICON } from ".";

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_ICON:
      return {
        ...state,
        iconSelected: action.payload,
      };
    default:
      return state;
  }
};
