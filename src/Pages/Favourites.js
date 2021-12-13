import React from 'react'
import {useContext} from 'react'
import FavoritesContext from '../Context/Favorites-Context';
import EventsList from '../Components/Events/EventsList';


const  Favourites=()=>{
    const ProvidedContext = useContext(FavoritesContext);
    
    let content;

    if(ProvidedContext.totalFavorites === 0){
        content  = <p>You have no Favorites</p>;
    }
    else {
        content =    <EventsList events={ProvidedContext.favourites} />
    }

    return (
        <section>

            <h1>My Favourites</h1>
              {content}
        </section>
    )
}

export default Favourites;
