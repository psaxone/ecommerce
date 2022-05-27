const initialState = {
  data: [],
  loading: false,
  error: null,
}

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "GET_PRODUCT_LIST_REQUEST":
      return { ...state, loading: true };
      case "GET_PRODUCT_LIST_SUCCESS":
        return {
          ...state,
          error: null,
          loading: false,
          data: [action.payload],
        };
    case "GET_PRODUCT_LIST_FAILURE":
      return {
        ...initialState,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
export default reducer;