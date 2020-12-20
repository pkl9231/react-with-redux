import React, {useState} from 'react';
import { connect } from "react-redux";
import { buyBook } from "../redux/Index";

const BookContainer = (props) => {
    const [number, setNumber] = useState(1)
    const onChangeEvent = (value)=>{
        setNumber(value.target.value)
    }
    return (
        <>
            <h1>Number of Books - {props.numberOfBooks}</h1>
            <input type="text" value={number} onChange={onChangeEvent}/>
            <button onClick={()=>props.buyBook(number)}>Buy {number} Book</button>
        </>
    )
}

const mapStatetoProps = (state) => {
    return {
        numberOfBooks: state.numberOfBooks
    }
}

const mapDispatchtoProps = (dispatch) => {
    return {
        buyBook: function (number) {
            dispatch(buyBook(number));
        }
    }
}
export default connect(mapStatetoProps, mapDispatchtoProps)(BookContainer);
