import api from "../lib/api";

export const getProductList = () => {
  return (dispatch: any) => {
    dispatch({ type: `GET_PRODUCT_LIST_REQUEST` })
    
    return api
      .get('shoes/men-shoes' )
      .then((response) => {
        dispatch({
          type: `GET_PRODUCT_LIST_SUCCESS`,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: `GET_PRODUCT_LIST_FAILURE`,
          payload: error.response.data,
        })
      })
  }
}