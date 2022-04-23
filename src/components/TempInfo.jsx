//jshint esversion: 8
import React from "react";
import { useSelector } from "react-redux";

function TempInfo() {
    const tempDetails = useSelector((store) => store.fetchReducer.data);

    return (
        <div className="">
            <div className="fs-1 py-2 text-center fw-bolder ls-1">{tempDetails.temp ? tempDetails.temp + "°" : ""}</div>
            <div className="fs-7 pt-1 text-center">{tempDetails.condition ? tempDetails.condition : ""}</div>
            <div className="fs-5 pb-1 color-light fw-bold city-name text-center">{tempDetails.name ? tempDetails.name : ""}</div>
        </div>
    );
}

export default TempInfo;
