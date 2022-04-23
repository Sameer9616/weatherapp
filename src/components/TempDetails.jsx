//jshint esversion: 8
import React from "react";
import BottomInfo from "./BottomInfo";
import TempInfo from "./TempInfo";
import { useSelector } from "react-redux";

function TempDetails() {
    const tempData = useSelector((store) => store.fetchReducer.data);
    const loading = useSelector((store) => store.fetchReducer.isLoading);

    const showContent = () => {
        return (
            <div>
                {loading ? (
                    <div className="fs-1 fw-bolder text-center color-text">loading...</div>
                ) : (
                    <div className="temp-details-container rounded-3 py-5 bg-sub-back color-text">
                        <div className="image d-flex justify-content-center">
                            <img src={tempData.icon} alt="temp-desc" />
                        </div>
                        <div className="main-content">
                            <TempInfo />
                        </div>
                        <div className="bottom-strip">
                            <BottomInfo />
                        </div>
                    </div>
                )}
            </div>
        );
    };

    return (
        <React.Fragment>
            {tempData.icon ? showContent() : <div className="fs-1 fw-bolder text-center color-text">No City Found</div>}
        </React.Fragment>
    );
}

export default TempDetails;
