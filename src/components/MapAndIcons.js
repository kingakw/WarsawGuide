import './mapAndIcons.css';
import React from "react";
import {getPlace, getPlaces} from "./data";
import {useParams} from "react-router-dom";

export default function MapAndIcons() {
    let places = getPlaces();
    let {placeType} = useParams();

    return (
<div className="mapAndIconContainer"></div>
    )
}