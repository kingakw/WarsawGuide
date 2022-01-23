import React, {useState} from 'react';
import { Outlet, Link } from "react-router-dom";
import Header from "./components/Header"
import './App.css';
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';
import BakeryDiningIcon from '@mui/icons-material/BakeryDining';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import MenuButt from "./components/MenuButt";


const App = () => {
  return (
      <div>
        <div className="mainContainer">
          <div className="mapContainer">
            <Header/>
            <div className="mainMenu">
              <nav className="mainMenu__line">
                <Link to="/Places"><MenuButt/></Link> | {" "}
                <Link to="/Places/coffee"><FreeBreakfastIcon sx={{fontSize: 40}} style={{fill: "black"}}/></Link>   |  {" "}
                <Link to="/Places/breakfast"><BakeryDiningIcon sx={{fontSize: 50}} style={{fill: "black"}}/></Link>  |  {" "}
                <Link to="/Places/food"><DinnerDiningIcon sx={{fontSize: 40}} style={{fill: "black"}}/></Link>
              </nav>
            </div>
          </div>
          <div className="places__infoContainer"><Outlet/></div>
        </div>
      </div>
  );
}


export default App;

