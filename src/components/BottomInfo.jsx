//jshint esversion: 8
import React from "react";
import { useSelector } from "react-redux";

function BottomInfo() {
    const tempDetails = useSelector((state) => state.fetchReducer.data);

    return (
        <div className="row mx-5 my-4">
            <div className="col">
                <div>
                    <div className="fs-7 text-center">Wind Now</div>
                    <div className="fs-4 text-center fw-bold">
                        {tempDetails.icon ? tempDetails.wind : ""}
                        <span className="text-small">KM</span>
                    </div>
                </div>
            </div>
            <div className="col">
                <div>
                    <div className="fs-7 text-center">Humidity</div>
                    <div className="fs-4 text-center fw-bold">
                        {tempDetails.icon ? tempDetails.humidity : ""}
                        <span className="text-small">%</span>
                    </div>
                </div>
            </div>
            <div className="col">
                <div>
                    <div className="fs-7 text-center">Precipitation</div>
                    <div className="fs-4 text-center fw-bold">
                        {tempDetails.icon ? tempDetails.precipitation : ""}
                        <span className="text-small">%</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BottomInfo;
