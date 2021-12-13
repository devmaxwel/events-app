import React,{useState, useEffect} from 'react'
import EventsList from '../Components/Events/EventsList';

const AllEvents=() =>{


    const [loading, setIsloading] = useState(true);
    const [loadedEvents, setLoadedEvents]= useState([]);

    useEffect(() => {
      setIsloading(true)

      fetch('https://events-app-86a5f-default-rtdb.firebaseio.com/events.json').then((response )=> {
        return response.json();
      }).then((data) => {
        // converting json object to array

        const events = [];

        for(const key in data){
          const event = {
            id:key,
            ...data[key]
          };

          events.push(event);

        }
             setIsloading(false)
             setLoadedEvents(events);
      });
    }, []);

    if(loading){
      return <section><p>Loading.....</p></section>
    };

    return (
        <section>
         <h1>All Events</h1>
      
         <EventsList events={loadedEvents}  />
        </section>
    )
}

export default AllEvents;
