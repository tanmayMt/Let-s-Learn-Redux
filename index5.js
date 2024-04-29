const { createStore } = require("redux");
//Add & get Products



// defining constants
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCTS = "ADD_PRODUCTS";



// state
const initialProductState = {
  products: ["sugar", "salt"],
  numberOfProducts: 2,
};



// action 
const getProductAction = () => {
  return {
    type: GET_PRODUCTS,
  };
};
const addProductAction = (product) => {
  return {
    type: ADD_PRODUCTS,
    payload: product,
  };
};



//Create Reducer
const productsReducer = (state = initialProductState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
      };
    case ADD_PRODUCTS:
      return {
        products: [...state.products, action.payload],
        numberOfProducts: state.numberOfProducts + 1,
      };

    default:
      return state;
  }
};



// Create store
const store = createStore(productsReducer);
store.subscribe(() => {
  console.log(store.getState());
});



// dispatch action
store.dispatch(getProductAction());
store.dispatch(addProductAction("pen"));
store.dispatch(addProductAction("pencil"));