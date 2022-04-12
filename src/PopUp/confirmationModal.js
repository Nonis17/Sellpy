import styled from 'styled-components';
import React, { useRef, useCallback, useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { MdClose } from 'react-icons/md';
import { BiCalendar } from 'react-icons/bi';
import { BsFillClockFill } from 'react-icons/bs';
import { BsPeopleFill } from 'react-icons/bs';
import { BsPersonCheckFill } from 'react-icons/bs';
import { Link, useHistory } from 'react-router-dom';
import { getBlockName, getWeekdayName, getDateFormat } from '../Calendar/getDate';
import { withFirebase } from "../Firebase";
import { getDateId } from '../Calendar/getDate';
import { IoMdPricetag } from 'react-icons/io';
import { AuthUserContext } from '../Session';

const Background = styled.div`
 width: 100%;
height: 100%; 
position: fixed;
top: 0;
bottom: 0;
right: 0;
left: 0;
display: flex;
justify-content: center; 
align-items: center;  
background-color: #00000056;
z-index: 50;
`;

const ModalWrapper = styled.div`
width: 420px;
height: 700px;
box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
background: #f3f3fa; 
color: #000;
display: grid;
grid-template-columns: 1fr 1tr; 
position: relative; 
z-index: 51; 
border-radius: 10px;
margin-top: 50px;

@media (max-width: 320px) {
    margin-top: 60px;
    width: 290px; 
    height: 480px;
     } 

 @media (max-width: 428px) and (min-width: 321px) {
    width: 290px; 
    height: 540px;
     } 
`;

const ModalBanner = styled.div`
width: 100%;
height: 90%;
background-color: #0762C8; 
display: flex;
justify-content: center;
align-items: center;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const ModalContent = styled.div`
display: flex;
flex-direction: column; 
line-height: 1.8;
color: #141414; 
margin: 0px 40px 0px 40px;

@media (max-width: 428px) {
    margin: 0px 20px; 
     }

div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center; 
   
    span{
        @media (max-width: 428px) {
            font-size: 10px; 
             }
    }
}
h4 { 
   margin: 10px 0px 0px 0px; 

   @media (max-width: 414px) {
    font-size: 10px; 
     }
}
p{ 
    font-size: 12px;
margin: 0px;

    @media (max-width: 428px) {
        font-size: 10px;
         }
} 

