import React from 'react';
import { connect } from "react-redux";
import { buyBook } from "../redux/Index";

const BookContainer = (props) => {
    return (
        <>
            <h1>Number of Books - {props.numberOfBooks}</h1>
            <button onClick={props.buyBook}>Buy Book</button>
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
        buyBook: function () {
            dispatch(buyBook());
        }
    }
}
export default connect(mapStatetoProps, mapDispatchtoProps)(BookContainer);
