//jshint esversion: 9
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { darkmodeAction } from "./../actions";

function DarkModeSwitch() {
    const dispatch = useDispatch();
    const darkMode = useSelector((state) => state.darkmodeReducer);

    return (
        <div className="d-flex justify-content-end">
            <button
                onClick={() => {
                    dispatch(darkmodeAction());
                }}
                className="btn btn-outline-secondary color-text"
            >
                {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
        </div>
    );
}

export default DarkModeSwitch;
