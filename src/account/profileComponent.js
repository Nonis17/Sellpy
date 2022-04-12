import styled from 'styled-components';
import { BiCalendar } from 'react-icons/bi';
import BookedTimeSlot from './bookedTimeSlot';

const Container = styled.div`
display: flex; 
flex-direction: column; 
justify-content: center;
align-items: center; 
margin-top: 30px;
margin: 0 auto;
`;

const Title = styled.div`
    display: flex;
    justify-content: center; 
    align-items: center;
    flex-direction: row;
    margin-top: 30px;

    h1 {
        @media (max-width: 428px) {
            font-size: 18px;
          }
    }
`;

const CalendarIcon = styled(BiCalendar)`
font-size: 5rem;
margin-right: 10px;
color: #0762C8;
`;

const Profile = () => {
    return (
        <Container>
            <Title>
                <CalendarIcon />
                <h1>Dina bokningar: </h1>
            </Title>
            <BookedTimeSlot />
        </Container>
    );
}

export default Profile;

