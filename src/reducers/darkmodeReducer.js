//jshint esversion: 8

const darkmodeReducer = (darkMode = false, action) => {
    switch (action.type) {
        case "CHANGE_COLOR_MODE":
            return !darkMode;
        default:
            return darkMode;
    }
};

export default darkmodeReducer;
