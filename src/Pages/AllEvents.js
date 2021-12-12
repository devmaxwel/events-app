import React from 'react'
import EventsList from '../Components/Events/EventsList';

const AllEvents=() =>{
    const DUMMY_DATA =[
        {
            id: 'm1',
            title: 'NSG Event',
            image:
              'https://mdundo.com/media/articles/1608237007_7366_b.jpg',
            address: 'Meetupstreet 5, 12345 Meetup City',
            description:
              'This is a first, amazing event which you definitely should not miss. It will be a lot of fun!',
          },

          {
            id: 'm2',
            title: 'Sauti Sol Concert',
            image:
              'https://ocdn.eu/pulscms-transforms/1/XsYk9kqTURBXy9hZjBlNjE0YWMyYWUwYmM5M2VmYjQ2MjIzMjQzMmFmMy5qcGVnkZUCzQKAzQFowsOCoTAFoTEB',
            address: 'Meetupstreet 5, 12345 Meetup City',
            description:
              'This is the Second, amazing event which you definitely should not miss. It will be a lot of fun!',
          },


    ]; 

    return (
        <section>
         <h1>All Events</h1>
      
         <EventsList events={DUMMY_DATA}  />
        </section>
    )
}

export default AllEvents;
