import { createContext, useContext, useReducer } from "react";
import faker from "faker";
import { cartReducer, productReducer } from "./Reducers";

const Cart = createContext();
faker.seed(99);

const Context = ({ children }) => {
  const products = (localStorage.getItem('products')  )?JSON.parse(localStorage.getItem('products')):"[]"

  const [state, dispatch] = useReducer(cartReducer, {
    products: (localStorage.getItem('products')  )?JSON.parse(localStorage.getItem('products')):[],
    cart: [],
    category:(localStorage.getItem('category') )?JSON.parse(localStorage.getItem('category')):[]
  });

  const [productState, productDispatch] = useReducer(productReducer, {
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: "",
  });

  console.log(productState);

  return (
    <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
      {children}
    </Cart.Provider>
  );
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;
