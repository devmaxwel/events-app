import React from 'react'
import classes from './UICard.module.css';

function UICard(props) {
    return (
        <div className={classes.card}>
            {props.children}
        </div>
    )
}

export default UICard;
