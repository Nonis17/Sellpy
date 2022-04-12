import styled from 'styled-components';
import { useState } from 'react'
import SignInForm from '../SignIn';
import SignUp from '../SignUp';

const Page = styled.div`
display: flex; 
justify-content: center;
align-items: center;
margin-top: 30px;
`;

const Container = styled.div`
max-width: 30em;
padding: 1em;

h1 { 
    font-weight: bold; 
    font-size: 38px;
    text-align: left;
    margin: 20px 10px 10px 10px;
  
    @media (max-width: 414px) {
        font-size: 26px;
     }
}

p { 
margin: 10px;
font-size: 12px;
line-height: 1.5;
}

button {
    padding: 15px;
}
`;

const Menu = styled.div`
display: flex;
flex-direction: row;

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

const SignIn = () => {
  const [pageShown, setPageShown] = useState('signIn')
  const [isSigninSelected, setIsSigninSelected] = useState(true)

  function signIn() {
    setPageShown('signIn');
    setIsSigninSelected(true);
  }

  function signUp() {
    setPageShown('signUp');
    setIsSigninSelected(false);
  }

  //Show different components on menu clicks
  const pageShownComponent = () => {
    if (pageShown === 'signIn') {
      return <SignInForm
        setPageShown={setPageShown}
        setIsSigninSelected={setIsSigninSelected}

      />
    } else if (pageShown === 'signUp') {
      return <SignUp setPageShown={setPageShown} setIsSigninSelected={setIsSigninSelected} />
    }
  }

  return (
    <>
      <Page>
        <Container>
          <Menu isSigninSelected={isSigninSelected}>
            <button onClick={signIn}>Logga in</button>
            <button onClick={signUp}>Skapa konto</button>
          </Menu>

          <h1>Välkommen till Sellpy!</h1>
          <p>Vi hjälper privatpersoner och företag att sälja det de inte längre använder! Logga in eller skapa ett konto för att komma igång med att både sälja och handla.</p>
          <PageComponent>{pageShownComponent()}</PageComponent>
        </Container>
      </Page>
    </>
  );
}

export default SignIn;