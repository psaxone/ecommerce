const initialState = {
  data: [],
  loading: false,
  error: null,
}
const reducer = (state = initialState, action: any) => {
  switch (action.type) {
      case "ADD_ITEMS_TO_CART":
        return {
          ...state,
          error: null,
          loading: false,
          data: state.data.concat(action.payload)
        };
      case "REMOVE_ITEMS_FROM_CART":
        return {
          ...state,
          error: null,
          loading: false,
          data: [...state.data, action.payload]
        };
      case "UPDATE_CART_ITEMS":
        return {
          ...state,
          error: null,
          loading: false,
          data: [...state.data, action.payload]
        };
    default:
      return state;
  }
}
export default reducer;