// 2. action creater file
import { BUY_BOOK } from "./BookType__1";

export const buyBook = (number = 1) => {
    return {
        type: BUY_BOOK,
        payload : number 
    }
}