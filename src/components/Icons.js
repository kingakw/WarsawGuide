import './mapAndIcons.css';
import React from "react";
import {getPlace, getPlaces} from "./data";
import {NavLink, useParams} from "react-router-dom";
import LocationOnIcon from '@mui/icons-material/LocationOn';


const Icons= () => {
    let places = getPlaces();
    let {placeType} = useParams();

    return (
        <div className="icons">
            {places
                .filter(({type}) => (type === placeType))
                .map(({id, loc_right, loc_top}) => (
                <div
                    key={id}
                    style ={{position:`absolute`,left:{loc_right},top:{loc_top} }} >
                    <LocationOnIcon/>
                </div>
            ))
            }
        </div>
            )
        }

export default Icons;


/*<div style ={{position:`absolute`,left:`50%`, top:`50%`}}>
    <LocationOnIcon />
</div>*/
