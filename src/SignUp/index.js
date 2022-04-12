import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../Constants/routes';

import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  body {
    margin:0;
    padding:0;
    box-sizing:border-box;
  }
`

const Container = styled.div`
display: flex; 
flex-direction: column; 
justify-content: center;
margin: 0 auto; 

button {
    padding: 10px;
    margin: 10px;
    width: 300px;
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
  }
`;

const Form = styled.form`
display: flex;
flex-direction: column;
margin-top: 30px;

input {
border: 1px solid rgb(189, 189, 189);
border-radius: 0.1em;
padding: 8.7px 10px;
box-shadow: none;
font-size: 1em;
margin-bottom: 10px;

&:focus{
    outline: none;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
}

button {
    padding: 10px;
    margin: 10px;
    width: 300px;
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
    }

    p { 
      color: red; 
      text-align: center; 
      width: 300px;
    }
`;

const Checkboxes = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
margin-top: 15px;
margin-bottom: 20px;

input {
    border-radius: 0.2em;
    border: 1px solid #eeeeee;
    height: 1.2em;
    width: 1.2em;  
    align-items: center;
        
    &:hover { 
        cursor: pointer;
    }
}

label { 
    order: 2;
    font-size: 12px;
    margin: 5px
}

div { 
    
    display: flex;
    flex-direction: row;
    margin: 5px 0px 5px 0px; 

}
`;

const Links = styled.div`

display: flex; 
flex-direction: column;
margin-top: 20px;
justify-content: center;
align-items: center;

span {
    font-size: 12px;
    margin-top: 5px;
    padding: 5px;
    text-align: center;
}
`;


const SignUpPage = (props) => {
  function SwitchComponent() {
    props.setPageShown('signIn')
    props.setIsSigninSelected(true)
  }

  return (
    <>
      <GlobalStyle />
      <Container>
        <SignUpForm />
        <Links>
          <span><Link to='#' onClick={SwitchComponent}>Redan användare? Logga in här</Link></span>
          <span>Genom att skapa ett konto godkänner du <Link to='/termsandconditions'>Sellpys användarvillkor.</Link></span>
        </Links>
      </Container>
    </>
  );
}


const INITIAL_STATE = {
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
  bookings: null,
};

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email, passwordOne, bookings } = this.state;

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        this.props.firebase
          .user(authUser.user.uid)
          .set({
            email,
            bookings,
          })
          .then(() => {
            this.setState({ ...INITIAL_STATE });
            this.props.history.push(ROUTES.ACCOUNT);
          })
          .catch(error => {
            this.setState({ error });
          });
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onChangeCheckbox = event => {
    this.setState({ [event.target.name]: event.target.checked });
  };

  render() {

    function TypeOfError(error) {
      if (error === "auth/email-already-in-use") {
        return "Det finns redan en användare med den här epostadressen. Prova att logga in."
      } else if (error === "auth/invalid-email") {
        return "Ogiltig epostadress"
      }
    };

    const {
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '';

    return (
      <Form onSubmit={this.onSubmit}>
        <input
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email"
        />
        <input
          name="passwordOne"
          value={passwordOne}
          onChange={this.onChange}
          type="password"
          placeholder="Lösenord"
        />
        <input
          name="passwordTwo"
          value={passwordTwo}
          onChange={this.onChange}
          type="password"
          placeholder="Upprepa lösenord"
        />

        <button disabled={isInvalid} type="submit">
          Skapa konto
        </button>

        {error && <p>{TypeOfError(error.code)}</p>}


        <Checkboxes>
          <div>
            <label> Jag vill ta del av erbjudanden och kampanjer från Sellpy. </label>
            <input
              type="checkbox" optional />
          </div>

          <div>
            <label> Jag har läst och godkänner Sellpys datapolicy </label>
            <input
              type="checkbox" required />
          </div>
        </Checkboxes>
      </Form>
    );
  }
}

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);

const SignUpForm = withRouter(withFirebase(SignUpFormBase));

export default SignUpPage;

export { SignUpForm, SignUpLink };