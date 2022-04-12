import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../Constants/routes';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { getError } from './validation';

const Body = styled.body`
height: 100vh;
`;

const Container = styled.div`
display: flex; 
flex-direction: column; 
justify-content: center;
margin: 0 auto; 
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
width: 300px;

&:focus{
    outline: none;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
}

p {
    color: red; 
    margin: 0;
    text-align: left;
}
p:nth-child(4) {
    color: red; 
    margin: 0;
    width: 300px;
    text-align: center;
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
`;

const Links = styled.div`
display: flex; 
flex-direction: column;
margin: 15px;
justify-content: center;
align-items: center;

span {
    margin-top: 5px;
    padding: 5px;
    text-align: center;
}
`;

const SignInPage = (props) => {

    function SwitchComponent() {
        props.setPageShown('signUp')
        props.setIsSigninSelected(false)
    }

    return (
        <>
            <Container>
                <SignInForm />

                <Links>
                    <span><Link to={ROUTES.PASSWORD_FORGET}>Glömt ditt lösenord?</Link></span>
                    <span>Inte användare? <Link to='#' onClick={SwitchComponent}>Skapa konto här</Link></span>
                </Links>
            </Container>
        </>
    );
};

const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
    emailError: null,
    passwordError: null,

};

class SignInFormBase extends Component {
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
    }
    onSubmit = event => {

        const [emailError, passwordError] = getError(this.state.email, this.state.password);

        if (emailError === null && passwordError === null) {

            const { email, password } = this.state;
            this.props.firebase.doSignInWithEmailAndPassword(email, password)
                .then(() => {
                    this.setState({ ...INITIAL_STATE });
                    this.props.history.goBack();
                })
                .catch(error => {
                    this.setState({ error });
                });

        } else {
            this.setState({
                emailError: emailError,
                passwordError: passwordError
            })
        }
        event.preventDefault();
    };
    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        const { email, password, error } = this.state;

        function TypeOfError(error) {
            if (error === "auth/user-not-found") {
                return "Det finns ingen användare registrerad med den epostadressen"
            } else if (error === "auth/wrong-password") {
                return "Felaktigt lösenord"
            } else if (error === "auth/internal-error") {
                return "Skriv in lösenord"
            }
        };

        return (
            <Body>
                <Form onSubmit={this.onSubmit}>
                    <input
                        name="email"
                        value={email}
                        onChange={this.onChange}
                        type="text"
                        placeholder="Email"
                    />
                    {this.state.emailError && <p>{this.state.emailError}</p>}

                    <input
                        name="password"
                        value={password}
                        onChange={this.onChange}
                        type="password"
                        placeholder="Lösenord" />

                    {this.state.passwordError && <p>{this.state.passwordError}</p>}

                    <button
                        type="submit">
                        Logga in
                    </button>

                    {error && <p>{TypeOfError(error.code)}</p>}
                    {error && console.log("Error code is: " + error.code)}
                </Form>

            </Body>
        );

    }
}

const SignInForm = withRouter(withFirebase(SignInFormBase));

export default SignInPage;
export { SignInForm };
