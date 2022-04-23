//jshint esversion: 9

const init = {
    data: {},
    isLoading: false,
    error: null,
};

const fetchReducer = (initState = init, action) => {
    switch (action.type) {
        case "START_DATA_FETCH":
            return {
                ...initState,
                isLoading: true,
                error: null,
            };

        case "DATA_FETCH_COMPLETE":
            return {
                ...initState,
                isLoading: false,
                data: action.payload,
            };

        case "DATA_FETCH_FAIL":
            return {
                ...initState,
                isLoading: false,
                data: {},
                error: action.error,
            };

        default:
            return initState;
    }
};

export default fetchReducer;
