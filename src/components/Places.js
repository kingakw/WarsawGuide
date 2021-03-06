import React from 'react';
import {NavLink, useParams} from "react-router-dom";
import {getPlaces} from "./data";
import '../App.scss'
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';


const Places = () => {
    let places = getPlaces();
    let {placeType} = useParams();

    if (placeType !== undefined) {
        places = places.filter(({type}) => (type === placeType))
    }

 /*   const handleSubmit  = () => {
        list.forEach(item => {
            const match = new RegExp(search.value, 'i').test(item.textContent)
            if (!match){
                item.style.display = 'none'
            }else{
                item.style.display = 'block'
            }
        })
    }*/

    return (
        <div className="container__gallery">
            <p className="container__gallery__text"> {placeType} places: </p>
            {/*<form onSubmit={handleSubmit}>
                <input type="text" id="input" value={spot} onChange={updateSpot}/>
            </form>*/}
            {places
                .map(({image, name, shortDescription, id}) => (
                    <NavLink className="container__gallery__box" to={`/Detail/${id}`} key={id}>
                        <ImageListItem className="gallery__box" key={id}>
                            <img className="gallery__box__image"
                                 src={`${image}?w=248&fit=crop&auto=format`}
                                 srcSet={`${image}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                 alt={`${name}`}
                                 loading="lazy"
                            />
                            <ImageListItemBar
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


