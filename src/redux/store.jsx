import { createStore, applyMiddleware, combineReducers } from "redux"; // here "applyMiddleware" used for logger and nothing else
import BookReducer from "./book/BookReducer__3";
import PenReducer from "./pen/PenReducer";
import logger from "redux-logger";

// here i combine multiple reducers
const Combinereducers = combineReducers({
  BookReducer,
  PenReducer
});

const Store = createStore(Combinereducers, applyMiddleware(logger));

export default Store;

/*work flow
1. Create action type
2. Create action creater function
3. Create Reducer
4. Create store (in store i pass reducers, ex-> const Store = createStore(BookReducer)) -> Create store is library which is imported from redux */
