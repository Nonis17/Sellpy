import styled from 'styled-components';
import { useState } from 'react'
import Profile from './profileComponent';
import Account from './accountSettings';

const Body = styled.body`
height: 100vh; 
`;

const Page = styled.div`
display: flex; 
justify-content: center;
align-items: center;
`;

const Container = styled.div`
max-width: 30em;
padding: 1em;

button {
    padding: 15px;
}
`;

const Menu = styled.div`
display: flex;
flex-direction: row;
width: 400px;

@media (max-width: 414px) {
    width: 340px;
  }

  @media (max-width: 320px) {
    width: 300px;
  }

button:nth-child(1){
    color: ${props => (props.isSigninSelected === false ? `#b2b2b2` : `black`)};
    border-bottom: ${props => (props.isSigninSelected === false ? `1px solid lightgrey` : `3px solid black`)};
}

button:nth-child(2){
    color: ${props => (props.isSigninSelected === true ? `#b2b2b2` : `black`)};
    border-bottom: ${props => (props.isSigninSelected === true ? `1px solid lightgrey` : `3px solid black`)};
}

button {  
    border-style: none none solid;
     width: 100%; 
     background-color: transparent;
     font-family: ballinger, sans-serif;
     font-size: 14px;
     outline: currentcolor none medium;
     color: rgb(33, 39, 33);
   border-bottom: 1px solid lightgrey; 
     color: #b2b2b2;

     &:hover {
         cursor: pointer;
         color: black;
     }

     @media (max-width: 375px) {
        font-size: 12px;
      }
 }
`;

const PageComponent = styled.div`
display: flex;
`;

const ProfilePage = () => {
  const [pageShown, setPageShown] = useState('profile')
  const [isSigninSelected, setIsSigninSelected] = useState(true)


  function profile() {
    setPageShown('profile');
    setIsSigninSelected(true);
  }

  function accountSettings() {
    setPageShown('account');
    setIsSigninSelected(false);
  }

  //Show different components on menu clicks
  const pageShownComponent = () => {
    if (pageShown === 'profile') {
      return <Profile
        setPageShown={setPageShown}
        setIsSigninSelected={setIsSigninSelected}

      />
    } else if (pageShown === 'account') {
      return <Account setPageShown={setPageShown} setIsSigninSelected={setIsSigninSelected} />
    }
  }
  return (
    <Body>
      <Page>
        <Container>
          <Menu isSigninSelected={isSigninSelected}>
            <button onClick={profile}>Profil</button>
            <button onClick={accountSettings}>Kontoinställningar</button>
          </Menu>
          <PageComponent>{pageShownComponent()}</PageComponent>

        </Container>
      </Page>

    </Body>
  );
}

export default ProfilePage;