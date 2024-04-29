//payload in action    NO.7


const { createStore } = require("redux");
//import { createStore } from "redux";



// defining constants
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";
const INCREMENT_BY_VALUE = "INCREMENT_BY_VALUE";



// state
const initialCounterState = {
  count: 0,
};



// action - Object- type, payload
const incrementCounter = () => {
  return {
    type: INCREMENT,
  };
};
const decrementCounter = () => {
  return {
    type: DECREMENT,
  };
};
const resetCounter = () => {
  return {
    type: RESET,
  };
};
const incrementCounterByValue = (value) => {
  return {
    type: INCREMENT_BY_VALUE,
    payload: value,
  };
};



//Create Reducer for counter
const counterReducer = (state = initialCounterState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case RESET:
      return {
        ...state,
        count: 0,
      };
    case INCREMENT_BY_VALUE:
      return {
        ...state,
        count: state.count+action.payload,
      };
  

    default:
      state;
  }
};



// create store
const store = createStore(counterReducer);
store.subscribe(() => {
  console.log(store.getState());
});



// dispatch action
// store.dispatch(incrementCounter());
// store.dispatch(incrementCounter());
// store.dispatch(decrementCounter());
// store.dispatch(resetCounter());
store.dispatch(incrementCounterByValue(5));