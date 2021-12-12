import React from 'react'
import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';
function MainNavigation() {
    return (
       <header className={classes.header}>
           <div className={classes.logo}>
               <h2>Events</h2>
           </div>
                <nav>
                        <ul>
                            <li><Link to='/'>All EVents</Link></li>
                            <li><Link to='/new-events'>New EVents</Link></li>
                            <li><Link to='/favourites'>Favorites EVents</Link></li>
                        </ul>
                </nav>
       </header>
    )
}

export default MainNavigation;
