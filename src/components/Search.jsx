//jshint esversion: 8
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { inputAction, fetchAction } from "./../actions";

function Search() {
    const dispatch = useDispatch();
    const input = useSelector((store) => store.inputReducer.input);

    const handleChange = (event) => {
        dispatch(inputAction(event.target.value));
    };

    const handleSubmit = () => {
        dispatch(fetchAction(input));
    };

    return (
        <div className="d-flex justify-content-around py-5">
            <input
                onChange={handleChange}
                className="form-control me-3 fs-6 px-3"
                name="name"
                placeholder="City Name"
                type="text"
                value={input}
            />
            <button onClick={handleSubmit} className="btn btn-primary px-4 py-2 fs-6 ms-2">
                Search
            </button>
        </div>
    );
}

export default Search;
