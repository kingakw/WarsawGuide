import React from 'react';
import { NavLink, useParams} from "react-router-dom";
import {getPlaces} from "./data";
import './places.css'
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';


const Places = () =>  {
    let places = getPlaces();
    let {placeType} = useParams();

    return (
        <div className="container__gallery">
            <p className="container__gallery__text"> {placeType} places: </p>
            {places
                .filter(({type}) => (type === placeType))
                .map(({image, name, shortDescription, id}) => (
                    <NavLink to={`/Detail/${id}`} key={id} >
                    <ImageListItem className="gallery__box" key={id}>
                        <img className="gallery__box__image"
                            src={`${image}?w=248&fit=crop&auto=format`}
                            srcSet={`${image}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={`${name} photo`}
                            loading="lazy"
                        />
                        <ImageListItemBar className="gallery__box__text"
                            title={name}
                            subtitle={shortDescription}
                        />
                    </ImageListItem>
                    </NavLink>
                ))
            }
        </div>
    );
}

export default Places;