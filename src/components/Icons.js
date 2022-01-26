import '../App.scss';
import React from "react";
import {getPlace, getPlaces} from "./data";
import {NavLink, useParams} from "react-router-dom";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Tooltip from '@mui/material/Tooltip';


const Icons = () => {
    let places = getPlaces();
    let {placeType} = useParams();
    let {placeId} = useParams();

/*    const changeColor = () => {
        this.classList.add("active");
        console.log("aaa")
    }*/

    if (placeType  !== undefined) {
        places = places.filter(({type}) => (type === placeType))
    }

   if (placeId !== undefined) {
       places = [getPlace(parseInt(placeId))]
    }


    return (
        <div>
            {places.map(({id, name, direction, loc_right, loc_top}) => (
                <Tooltip title={ <h2><>{name}: {direction}</></h2> }
                         key={id}
                         style={{position: `absolute`, zIndex: 40, left: `${loc_right}`, top: `${loc_top}`}}>
                    <NavLink to={`/Detail/${id}`} key={id} >
                        <LocationOnIcon className="icon" sx={{fontSize: 40}} />
                    </NavLink>
                </Tooltip>
            ))
            }
        </div>
    )
}

export default Icons;

/*
onClick={changeColor} */