p:nth-child(1){
    color: red; 
    font-size: 10px;
    text-align: center; 
 margin-top: 10px; 
}
form{ 
    display: inline-block;
}
select {
     padding: 5px;
     margin: 3px;

     @media (max-width: 428px) {
       padding: 2px; 
       font-size: 10px;
         }
}
hr { 
    width: 100%;
    border: 0.5px solid #eeeeee;
    margin: 3px;
}
button {
    padding: 10px;
    margin: 30px 10px 10px 10px;  
    width: 300px;
    background-color: black;
    color: white; 
    border: none;
    border-radius: 6px;

    @media (max-width: 428px) and (min-width: 320px) {
     width: 200px; 
        font-size: 10px;
        margin: 30px 20px 10px 20px;
         }
    &:hover { 
      cursor: pointer;
      font-weight: bold;
      background-color: #b2b2b2;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
  }
  button:nth-child(2){
      margin-top: 5px;
  }
`;

const CalendarIcon = styled(BiCalendar)`
color: white;
font-size: 10rem;
opacity: 0.2;

@media (max-width: 320px) {
    font-size: 4rem; 
     } 

`;

const CloseModalButton = styled(MdClose)`
cursor: pointer;
position: absolute; 
top: 20px; 
right: 20px;
width: 32px; 
height: 32px;
padding: 0; 
z-index: 10;

@media (max-width: 428px) {
    width: 22px; 
    height: 22px;
     }
`

const LegalAgreement = styled.span`
    font-size: 8px;
     text-align: center; 
    margin: 0 auto;
    width: 250px;
    `;
const ContainerNotLoggedIn = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
margin: 0 auto;

div { 
    display: block;
}
`;

const Modal = ({ showModal, setShowModal, selectedDateOffset, selectedBlockIndex, numberOfBookings, firebase }) => {

    const history = useHistory();

    let bookedWeekDayName = getWeekdayName(selectedDateOffset);
    let bookedTime = getBlockName(selectedBlockIndex);
    let bookedDateFormat = getDateFormat(selectedDateOffset);
    let dataBaseBookedDayId = getDateId(selectedDateOffset, selectedBlockIndex);

    const [people, setPeople] = useState(1);

    //Add to firebase database after submit
    function handleSubmit() {
        firebase.deleteUserBooking();
        firebase.setCurrentUserBookingAmountOfPeople(bookedWeekDayName, bookedDateFormat, bookedTime, people, dataBaseBookedDayId);
        firebase.setAmountOfPeople(people, dataBaseBookedDayId);

        return history.push('./confirmation');
    }

    let iconStyles = {
        color: "black",
        fontSize: "1.3em",
        marginRight: "0.3em",
        marginTop: "0.3em",
    };

    const modalRef = useRef();

    const animation = useSpring({
        config: {
            duration: 250
        },
        opacity: showModal ? 1 : 0,
        transform: showModal ? `translateY(0%)` : `translateY(-100%)`
    })

    const closeModal = e => {
        if (modalRef.current === e.target) {
            setShowModal(false)
        }
    }

    //Close modal with esc-key
    const keyPress = useCallback(e => {
        if (e.key === 'Escape' && showModal) {
            setShowModal(false);
        }
    }, [setShowModal, showModal])

    useEffect(() => {
        document.addEventListener('keydown', keyPress);
        return () => document.removeEventListener('keydown', keyPress)
    }, [keyPress])


    const numberOfPeople = (e) => {
        const selectedNumber = parseInt(e.target.value);

        setPeople(selectedNumber);

    };

    const bookingOptions = (numberOfBookings) => {
        var array = [<option value="1">1</option>];

        if (numberOfBookings < 4) {
            array.push(<option value="2">2</option>)
        }
        if (numberOfBookings < 3) {
            array.push(<option value="3">3</option>)
        }
        if (numberOfBookings < 2) {
            array.push(<option value="4">4</option>)
        }
        if (numberOfBookings < 1) {
            array.push(<option value="5">5</option>)
        }
        return array;
    }


    const Price = () => {

        let numberOfPeople = people;

        if (numberOfPeople === 1) {
            return 200
        } else if (numberOfPeople === 2) {
            return 400
        } else if (numberOfPeople === 3) {
            return 600
        } else if (numberOfPeople === 4) {
            return 800
        } else if (numberOfPeople === 5) {
            return 1000
        }

    }

    return (
        <>
            {showModal ? (
                <Background ref={modalRef} onClick={closeModal}>
                    <animated.div style={animation}>
                        <ModalWrapper showModal={showModal}>
                            <ModalBanner><CalendarIcon /></ModalBanner>
                            <ModalContent>
                                <div>
                                    <span><BiCalendar style={iconStyles} /> Bokningsdatum</span>
                                    <span>{getWeekdayName(selectedDateOffset)} {getDateFormat(selectedDateOffset)}</span>
                                </div>
                                <hr />
                                <div>
                                    <span><BsFillClockFill style={iconStyles} /> Bokningstid</span>
                                    <span>{getBlockName(selectedBlockIndex)}</span>
                                </div>
                                <hr />
                                <div>
                                    <span><BsPeopleFill style={iconStyles} /> Antal personer</span>
                                    <span><BsPersonCheckFill style={iconStyles} />
                                        <form>
                                            <select onChange={numberOfPeople} name="numberofpeople">
                                                {bookingOptions(numberOfBookings)}
                                            </select>
                                        </form>
                                    </span>
                                </div>
                                <hr />

                                <div>
                                    <span><IoMdPricetag style={iconStyles} /> Pris</span>
                                    <span>{Price()} kr</span>
                                </div>
                                <hr />


                                <h4>Kostnad</h4>
                                <p>Priset för att vistas i verkstaden och använda utrustningen är 200 SEK/person för 2 timmar.</p>

                                <p>Du betalar alltid för tiden du har bokat, ombokning och avbokning sker senast 24 timmar innan. </p>
                                <p>Behöver du transporthjälp bokar du de efter du bekräftat din bokning!</p>

                                <AuthUserContext.Consumer>
                                    {authUser =>
                                        authUser ? (
                                            <>
                                                <button onClick={handleSubmit}>BETALA OCH BEKRÄFTA</button>
                                                <LegalAgreement>Genom att klicka på "betala och bekräfta" accepterar jag och godkänner <Link to='/termsandconditions'>köpavtal</Link> hos Sellhelp AB.</LegalAgreement>

                                            </>
                                        ) : (
                                            <NonAuth />
                                        )

                                    }
                                </AuthUserContext.Consumer>
                            </ModalContent>

                            <CloseModalButton aria-label='close popup' onClick={() => setShowModal
                                (prev => !prev)} />
                        </ModalWrapper>
                    </animated.div>
                </Background>
            ) : null}
        </>
    );
}

function NonAuth() {
    const history = useHistory();

    function handleLogIn() {
        history.push('./signin', { from: "BookingCalendarPage" });
    }

    return (
        <>
            <ContainerNotLoggedIn>
                <div>
                    <p>Du måste vara inloggad för att forstätta</p>
                    <button onClick={handleLogIn}>LOGGA IN HÄR</button>

                </div>
            </ContainerNotLoggedIn>
        </>
    )
};

export default withFirebase(Modal);