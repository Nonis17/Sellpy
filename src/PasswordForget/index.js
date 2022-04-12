import React, { Component } from 'react';
import { withFirebase } from '../Firebase';
import styled from 'styled-components';
import { getError } from '../SignIn/validation';

const Container = styled.div`
display: flex;
flex-direction: column;
padding: 30px;
align-items: center;

p{ 
    font-weight: bold;
}
`;


const Form = styled.form`
display: flex;
flex-direction: column;


input {
border: 1px solid rgb(189, 189, 189);
border-radius: 0.1em;
padding: 8.7px 10px;
box-shadow: none;
flex-grow: 1;
font-family: inherit;
font-size: 1em;
background-color: white;


&:focus{
    outline: 2px solid black;
}
}

span {
    color: red; 
    text-align: left;
    margin-top: 5px;
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

const PasswordForgetPage = () => {
    return (
        <>
            <Container>
                <p>Fyll i den emailadress du använde när du skapade ditt konto</p>
                <PasswordForgetForm />
            </Container>
        </>
    );
}


const INITIAL_STATE = {
    email: '',
    error: null,
    emailError: null,
};

class PasswordForgetFormBase extends Component {
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
    }

    onSubmit = event => {
        const [emailError] = getError(this.state.email);

        if (emailError === null) {

            const { email } = this.state;
            this.props.firebase.doPasswordReset(email).then(() => {
                this.setState({ ...INITIAL_STATE });
            })
                .catch(error => {
                    this.setState({ error });
                });

        } else {
            this.setState({
                emailError: emailError,
            })
        }

        event.preventDefault();
    };

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }; render() {
        return (
            <Form onSubmit={this.onSubmit}>
                <input
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Email"
                />
                {this.state.emailError && <span>{this.state.emailError}</span>}


                <button
                    type="submit">
                    ÅTERSTÄLL MITT LÖSENORD
                </button>
            </Form>
        );
    }
}


export default PasswordForgetPage;

const PasswordForgetForm = withFirebase(PasswordForgetFormBase);

export { PasswordForgetForm };