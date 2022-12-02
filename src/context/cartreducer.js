import { QUANTITY_UPDATE, DELETE_PRODUCT } from "../pages/constants";

export function cartReducer(state, action) {
  const { cartList } = state;
  let list;
  switch (action.type) {
    case QUANTITY_UPDATE:
      list = cartList.map((product) => {
        if (product.id === action.payload.id) {
          product.quantity = action.payload.quantity;
        }
        return product;
      });
      return { ...state, cartList: list };

    case DELETE_PRODUCT:
      list = cartList.filter((product) => product.id !== action.payload.id);
      return { ...state, cartList: list };

    default:
      return state;
  }
}
