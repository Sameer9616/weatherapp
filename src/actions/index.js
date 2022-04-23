//jshint esversion: 10
export const fetchAction = (location) => (dispatch, getState) => {
    const mainLink = "http://api.weatherapi.com/v1/current.json?key=";
    const appID = "ea7267590939416dbc3100528211708";
    const url = mainLink + appID + "&q=" + location;

    dispatch({
        type: "START_DATA_FETCH",
    });

    fetch(url)
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
            throw Error("Not able to Fetch data");
        })
        .then((data) => {
            dispatch({
                type: "DATA_FETCH_COMPLETE",
                payload: {
                    name: data.location.name,
                    condition: data.current.condition.text,
                    icon: data.current.condition.icon,
                    temp: data.current.temp_c,
                    wind: data.current.wind_kph,
                    humidity: data.current.humidity,
                    precipitation: data.current.precip_mm,
                },
            });
        })
        .catch((error) => {
            console.log(error);
            dispatch({
                type: "DATA_FETCH_FAIL",
                error,
            });
        });
};

export const inputAction = (data) => {
    return {
        type: "UPDATE_INPUT_DATA",
        payload: data,
    };
};

export const darkmodeAction = () => {
    return {
        type: "CHANGE_COLOR_MODE",
    };
};
