import styled from 'styled-components';
import { FaTruck } from 'react-icons/fa';
import { TiWarning } from 'react-icons/ti';
import { withFirebase } from "./Firebase";
import BannerPicture from './BannerImages/confirmation.webp';
import React, { useState, useEffect } from 'react';
import TransportModal from './PopUp/transportModal';
import * as ROUTES from './Constants/routes';
import { Link } from 'react-router-dom';

const Information = styled.div`
display: flex; 
flex-direction: column;
margin: 40px 0px 10px 0px;

div {
    display: flex; 
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
}

h3:nth-child(4){
    font-size: 26px;
    text-align: center;
    margin-bottom: 0px;

    @media (max-width: 320px) {
  margin-top: 0;
        }   
}

ul { 
    list-style: none;
    padding: 0px;
    margin: 0px 0px 20px 0px;

    li { 
        font-size: 12px;
       padding: 10px;
       line-height: 1.8;
    }
    span {
        font-weight: bold;
    }
}
p {
font-size: 12px;
margin: 10px;

    span { 
        &:hover {
            cursor: pointer; 
        }
    }
}
`;

const Banner = styled.div`
display: flex; 
justify-content: center; 
align-items: center;
background-size: cover;
background-repeat: no-repeat;
background-image: url(${BannerPicture});
background-position: center;
/* width: 100%;   */
height: 500px;

@media (max-width: 320px) {
    height: 150px;
    }

@media (max-width: 428px) and (min-width: 321px) {
  height: 200px;
  }
 
@media (min-width: 810px) {
  height: 350px;
      }

h1 { 
    color: white;
    font-size: 50px;
    
    @media (max-width: 428px) {
  font-size: 20px;
    }
}
`;

const LinkBox = styled.div`
display: flex; 
flex-wrap: wrap;
align-items: center;
justify-content: space-evenly;
flex-direction: column; 
margin-bottom: 10px;

p{ 
    font-size: 12px;
    margin: 0px;
    line-height: 1.8;
}

button {
    outline: none;
    border: none;
    background: transparent;
    color: blue;
    text-decoration: underline;
    font-size: 11px;
cursor: pointer;
}
`;

const Warning = styled.div`
display: flex; 
flex-direction: row; 
align-items: center;
justify-content: center;
width: 90%;
margin: 0 auto;
margin-bottom: 20px;


div { 
    display: flex; 
flex-direction: row; 
align-items: center;
justify-content: center;
    background-color: #eeeeee;
    border-radius: 4px;   
    padding: 10px;
}

@media (min-width: 768px) {
    margin-top: 20px;
      }

p { 
    line-height: 1.8;
    font-size: 12px;
    padding: 0px 30px 0px 10px;

    span {
        font-weight: bold;
    }
}
`;

const WarningIcon = styled(TiWarning)`
color: red;
font-size: 4rem;
padding: 10px; 
`;

const Confirmation = ({ firebase }) => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(prev => !prev);
    }

    /*Firebase get booked time*/
    const [bookedTimeslotString, setBookedTimeslotString] = useState({ bookedWeekDayName: "", bookedDateFormat: "", bookedTime: "", people: "" });

    useEffect(() => {
        firebase.getCurrentUserBooking(setBookedTimeslotString)
    }, [firebase]);

    let weekDayName = bookedTimeslotString.bookedWeekDayName;
    let bookedDate = (weekDayName !== '') ? bookedTimeslotString.bookedDateFormat : '';
    let bookedTime = (weekDayName !== '') ? bookedTimeslotString.bookedTime : '';
    /***/

    let iconStyles = { color: "black", fontSize: "1.2em" };

    return (
        <>
            <Banner>
                <h1>BOKNINGSBEKRÄFTELSE</h1>
            </Banner>

            <Information>
                <div>
                    <h3>Din bokning har bekräftats!</h3>
                    <p>Du har bokat följande tid:</p>
                    <ul>
                        <li><span>Datum: </span><br />

                            {weekDayName} {bookedDate}</li>
                        <li><span>Klockslag:</span> <br />
                            {bookedTime}
                        </li>
                        <li><span>Antal personer:</span> <br />
                            {bookedTimeslotString.people}
                        </li>
                        <li>Vill du avboka eller omboka tiden? Gör det  <Link to={ROUTES.ACCOUNT} aria-label="Avboka eller omboka tid">här!</Link></li>
                    </ul>
                    <h3>Välkommen in!</h3>
                </div>
            </Information>

            <LinkBox>
                <p>
                    <FaTruck style={iconStyles} /> Behöver du transporthjälp?
                    <button onClick={openModal} aria-label="boka transporthjälp">Boka här!</button></p>
                <TransportModal showModal={showModal} setShowModal={setShowModal} />
            </LinkBox>

            <Warning>
                <div>
                    <WarningIcon />
                    <p><span>OBSERVERA!</span> Återbud lämnas senast 24 timmar innan det bokade besöket. Uteblivet besök debiteras!</p>
                </div>
            </Warning>

        </>
    );
}

export default withFirebase(Confirmation);
