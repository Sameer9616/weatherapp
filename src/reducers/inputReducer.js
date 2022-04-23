//jshint esversion: 9

const init = {
    input: "",
};

const inputReducer = (initState = init, action) => {
    switch (action.type) {
        case "UPDATE_INPUT_DATA":
            return {
                ...initState,
                input: action.payload,
            };

        default:
            return initState;
    }
};

export default inputReducer;
