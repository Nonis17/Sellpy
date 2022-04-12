import styled from 'styled-components';
import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../Constants/routes';


const Container = styled.div`
 display: flex;
flex-direction: column;
align-items: center;  
margin-bottom: 100px;
margin-top: 40px;
`;

const Poster = styled.div`
background-color: #eeeeee;
width: 100%;
display: flex;
flex-direction: row;
justify-content: center; 
position: relative;

@media (max-width: 428px) {
flex-direction: column;
 } 
`;

const PosterPicture = styled.div`
@media (max-width: 428px) {
order: 1;
 }   

img { 
  width: 100%;
  height: 100%;
}
  
  `;

const LogIn = styled.div`
    display: flex;
    justify-content: center; 
    align-items: center;
    flex-direction: column;
    padding: 10px 0px;

@media (max-width: 428px) {
order: 2
 } 
  
    button {
      padding: 10px;
      
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

      @media (max-width: 320px) {
        width: 100px;

       } 
    }
  
    h1 { 
      width: 80%;
  text-align: center;
      line-height: 1.3;

      @media (max-width: 320px) {
        font-size: 14px;
       } 
    }
    img {
      margin-bottom: 10px;
   width: 70px; 
    height: 70px;   
    } 
  `;

function LogInPoster() {
  return (
    <>
      <Container >

        <Poster>
          <LogIn>
            <img src="./images/potteryplant.webp" alt="loginposterpotterypicture" />
            <h1>Logga in för en bättre upplevelse</h1>
            <Link to={ROUTES.SIGN_IN}><button>LOGGA IN</button> </Link>
          </LogIn>

          <PosterPicture>
            <img src="./images/loginposter.webp" alt="loginposterpicture" />
          </PosterPicture>
        </Poster>

      </Container>
    </>
  );
}

export default LogInPoster;