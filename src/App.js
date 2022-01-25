import React from 'react';
import {Outlet, Link} from "react-router-dom";
import Header from "./components/Header"
import Icons from "./components/Icons"
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';
import BakeryDiningIcon from '@mui/icons-material/BakeryDining';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import MenuIcon from '@mui/icons-material/Menu';
import './App.css';

const App = () => {
    return (
        <div>
            <div className="mainContainer">

                <div className="headerWrapper">
                    <Header/>
                    <nav className="headerMenu">
                        <Link to="/Places" className="headerMenu__home">HOME</Link> | {" "}
                        <Link to="/Places/coffee"><FreeBreakfastIcon sx={{fontSize: 40}}
                                                                     style={{fill: "black"}}/></Link> | {" "}
                        <Link to="/Places/breakfast"><BakeryDiningIcon sx={{fontSize: 50}}
                                                                       style={{fill: "black"}}/></Link> | {" "}
                        <Link to="/Places/food"><DinnerDiningIcon sx={{fontSize: 40}} style={{fill: "black"}}/></Link>
                    </nav>
                </div>

                <div className="mapWrapper">
                    <div className="mapContainer">
                        <Icons/>
                    </div>
                </div>

                <div className="placesContainer"><Outlet/></div>
            </div>
        </div>
    );
}

export default App;

