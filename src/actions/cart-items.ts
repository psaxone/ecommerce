import api from "../lib/api";
import { ProductListType } from "../pages/home/types";

export const addCartItems = (cart: ProductListType) => {
  return (dispatch: any) => {
    return (
      dispatch({
        type: `ADD_ITEMS_TO_CART`,
        payload: cart,
      })
    )
  }
}
export const removeCartItems = (data: ProductListType) => {
  return (dispatch: any) => {
    return (
      dispatch({
        type: `REMOVE_ITEMS_FROM_CART`,
        payload: data,
      })
    )
  }
}
export const updateCartItems = (data: ProductListType) => {
  return (dispatch: any) => {
    return (
      dispatch({
        type: `UPDATE_CART_ITEMS`,
        payload: data,
      })
    )
  }
}