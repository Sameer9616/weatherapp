//jshint esversion: 8
import "./App.css";
import Search from "./components/Search";
import TempDetails from "./components/TempDetails";
import DarkModeSwitch from "./components/DarkModeSwitch";
import { useSelector } from "react-redux";

function App() {
    const darkMode = useSelector((store) => store.darkmodeReducer);

    return (
        <div className={darkMode ? "App bg-secondary dark-theme" : "App bg-secondary light-theme"}>
            <div className="container my-5">
                <DarkModeSwitch />
                <div className="row w-75 m-auto">
                    <div className="offset-1 offset-md-2 offset-lg-3 col-10 col-md-8 col-lg-6">
                        <Search />
                        <TempDetails />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
