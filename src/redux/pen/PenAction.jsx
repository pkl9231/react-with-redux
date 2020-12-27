import {BUY_PEN} from "./PenType";

export const buyPen = (number = 1)=>{
    return{
        type: BUY_PEN,
        payload : number
    }
}