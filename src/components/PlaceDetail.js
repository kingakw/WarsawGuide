import React from "react";
import {getPlace} from "./data";
import {useParams} from "react-router-dom";
import FacebookIcon from '@mui/icons-material/Facebook';
import Link from '@mui/material/Link';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {IconButton} from "@mui/material";
import './detail.css';



const PlaceDetail = () => {
    let {placeId} = useParams();
    let place = getPlace(parseInt(placeId));

return (
    <div className="detail__container">
        <div className="detail__info ">
        <img className="detail__info__image"
             src={`${place.image}?w=248&fit=crop&auto=format`}
             srcSet={`${place.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
             alt={`${place.name}`}
             loading="lazy"
        />
        <div className="detail__info__text">
            <h2>{place.name}<IconButton aria-label="add to favorites"><FavoriteIcon  fontSize="medium" /></IconButton> </h2>
            <h3>{place.direction}</h3>
            <p> {place.description}</p>
            <Link href={place.facebook} ><FacebookIcon fontSize="large" style={{fill: "black"}}/></Link>
        </div>

        </div>
    </div>
)
}
export default PlaceDetail;

