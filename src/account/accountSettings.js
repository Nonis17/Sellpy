import styled from 'styled-components';
import { BsPerson } from 'react-icons/bs';
import SignOutButton from '../SignOut/';
import PasswordChangeForm from '../PasswordChange';

const Container = styled.div`
display: flex; 
flex-direction: column; 
justify-content: center;
margin: 0 auto; 
margin-top: 30px;
`;

const Title = styled.div`
    display: flex;
    justify-content: center; 
    align-items: center;
    flex-direction: row;
    margin-bottom: 50px;

    h1 {
        @media (max-width: 428px) {
            font-size: 18px;
          }
    }
`;

const AccountIcon = styled(BsPerson)`
font-size: 5rem; 
margin-right: 10px;
color: #0762C8;
`;

const Account = () => {
    return (
        <Container>
            <Title>
                <AccountIcon />
                <h1>Konto</h1>
            </Title>
            <PasswordChangeForm />
            <SignOutButton />
        </Container>
    );
}

export default Account;