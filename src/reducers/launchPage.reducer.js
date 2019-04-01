const initialState = { selectedRestaurant: null };

export default function lunchPageReducer(state = initialState, action) {
  switch (action.type) {
    case "SELECT_RESTAURANT":
      return { ...state, selectedRestaurant: action.item };
    case "REMOVE_RESTAURANT":
      return { ...state, selectedRestaurant: null };
    default:
      return state;
  }
}
