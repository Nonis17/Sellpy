import { withFirebase } from "../Firebase";
import { useState, useEffect } from 'react';

function GetBooking({firebase}){

    const [bookedTimeslotString, setBookedTimeslotString] = useState('');
    
    useEffect(() => {
      firebase.getCurrentUserBooking(setBookedTimeslotString)
    }, [firebase]);
     
  let bookedTimeSlot = bookedTimeslotString;

    return bookedTimeSlot;
};

export default withFirebase(GetBooking);