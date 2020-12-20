import {createStore, applyMiddleware} from "redux"
import BookReducer from "./book/BookReducer";
import logger from "redux-logger";

const Store = createStore(BookReducer,applyMiddleware(logger));

export default Store;