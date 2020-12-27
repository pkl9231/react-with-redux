// used hook in redux
import React, { useState } from "react";
import { buyBook } from "../redux/Index";
import { useSelector, useDispatch } from "react-redux"; // using this we can extract data from Redux store
const BookContainer = () => {
  // here i get value of number of books using selector by Provider (from App.js)
  const numberOfBooks = useSelector((state) => state.BookReducer.numberOfBooks);
  // using this i can dispatch
  const dispatch = useDispatch();
  const [number, setNumber] = useState(1);
  // here i dispatch buybook value
  let Onbyubook = () => {
    dispatch(buyBook(number));
  };
  const onChangeEvent = (OnChangevalue) => {
    setNumber(OnChangevalue.target.value);
  };
  return (
    <>
      <h1>Hook container</h1>
      <h1>Number of Books - {numberOfBooks}</h1>
      <input type="text" value={number} onChange={onChangeEvent} />
      <button onClick={Onbyubook}> Buy {number} Book</button>
    </>
  );
};

export default BookContainer;
