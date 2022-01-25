import React from "react";
import { render } from "react-dom";
import {
    BrowserRouter,
    Routes,
    Route, Navigate
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
