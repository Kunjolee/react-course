import {
  ADD_TO_CART,
  CLEAR_CART,
  REMOVE_ALL_FROM_CART,
  REMOVE_ONE_FROM_CART,
} from "../type";

const initialState = {
  products: [
    { id: 1, name: "Producto 1", price: 100 },
    { id: 2, name: "Producto 2", price: 200 },
    { id: 3, name: "Producto 3", price: 300 },
    { id: 4, name: "Producto 4", price: 400 },
    { id: 5, name: "Producto 5", price: 500 },
    { id: 6, name: "Producto 6", price: 600 },
  ],
  cart: [],
};

const shoppingReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case ADD_TO_CART:
      const newItem = state.products.find((el) => el.id === actions.payload);
      const existInCart = state.cart.find((el) => el.id === actions.payload);

      return existInCart
        ? {
            ...state,
            cart: state.cart.map((el) => {
              if (el.id === existInCart.id) el.quantity++;
              return el;
            }),
          }
        : { ...state, cart: [...state.cart, { ...newItem, quantity: 1 }] };

    case REMOVE_ONE_FROM_CART:
      const inCart = state.cart.find((el) => el.id === actions.payload);

      return inCart.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((el) => {
              if (el.id === inCart.id) el.quantity--;
              return el;
            }),
          }
        : {
            ...state,
            cart: state.cart.filter((el) => el.id !== actions.payload),
          };

    case REMOVE_ALL_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((el) => el.id !== actions.payload),
      };

    case CLEAR_CART:
      return initialState;
    default:
      return state;
  }
};

export default shoppingReducer;
