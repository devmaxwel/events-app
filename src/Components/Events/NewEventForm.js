import React,{useRef} from 'react'
import UICard from '../Interface/UICard';
import './Form.css'

 function NewEventForm(props) {
         // Capuring the user inouts we use useRef hooks and we have to add a special ref to the inputs elements to establish a connection.
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef =useRef();


    //  Prevent Browser default by loading and just handle form to submit using react and vannila js
    function handleFormSubmission(event){
        event.preventDefault();

        // Now we have to get What The user has keyed in as value to the form 

        const keyedTitle = titleInputRef.current.value;
        const uploadedImage = imageInputRef.current.value;
        const keyedAddress = addressInputRef.current.value;
        const keyedDescription = descriptionInputRef.current.value;
        

        // Then we have to create an Object to store our keyedvalues

        const events_Data = {
            title:keyedTitle,
            image:uploadedImage,
            address:keyedAddress,
            description:keyedDescription
        };

        // We will add the http code or api in the parrent file and since we need the connection we will use the props feature instead of console logging the events data
            
       props.addEventsData(events_Data)
    };


     return (
      <div className='ul'>
          <UICard>
              <div>
                  <img src='https://image.shutterstock.com/image-vector/upcoming-events-isolated-on-white-260nw-1538520572.jpg'  alt='event'/>
              </div>
             <div className='content'><p>
               Use the Form to add your events on the page. Only on file should be Chosen in in the File section.
             </p>
             </div>

          </UICard>

          <section>
          
          <form className="form-style-9" onSubmit={handleFormSubmission}>
          <h2>Add Event</h2>
          <br/>
          <ul>
          <li>
              <input type="text" name="field1" className="field-style field-split align-left" placeholder="Event Title" ref={titleInputRef} />

              <input type="text" name="field2" className="field-style field-split align-right" placeholder="Image Link" ref={imageInputRef} />

          </li>
         
          <li>
          <input type="text" name="field3" className="field-style field-full align-none" placeholder="Address" ref={addressInputRef} />
          </li>
          <li>
          <textarea name="field5" className="field-style" placeholder="Description" ref={descriptionInputRef} ></textarea>
          </li>

          <li className='actions'>
           <button>Submit</button>
          </li>
          </ul>
</form>
      </section>
      </div>
     )
 }
 
 export default NewEventForm;
 