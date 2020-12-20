import {createStore} from "redux"
import BookReducer from "./book/BookReducer";

const Store = createStore(BookReducer);

export default Store;