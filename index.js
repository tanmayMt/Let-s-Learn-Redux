const { createStore } = require("redux");

// defining constants
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const ADD_USER = "ADD_USER";

// state
const initialCounterState = { count: 0};
const initialState2 = { users: [{ name: "anisul islam" }] };

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

// const addUser = () => {
//     return {
//       type: ADD_USER,
//       payload:{name:'Sakil'}
//     };
//   };


//Create Reducer for counter
const counterReducer = (state = initialState, action) => {
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
  
      default:
        return state;
    }
  };