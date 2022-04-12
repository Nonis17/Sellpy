import React, { Component } from 'react';
import { withFirebase } from '../Firebase';
import styled from 'styled-components';

const Container = styled.div`
display: flex; 
flex-direction: column; 
background-color: #eeeeee;
padding: 15px 25px;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const Form = styled.form`
display: flex; 
flex-direction: column;
align-items: center;
margin-top: 20px;

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

@media (max-width: 428px) {
    width: 170px;
  }
}

button{
padding: 7px;
width: 150px;
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
    width: 170px;
  }
}
`;

const PasswordTitle = styled.div`
h3 {
    margin-top: 3px;
    margin-bottom: 3px;
}

p{ 
    margin: 0;
}
`;


const INITIAL_STATE = {
    passwordOne: '',
    passwordTwo: '',
    error: null,
};
class PasswordChangeForm extends Component {
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
    }
    onSubmit = event => {
        const { passwordOne } = this.state;
        this.props.firebase.doPasswordUpdate(passwordOne).then(() => {
            this.setState({ ...INITIAL_STATE });
        })
            .catch(error => {
                this.setState({ error });
            });

        event.preventDefault();
    };
    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });

    }; render() {
        const { passwordOne, passwordTwo, error } = this.state; const isInvalid =
            passwordOne !== passwordTwo || passwordOne === '';
        return (
            <Container>
            <PasswordTitle>
            <h3>Ändra lösenord</h3>
            <p>Fyll i ditt nya lösenord nedan</p>
            </PasswordTitle>
            <Form onSubmit={this.onSubmit}>
                <input
                    name="passwordOne" value={passwordOne} onChange={this.onChange} type="password" placeholder="Nytt lösenord"
                /> <input
                    name="passwordTwo" value={passwordTwo} onChange={this.onChange} type="password" placeholder="Bekräfta nytt lösenord"
                />
                <button disabled={isInvalid} type="submit">
                    Återställ mitt lösenord
    </button>
                {error && <p>{error.message}</p>} </Form>
      </Container>  );
    }
}
export default withFirebase(PasswordChangeForm);