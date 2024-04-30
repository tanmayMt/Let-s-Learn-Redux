//9 : fetch data using redux-thunk
// API Calling - async actions using redux-thunk

// async actions - api calling
// api url - https://jsonplaceholder.typicode.com/todos
// middleware- redux-thunk       
// axios api

//     Install 
//npm install redux-thunk



import { default as axios } from "axios";
//import { default as axios } from "axios";
import { createStore, applyMiddleware } from "redux";
//import { createStore, applyMiddleware } from 'redux';
//import {reduxThunk} from "redux-thunk";
//import reduxThunk from 'redux-thunk'
//import { default as reduxThunk} from "redux-thunk";
//import thunk from 'redux-thunk';
import { thunk } from 'redux-thunk';




// define constants
const GET_TODOS_REQUEST = "GET_TODOS_REQUEST";
const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS";
const GET_TODOS_FAILED = "GET_TODOS_FAILED";
const TODOS_URL = "https://jsonplaceholder.typicode.com/todos";



// define state
const initialTodosState = {
  todos: [],
  isLoading: false,
  error: null,
};



//Action
const getTodosRequest = () => {
  return {
    type: GET_TODOS_REQUEST,
  };
};
const getTodosSuccess = (todos) => {
  return {
    type: GET_TODOS_SUCCESS,
    payload: todos,
  };
};
const getTodosFailed = (error) => {
  return {
    type: GET_TODOS_FAILED,
    payload: error,
  };
};



//Create Reducer
const todosReducer = (state = initialTodosState, action) => {
  switch (action.type) {
    case GET_TODOS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_TODOS_SUCCESS:
      return {
        ...state,
        todos: action.payload,
        isLoading: false,
      };
    case GET_TODOS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      state;
  }
};

// async action creator
// thunk-middleware allows us to return a function isntead of obejct
const fetchData = () => {
  return (dispatch) => {
    dispatch(getTodosRequest());
    axios
      .get(TODOS_URL)
      .then((res) => {
        const todos = res.data;
        // console.log(todos);
        const titles = todos.map((todo) => todo.title);
        console.log(titles);
        //dispatch(getTodosSuccess(titles));
      })
      .catch((err) => {
        const error = err.message;
        console.log(error);
        //dispatch(getTodosFailed(error));
      });
  };
};

const store = createStore(todosReducer, applyMiddleware(thunk));

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(fetchData());