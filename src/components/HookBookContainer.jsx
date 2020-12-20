import React, { useState } from 'react';
import { buyBook } from "../redux/Index";
import { useSelector, useDispatch } from "react-redux"; // using this we can extract data from Redux store
const BookContainer = (props) => {
    const numberOfBooks = useSelector(state => state.numberOfBooks);
    const dispatch = useDispatch()
    const [number, setNumber] = useState(1);
    const onChangeEvent = (OnChangevalue) => {
        setNumber(OnChangevalue.target.value)
    }
    return (
        <>
            <h1>Hook container</h1>
            <h1>Number of Books - {numberOfBooks}</h1>
            <input type="text" value={number} onChange={onChangeEvent} />
            <button onClick={() => dispatch(buyBook(number))}>Buy {number} Book</button>
        </>
    )
}

export default BookContainer;