import React from "react";
import {getPlace} from "./data";
import {useParams} from "react-router-dom";
import FacebookIcon from '@mui/icons-material/Facebook';
import Link from '@mui/material/Link';
import './detail.css';
import MenuButt from "./MenuButt";

const PlaceDetail = () => {
    let {placeId} = useParams();
    let place = getPlace(parseInt(placeId));
    console.log(typeof placeId);

return (
    <div className="detail__container">
        <div className="detail__info">
        <img className="detail__info__image"
             src={`${place.image}?w=248&fit=crop&auto=format`}
             srcSet={`${place.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
             alt={`${place.name} photo`}
             loading="lazy"
        />
        <div className="detail__info__text">
            <h1>{place.name}</h1>
            <h2>{place.direction}</h2>
            <p> {place.description}</p>
            <Link href={place.facebook} ><FacebookIcon fontSize="large" style={{fill: "black"}}/></Link>
        </div>

        </div>
    </div>
)
}
export default PlaceDetail;
