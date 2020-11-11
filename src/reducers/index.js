import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADD_QUANTITY,
  MINUS_QUANTITY,
  UPDATE_QUANTITY,
} from "../constants/index";

const initialState = {
  total_products: 0,
  products: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        total_products: state.total_products + 1,
        products: state.products.concat(action.payload),
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        products: state.products.filter((item) => action.payload !== item.id),
        total_products: state.products.length - 1,
      };
    case ADD_QUANTITY:
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload
            ? { ...product, quantity: Number(product.quantity ) + 1, price: Number(product.unitPrice) * Number(product.quantity) + Number(product.unitPrice)  }
            : product
        ),
      };
    case MINUS_QUANTITY:
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload
            ? { ...product, quantity: Number(product.quantity ) - 1, price: Number(product.price) - Number(product.unitPrice) }
            : product
        ),
      };
    case UPDATE_QUANTITY:
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload.id
            ? { ...product, quantity: action.payload.value, price: Number(product.unitPrice) * Number(action.payload.value) }
            : product
        ),
      };
    default:
      return state;
  }
}
export default rootReducer;
