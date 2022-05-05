import React from 'react';
import {Outlet, Link} from "react-router-dom";
import Header from "./components/Header"
import Icons from "./components/Icons"
import BakeryDiningIcon from '@mui/icons-material/BakeryDining';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import './App.scss';
import {PanZoom} from 'react-easy-panzoom';


const App = () => {
    return (
        <div>
            <div className="mainContainer">

                <div className="headerWrapper">
                    <Header/>
                    <nav className="headerMenu">
                        <Link to="/Places" className="headerMenu__home">HOME</Link> | {" "}
                        <Link to="/Places/coffee" className="headerMenu__icon"><LocalCafeIcon sx={{fontSize: 38}}/>
                            <span>coffee</span> </Link> | {" "}
                        <Link to="/Places/breakfast" className="headerMenu__icon"><BakeryDiningIcon
                            sx={{fontSize: 40}}/><span> breakfast </span></Link> | {" "}
                        <Link to="/Places/food" className="headerMenu__icon"><DinnerDiningIcon sx={{fontSize: 40}}/>
                            <span>food </span> </Link>
                    </nav>
                </div>

                <div className="mapWrapper">

                    <PanZoom maxZoom={1.5}
                             minZoom={0.4}
                             initialPositionX={200}
                             initialPositionY={100}

                    >
                        <div className="mapContainer">
                            <Icons/>
                        </div>
                    </PanZoom>

                </div>

                <div className="placesContainer"><Outlet/></div>
            </div>
        </div>
    );
}

export default App;

