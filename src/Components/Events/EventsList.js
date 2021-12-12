import React from 'react'
import classes from './EventList.module.css';
import EventsItem from './EventsItem';

function EventsList(props) {
    return (
       <ul className={classes.list}>
             
             {props.events.map((event) => <EventsItem key={event.id} id={event.id} image={event.image} title={event.title} address={event.address} description={event.description} />)}
       </ul>
    )
}

export default EventsList;
