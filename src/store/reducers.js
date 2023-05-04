export const mainReducer = (state, action) => {
  switch (action.type) {
    case "SELECTED_ICON":
      return {
        ...state,
        iconSelected: action.payload,
      };
    default:
      return state;
  }
};
