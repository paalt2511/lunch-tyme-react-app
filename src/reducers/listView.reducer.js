const initialState = { items: [], loading: false };

export default function listViewReducer(state = initialState, action) {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        items: [],
        loading: true
      };
    case "LOADED_DATA":
      return {
        ...state,
        items: action.items,
        loading: false
      };
    default:
      return state;
  }
}
