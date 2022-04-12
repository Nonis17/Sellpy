import React from 'react';
import { withFirebase } from '../Firebase';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const Container = styled.div`
display: flex; 
align-items: center; 
justify-content: center;

`;

const LogOutButton = styled.button`
margin-top: 40px;

    padding: 7px;
    width: 250px;
    background-color: black;
    color: white; 
    border: none;
    border-radius: 6px;
      
    &:hover { 
      cursor: pointer;
      font-weight: bold;
      background-color: #b2b2b2;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    @media (max-width: 428px) {
        font-size: 12px;
        width: 170px;
      
      }
    `;

const SignOutButton = ({ firebase }) => {
 
    const history = useHistory();

    function SignOut(){ 
        firebase.doSignOut()
        return history.push('./signin'); 
    }

return (
<Container>
    <LogOutButton type="button" 
        onClick={SignOut}>
       LOGGA UT
    </LogOutButton>
    </Container>
)
};

export default withFirebase(SignOutButton);

  