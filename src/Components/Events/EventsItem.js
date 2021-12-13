import React from 'react';
import UICard from '../Interface/UICard';
import classes from './EventItem.module.css';
import {useContext} from 'react'
import FavoritesContext from '../../Context/Favorites-Context';

function EventsItem(props) {
   const ProvidedCtx = useContext(FavoritesContext);
   
   const eventIsFavorite = ProvidedCtx.eventIsFavorite(props.id);

   function toggleFavoritesStatus(){
       if(eventIsFavorite){
           ProvidedCtx.removeFavorite(props.id)

       }else{
           ProvidedCtx.addFavorite({
               id:props.id,
               title:props.title,
               image:props.image,
               description:props.description,
               address:props.address
           })
       }
           
   }

    return (

        <div>

       <UICard  >
            <li className={classes.item}>
                <div  className={classes.image}>
                <img src={props.image} alt={props.title} />
                </div>

                <div className={classes.content}>
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                    <p>{props.description}</p>
                </div>

                <div className={classes.actions}>
                    <button onClick={toggleFavoritesStatus}>{eventIsFavorite ? 'Remove From Favorites': 'Add To Favorites'}</button>
                </div>
            </li>

       </UICard>

       </div>
    )
}

export default EventsItem;
