import React from 'react';
import {Outlet, Link} from "react-router-dom";
import Header from "./components/Header"
import Icons from "./components/Icons"
import MenuButt from "./components/MenuButt";
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';
import BakeryDiningIcon from '@mui/icons-material/BakeryDining';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import './App.css';

const App = () => {
  return (

        <div className="mainContainer">

          <div className="mapContainer map">
            <Icons/>

            <div className="menuContainer">
              <Header/>

                <nav className="mainMenu">
                  <Link to="/Places" className="mainMenu__home">
                    <MenuButt/>
                  </Link> | {" "}
                  <Link to="/Places/coffee">
                    <FreeBreakfastIcon sx={{fontSize: 40}} style={{fill: "black"}}/>
                  </Link> | {" "}
                  <Link to="/Places/breakfast"
                  ><BakeryDiningIcon sx={{fontSize: 50}} style={{fill: "black"}}/>
                  </Link> | {" "}
                  <Link to="/Places/food">
                    <DinnerDiningIcon sx={{fontSize: 40}} style={{fill: "black"}}/>
                  </Link>
                </nav>

              </div>

            </div>
          <div className="places__container"><Outlet/></div>
        </div>

  );
}

export default App;

