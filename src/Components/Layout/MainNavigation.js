import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import {useContext} from 'react';
import classes from './MainNavigation.module.css';
import FavoritesContext from '../../Context/Favorites-Context';
function MainNavigation() {

    const [responsive, setResponsive] = useState(false);

    const provideContext = useContext(FavoritesContext);

    return (
       <header className={classes.header}>
           <div className={classes.logo}>
               <h2>Events</h2>
           </div>
                <nav>
                        <ul className>
                            <li><Link to='/'>All EVents</Link></li>
                            <li><Link to='/new-events'>New EVents</Link></li>
                            <li><Link to='/favourites'>Favorites EVents
                            <span className={classes.badge}>{provideContext.totalFavorites}</span></Link></li>
                        </ul>
                </nav>

                <div className={classes.mobilemenu}>
                    {responsive ? <i class='fas fa-times'></i> :
                    <i class='fas fa-bars'></i> }

                </div>

       </header>
    )
}

export default MainNavigation;
