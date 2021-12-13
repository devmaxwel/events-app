import { createContext, useState } from "react";

// Context takes an argument 
// which can be initial value of your choice.
const FavoritesContext = createContext({
    favourites:[],
    totalFavorites:0,
    addFavorite:(favoriteEvent) => {},
    removeFavorite:(eventId) => {},
    eventIsFavorite:(eventId) => {}
});

// This will be repsonsible for providing the components that wants the favoritesContext

// It will also update the values of favoritesContext as they ahppen
export const FavoritesContextProvider =(props)=>{
     const [userFavorites, setUserFavorites] = useState([]);

     // To add Favorite
     function addFavoritesHandler(favoriteEvent){
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.concat(favoriteEvent);
        });

    }
// To remove favorites
    function removeFavoritesHandler(eventId){
        setUserFavorites((prevUserFavorites) => {
           return prevUserFavorites.filter((events) => events.id !== eventId
           )
        })

    }
// To detrmine whether a event is favorite
// Some is a vannila js method that takes a function as an argument and returns a value
    function eventIsfavoriteHandler(eventId){
        return userFavorites.some((events) => events.id === eventId)

    }

     const context = {
         favourites:userFavorites,
         totalFavorites: userFavorites.length,
         addFavorite:addFavoritesHandler,
         removeFavorite:removeFavoritesHandler,
         eventIsFavorite:eventIsfavoriteHandler



     };



    return <FavoritesContext.Provider value={context}>
          {props.children}
    </FavoritesContext.Provider>


}


export default FavoritesContext;