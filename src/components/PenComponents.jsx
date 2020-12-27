import React, {useState} from "react";
import { buyPen } from "../redux/Index";
import { useSelector, useDispatch } from "react-redux"; // using this we can extract data from Redux store

const PenContainer = () => {
  const numberofPens = useSelector((state) => {
    return state.PenReducer.numberOfPens;
  });

  // using this i can dispatch
  const dispatch = useDispatch();

  const [number, setNumber] = useState(1);

  // here i dispatch buybook value
  let OnBuyClick = () => {
    dispatch(buyPen(number));
  };

  const onChangeEvent = (OnChangevalue) => {
    setNumber(OnChangevalue.target.value);
  };

  return (
    <>
      <h1>Hook container</h1>
      <h1>Number of Pen - {numberofPens}</h1>
      <input type="text" value={number} onChange={onChangeEvent} />
      <button onClick={OnBuyClick}> Buy {number} Book</button>
    </>
  );
};

export default PenContainer;
