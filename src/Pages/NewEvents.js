import React from 'react'
import NewEventForm from '../Components/Events/NewEventForm';
import {useHistory} from 'react-router-dom'
function NewEvents(){
    const history = useHistory();

    // We want to navigate away from the form after clicking the submit and we will make use of useHistory

  

     function addEventHandler(events_Data){
        //  fetch is used to send http request.
        // fetch takes arguments and first one is a string as a url

        // The second argument is the object to allow us to configure the http request

        

        // We can format the end of api so that we create tables in our databse

        // Firebase requires us to convert the table to json

           fetch('https://events-app-86a5f-default-rtdb.firebaseio.com/events.json',

           {
               method:'POST', 
               body:JSON.stringify(events_Data),
               headers:{
                   'Content-Type':'application/json'
               }
            }
            //    fetch returns a promise and therefore it will get away for that page
           


           ).then(() => {
               history.replace('/');
           });
     }

    return (
        <div>
            {/* We have to get the props on the form to it's component that will take dynamic function that will take the object created in the form as a parameter */}
           <NewEventForm addEventsData={addEventHandler} />
        </div>
    )
}

export default NewEvents;
