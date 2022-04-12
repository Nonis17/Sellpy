import styled from 'styled-components';
import BannerPicture from './BannerImages/sellpybackground.webp';
import { useHistory } from 'react-router-dom';

const Body = styled.body`
height: 100vh;
`;

const Banner = styled.div`
background: cover;
background-repeat: no-repeat;
background-image: url(${BannerPicture});
width: 100%;
height: 500px;
display: flex;
align-items: center;
justify-content: center; 
flex-direction: column;
margin: 0 auto;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

h1 { 
    color: white;
}

p { 
  text-align: center;
  color: white;
  font-size: 20px;

  @media (max-width: 1024px) {
    font-size: 12px;
   width: 380px;
 }
   @media (max-width: 414px) {
     font-size: 12px;
    width: 280px;
  }
  @media (max-width: 320px) {
    width: 250px;
  } 
}

button {
  margin-top: 70px;
  padding: 10px;

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

const ErrorPage = () => {
  const history = useHistory();

  function onClick(){ 
    return history.goBack();   
  }

  return (
    <Body>
      <Banner>
        <h1>Hoppsan! Något gick visst fel </h1>
        <p>Prova igen</p>

        <button onClick={onClick}>Tillbaka</button>
      </Banner>
    </Body>
  );
}

export default ErrorPage;
