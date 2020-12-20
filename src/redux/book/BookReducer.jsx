import { BUY_BOOK } from "./BookType";
const initalState = {
    numberOfBooks: 10
}

const BookReducer = (state = initalState, action) => {
    switch (action.type) {
        case BUY_BOOK:
            return {
                ...state,
                numberOfBooks: state.numberOfBooks - 1
            }
        default : return state
    }
}

export default BookReducer;