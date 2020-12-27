//3.  reducer file
import { BUY_BOOK } from "./BookType__1";

const initalState = {
    numberOfBooks: 20
}

const BookReducer = (state = initalState, action) => { // it's takes two arguement (state, action)
    switch (action.type) {
        case BUY_BOOK:
            return {
                ...state,
                numberOfBooks: state.numberOfBooks - action.payload // getting value from BookAction file using buybook function from payload
            }
        default : return state
    }
}

export default BookReducer;


/*work flow
1. Create action type
2. Create action creater function
3. Create Reducer
4. Create store (in store i pass reducers, ex-> const Store = createStore(BookReducer)) -> Create store is library which is imported from redux */
