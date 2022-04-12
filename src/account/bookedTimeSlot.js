import styled from 'styled-components';
import { withFirebase } from "../Firebase";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../Constants/routes';

const Booking = styled.div`
    margin: 70px 0px;
    border-radius: 5px;
    width: 350px;
    height: 290px;
    display: flex; 
    flex-direction: column; 
  justify-content: center; 
  align-items: center;
  background-color: #eeeeee;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  @media (max-width: 428px) {
    width: 250px;
    height: 250px;
  }

span { 
    font-weight: bold;
}

div:nth-child(2) { 
    padding: 10px;
}

h3 { 
margin: 0px;

@media (max-width: 428px) {
    font-size: 16px;
  }
}

button {
    padding: 7px;
    background-color: black;
    color: white;   
    border: none;
    border-radius: 6px;
    margin: 2px;
    text-align: center;
  
    &:hover { 
      cursor: pointer;
      font-weight: bold;
      background-color: #b2b2b2;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    @media (max-width: 428px) {
        padding: 7px;
      }
  }
`;

const Buttons = styled.div`
display: flex;
flex-direction: row;
`;

const ShowMessage = styled.div`
display: flex;
align-items: center; 
justify-content: center;
margin: 80px 0px;

p{ 
  text-align: center;
}
`;

const TimeSlot = ({ firebase }) => {
  const [bookedTimeslot, setBookedTimeslot] = useState({ bookedWeekDayName: "", bookedDateFormat: "", bookedTime: "", people: "" });

  useEffect(() => {
    firebase.getCurrentUserBooking(setBookedTimeslot)
  }, [firebase]);

  let weekDayName = bookedTimeslot.bookedWeekDayName;
  let bookedDate = (weekDayName !== '') ? bookedTimeslot.bookedDateFormat : '';
  let bookedTime = (weekDayName !== '') ? bookedTimeslot.bookedTime : '';


  const [showBooking, setShowBooking] = useState(false);

  useEffect(() => {
    if (bookedTimeslot.bookedWeekDayName === "") {
      setShowBooking(false);
    } else {
      setShowBooking(true);
    }
  }, [bookedTimeslot]);

  function deleteBooking() {
    firebase.deleteUserBooking(bookedTimeslot);
  }

  return (
    <>
      {showBooking ?

        <Booking>
          <h3>Bokad tid:</h3>
          <div><p><span>Datum:</span> {weekDayName} {bookedDate} </p>
            <p><span>Tid:</span> {bookedTime}</p>
            <p><span>Antal personer:</span> {bookedTimeslot.people}</p>
            <p><span>Lokal:</span> Reparationslokalen</p>
          </div>
          <Buttons>
            <Link to={ROUTES.BOOKING}><button>OMBOKA</button></Link>
            <button onClick={deleteBooking}>AVBOKA</button>
          </Buttons>
        </Booking>

        :

        <ShowMessage>
          <p>Du har inga bokningar i reparationslokalen. Du kan boka en tid <Link to={ROUTES.BOOKING} aria-label="boka en ny tid">här</Link></p>
        </ShowMessage>}

    </>
  );
}

export default withFirebase(TimeSlot);