//payload in action    NO.7
//Count Added User

const { createStore } = require("redux");
//import { createStore } from "redux";



// defining constants
const ADD_USER="ADD_USER";



// state
const initialCounterState = {
  user:["Anish(Host)"],
  count: 1,
};



// action - Object- type, payload
const addUser = (user) => {
  return {
    type: ADD_USER,
    playload: user,
  };
};



//Create Reducer
const userReducer = (state = initialCounterState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {

        user:[...state.user,action.playload],
        count: state.count + 1,
      };

    default:
      state;
  }
};



// Create store
const store = createStore(userReducer);
store.subscribe(() => {
  console.log(store.getState());
});



// dispatch action
store.dispatch(addUser("Rohit"));
store.dispatch(addUser("Mohit"));