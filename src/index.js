import React from "react";
import { render } from "react-dom";
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from "react-router-dom";

import Places from "./components/Places";
import PlaceDetail from "./components/PlaceDetail";
import App from './App';



const rootElement = document.getElementById("root");
render(
    <BrowserRouter>
        <Routes>

            <Route path="/" element={<Navigate replace to="/Places" />} />
            <Route path="/" element={<App/>}>

                <Route path="Detail/:placeId" element={<PlaceDetail />} />
                <Route path="Places" element={<Places/>}>
                    <Route path=":placeType" element={<Places/>}/>
                </Route>
            </Route>
        </Routes>
    </BrowserRouter>,
    rootElement
);

