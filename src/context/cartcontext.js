import { createContext, useContext, useReducer } from "react";
import data from "./../utils/data.json";
import { cartReducer } from "./cartreducer";

const CartContext = createContext();

function CartContextProvider({ children }) {
  const cartList = [...data.products];
  const [state, dispatch] = useReducer(cartReducer, { cartList });
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;

export const CartState = ()=>{
    return useContext(CartContext)
}