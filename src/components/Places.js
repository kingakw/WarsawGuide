import React from 'react';
import {useParams} from "react-router-dom";
import {getPlaces} from "./data";
import './places.css'
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

export default function Places() {
    let places = getPlaces();
    let {placeType} = useParams();

    return (
        <div className="container__gallery">
            <p className="container__gallery__text"> {placeType} places: </p>
            {places
                .filter(({type}) => (type === placeType))
                .map(({image, name, shortDescription, id}) => (
                    <ImageListItem className="gallery__box" key={id}>
                        <img className="gallery__box__image"
                            src={`${image}?w=248&fit=crop&auto=format`}
                            srcSet={`${image}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={`${name} photo`}
                            loading="lazy"
                        />
                        <ImageListItemBar
                            title={name}
                            subtitle={shortDescription}
                            actionIcon={
                                <IconButton className="gallery__box__icon"
                                    sx={{color: 'rgba(255, 255, 255, 0.54)'}}
                                    aria-label={`info about ${name}`}
                                >
                                    <InfoIcon/>
                                </IconButton>
                            }
                        />
                    </ImageListItem>
                ))
            }
        </div>
    );
}


{/*export default function Places() {
    let places = getPlaces();
    let {placeType} = useParams();

    return (
        <div className="container__gallery">
            <p className="container__gallery__text"> {placeType} places: </p>
            {places
                .filter(({type}) => (type === placeType))
                .map(({image, id}) => (
                    <div className="gallery__box">
                        <img className="gallery__box__image" key={id} src={image} alt="place photo"/>
                    </div>
                ))
            }
        </div>
    );
}*/}
