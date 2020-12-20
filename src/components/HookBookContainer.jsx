import React from 'react';
import { buyBook } from "../redux/Index";
import { useSelector, useDispatch } from "react-redux"; // using this we can extract data from Redux store
const BookContainer = (props) => {
    const numberOfBooks = useSelector(state => state.numberOfBooks);
    const dispatch = useDispatch()

    return (
        <>
            <h1>Hook container</h1>
            <h1>Number of Books - {numberOfBooks}</h1>
            <button onClick={()=>dispatch(buyBook())}>Buy Book</button>
        </>
    )
}

export default BookContainer;