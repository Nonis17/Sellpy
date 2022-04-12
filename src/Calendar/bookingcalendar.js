import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowBack } from 'react-icons/io';
import { BsFillClockFill } from 'react-icons/bs';
import { BsPeopleFill } from 'react-icons/bs';
import { ThemeProvider } from "styled-components";
import { FaCheckCircle } from 'react-icons/fa';
import { AiOutlineStop } from 'react-icons/ai';
import { theme } from './buttonColorThemes';
import {
  getWeekdayName,
  getWeekdayNumber,
  getBlockName,
  getMonth,
  hasTimePassed,
  getDateId,
  getYear,
} from './getDate';
import * as ROUTES from '../Constants/routes';
import { withFirebase } from "../Firebase";
import CalendarBackground from './calendarbackground.png';
import React, { useState, useEffect } from 'react';
import Modal from '../PopUp/confirmationModal';
import GridLoader from "react-spinners/GridLoader";

const Body = styled.body`
min-height: 900px;
height: 100%;
`;

const PageHeader = styled.div`
display: flex; 
flex-direction: column; 
align-items: center; 
justify-content: center;
margin-bottom: 40px;

@media (max-width: 390px) {
  margin: 0px 15px;
  font-size: 10px;
}

p{
  text-align: center;
margin: 4px;
}

p:nth-child(2){
  font-weight: bold;
}
`;

const Container = styled.div`
display: flex; 
flex-direction: column;
align-items: center; 
margin: 0 auto; 
`;

const CalendarWrapper = styled.div`
display: flex;
flex-direction: column;
background-size: cover;
background-repeat: no-repeat;
background-image: url(${CalendarBackground});
background-position: center;

@media (max-width: 320px) {
  width: 300px;
}
`;

const CalendarHeader = styled.div`
  background-color: black;
  display: flex;
  flex-direction: row;

p {
  color: white; 
  padding: 4px;
  margin: 0px;
}

button {
  outline: none; 
  border: none;
  background: none;
  &:hover {
    cursor: pointer;
  }
}

`;

const CalendarInfo = styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;
margin: 20px 0px 20px 0px; 

@media (max-width: 360px) {
  flex-direction: column;
}

span{
  margin-left: 2px;
  font-size: 10px;
}

section {
  margin-right: 5px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;

  @media (max-width: 360px) {
  margin: 4px;
  }
}

section:nth-child(1){
  div{
  background-color: #0762C8; 
  opacity: 0.5;
  border-radius: 5px;
  width: 16px;
  height: 16px;
  }
}

section:nth-child(2){
  div{
    position: relative;
  background-color: #008000af; 
  border-radius: 5px;
  width: 16px;
  height: 16px;
  }
}
section:nth-child(3){
  div{
    position: relative;
  background-color: #ff0000a6; 
  border-radius: 5px;
  width: 16px;
  height: 16px;
  }
}
section:nth-child(4){
  div{
    position: relative;
  background-color: #0000001f; 
  border-radius: 5px;
  width: 16px;
  height: 16px;
  }
}
`;

const Days = styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;

div {
  margin-bottom: 2px;
  display: flex;
  flex-direction: column;
 padding: 15px 43px 15px 43px;
 border-radius: 5px;

  @media (max-width: 390px) {
    padding: 10px 28px;
  }

  span{
    text-align: center;
    font-size: 12px;
  }

  span:nth-child(1){
    font-weight: bold;
  }
  span:nth-child(2){
    font-size: 20px;
  }
} 

div:nth-child(1),
div:nth-child(2){
  margin-right: 2px;
  padding-left: 41px;

  @media (max-width: 390px) {
    margin-right: 5px;
    padding-left: 24px;
  }
} 
`;

const GridCalendar = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-gap: 2px 3px;

