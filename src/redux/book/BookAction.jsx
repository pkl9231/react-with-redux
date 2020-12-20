import { BUY_BOOK } from "./BookType";

export const buyBook = (number = 1) => {
    console.log("dynamic number",number)
    return {
        type: BUY_BOOK,
        payload : number
    }
}