@media (max-width: 414px) {
  grid-gap: 1px 2px;
}
`;

const CalendarButton = styled.button`
position: relative;
  border: none;
  outline: none;
  align-content: space-around;
  display: flex;
  flex-direction: column;
  text-align: left;
  border-radius: 5px;
  box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.4), 0 5px 20px 0 rgba(0, 0, 0, 0.30);

  div {
    padding: 10px; 

    @media (max-width: 320px) {
      padding: 5px 0px; 
       } 
   
    p:nth-child(1) { 
      font-size: 10px;
      font-weight: bold;
      color: white;
    }
    p { 
      color: white;

      @media (max-width: 390px) {
        font-size: 10px;
         } 
     
    }
    }
  ${props => props.getThemeColor(props.offset, props.blockIndex)}
`;

const FindUsButton = styled.button`
  padding: 10px;
  margin: 40px 0px;
  width: 300px;
  background-color: black;
  color: white; 
  border: none;
  border-radius: 6px;

  @media (max-width: 375px) {
    width: 250px;
  }

  &:hover { 
    cursor: pointer;
    font-weight: bold;
    background-color: #b2b2b2;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`;

const PeopleIcon = styled(BsPeopleFill)`
color: black;
font-size: 14px;
margin-right: 0.5em;

@media (max-width: 414px) {
  font-size: 10px;
 }
`;

const ClockIcon = styled(BsFillClockFill)`
color: black;
font-size: 16px;
margin-right: 0.5em;

@media (max-width: 414px) {
 font-size: 10px;
}
`;

const AvailibleTimeSlotCheckedIcon = styled(FaCheckCircle)`
font-size: 11px;
position: absolute;
padding: 2px;
color: black;

`

const NotAvailibleTimeSlotIcon = styled(AiOutlineStop)`
font-size: 10px;
position: absolute;
padding: 3px;
color: black;
`;

const AvailibleTimeSlotCalendarIcon = styled(FaCheckCircle)`
font-size: 16px;
position: absolute;
top: 4px;
right: 5px;
color: black;
z-index: 1;

@media (max-width: 414px) {
  font-size: 10px;
 }
`

const NotAvailibleCalendarIcon = styled(AiOutlineStop)`
font-size: 16px;
position: absolute;
top: 4px;
right: 5px;
color: black;
z-index: 1;

@media (max-width: 414px) {
  font-size: 10px;
 }
`;

const Loader = styled.div`
display: flex; 
justify-content: center; 
align-items: center; 
margin-top: 100px;
margin-bottom: 100px;
`;



const Calender = ({ firebase }) => {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
    }, 1500)

  }, [])

  const [showModal, setShowModal] = useState(false);
  const [selectedBlockIndex, setSelectedBlockIndex] = useState(0);
  const [selectedDateOffset, setSelectedDateOffset] = useState(0);
  const [bookingStatuses, setBookingStatuses] = useState(null);
  const [numberOfBookings, setNumberOfBookings] = useState(0);
  const [weekOffset, setWeekOffset] = useState(0);

  const openModal = (dateOffset, blockIndex) => {
    let numbersBooked = bookingAmountForDay(dateOffset, blockIndex);

    if (hasTimePassed(dateOffset, blockIndex)) {
      return;
    }
    if (numbersBooked === 5) {
      return;
    }

    setNumberOfBookings(numbersBooked);
    setSelectedDateOffset(dateOffset);
    setSelectedBlockIndex(blockIndex)
    setShowModal(prev => !prev)
  }

  const bookingAmountForDay = (dateOffset, blockIndex) => {
    if (bookingStatuses === null) {
      return 0;
    }

    let dateId = getDateId(dateOffset, blockIndex);

    if (bookingStatuses[dateId] === undefined) {
      return 0;
    }

    return bookingStatuses[dateId];
  }

  const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  );

  function getThemeColor(offset, blockIndex) {
    let timeHasPassed = hasTimePassed(offset, blockIndex);
    if (timeHasPassed) {
      return theme.PassedTimeSlot;
    } else {
      if (bookingAmountForDay(offset, blockIndex) === 5) {
        return theme.NotAvailibleTimeSlot;
      } else {
        return theme.AvailibleTimeSlot;
      }
    }
  };

  function getRightCalendarIcon(offset, blockIndex) {
    let timeHasPassed = hasTimePassed(offset, blockIndex);
    if (timeHasPassed) {
      return <NotAvailibleCalendarIcon />
    } else {
      if (bookingAmountForDay(offset, blockIndex) === 5) {
        return <NotAvailibleCalendarIcon />
      } else {
        return <AvailibleTimeSlotCalendarIcon />
      }
    }

  };

  function increaseWeekOffset() {
    setWeekOffset(weekOffset + 1);
  };

  function decreaseWeekOffset() {
    setWeekOffset(weekOffset - 1);
  }

  useEffect(() => {
    const weekDayIndexes = [0, 2, 5];
    const blocksPerDay = 5;
    let dateArray = [];
    for (const weekDayIndex of weekDayIndexes) {
      for (let i = 0; i < blocksPerDay; i++) {
        dateArray.push(getDateId(weekDayIndex + weekOffset*7, i));
      }
    }
    firebase.populateBookingStatuses(dateArray, setBookingStatuses)
  }, [firebase, weekOffset])

  const generateGridCalendarContent = (weekOffset) => {
    
    let weekdayOffsets = [0, 2, 5]
    var result = [];
    for (var i = 0; i < 5; i++) {
      for (var j = 0; j < weekdayOffsets.length; j++) {
        let weekday = weekdayOffsets[j] + weekOffset*7;
        let index = i;
        result.push(<CalendarButton key={weekday.toString()+i.toString()} onClick={() => openModal(weekday, index)} offset={weekday} blockIndex={i} getThemeColor={getThemeColor}><span>{getRightCalendarIcon(weekday, i)}</span><div><p><ClockIcon />{getBlockName(i)}</p>
          <p><PeopleIcon /> {bookingAmountForDay(weekday, i)}/5</p></div></CalendarButton>)
      }
    }

    return result;
  }

  let iconButtonStyle = { fill: "white", fontSize: "1.3em" };

  return (
    <Body>
      <Theme>
        <Modal showModal={showModal}
          setShowModal={setShowModal}
          selectedDateOffset={selectedDateOffset}
          selectedBlockIndex={selectedBlockIndex}
          numberOfBookings={numberOfBookings} />

        <PageHeader>
          <h1>BOKA TID</h1>
          <p>Här kan du boka en tid i reparationslokalen. </p>
          <p>Du måste ha ett konto hos oss och vara inloggad för att boka en tid.  <Link to={ROUTES.SIGN_IN}>Klicka här</Link> för att logga in.</p>
        </PageHeader>

        {loading ?
          (<Loader><GridLoader size={20} color={"#0762C8"} loading={loading} /></Loader>)
          : (
            <>
              <Container>

                <CalendarInfo>
                  <section><div></div><span> Markerad tid</span></section>
                  <section><div><AvailibleTimeSlotCheckedIcon /></div><span> Ledig tid</span></section>
                  <section><div><NotAvailibleTimeSlotIcon /></div><span> Fullbokat</span></section>
                  <section><div><NotAvailibleTimeSlotIcon /></div><span> Passerad tid (ej bokningsbar)</span></section>
                </CalendarInfo>

                <CalendarWrapper>

                  <CalendarHeader>
                    <p><button><IoIosArrowBack style={iconButtonStyle} onClick={decreaseWeekOffset} /></button> 
                    {getMonth(weekOffset*7)} {getYear()}
                    <button><IoIosArrowForward style={iconButtonStyle} onClick={increaseWeekOffset}/></button></p>
                  </CalendarHeader>
                  <Days>
                    <div><span>{getWeekdayName(0 + weekOffset*7)}</span><span>{getWeekdayNumber(0 + weekOffset*7)}</span></div>
                    <div><span>{getWeekdayName(2 + weekOffset*7)}</span><span>{getWeekdayNumber(2 + weekOffset*7)}</span></div>
                    <div><span>{getWeekdayName(5 + weekOffset*7)}</span><span>{getWeekdayNumber(5 + weekOffset*7)}</span></div>
                  </Days>

                  <GridCalendar>
                    {generateGridCalendarContent(weekOffset)}

                  </GridCalendar>
                </CalendarWrapper>

                <Link to='/findus'> <FindUsButton>HITTA HIT</FindUsButton></Link>

              </Container>
            </>
          )}

      </Theme>
    </Body>
  );
}

export default withFirebase(Calender);