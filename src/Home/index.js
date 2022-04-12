
import styled from 'styled-components';
import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../searchbar';
import BannerPicture from '../BannerImages/bannerjoinery.webp';
import * as ROUTES from '../Constants/routes';
import SliderLooks from './sliderLooks';
import SliderCategories from './sliderCategories';
import SliderOtherFavorites from './sliderOtherFavorites';
import LogInPoster from './LogInPoster';
import { IoIosArrowForward } from 'react-icons/io';


const Container = styled.div`
 display: flex;
flex-direction: column;
align-items: center;  
`;

const Menu = styled.div`
display: flex;
flex-direction: row; 
justify-content: center;
background-color: #eeeeee;
box-shadow: 0.5px 0.5px #c3c3c3; 
margin-bottom: 40px;

p { 
 margin: 12px 20px; 
  font-weight: bold;
    font-size: 12px;

    @media (max-width: 390px) {
  margin: 12px 10px;
    }
  }
}
`;

const Banner = styled.div`
background-size: cover;
background-repeat: no-repeat;
background-image: url(${BannerPicture});
background-position: center;
width: 100%;
height: 500px;
display: flex;
align-items: center; 
flex-direction: column;
margin: 0 auto;
justify-content: center;

@media (max-width: 428px) and (min-width: 320px) {
  height: 350px;
  }

  h2{
    font-family: 'birthstone', cursive;
    color: #f3f3fa;
    font-size: 100px;
  margin-top: 30px; 
  margin: 0 auto;
  text-align: center;

  @media (max-width: 428px) {
font-size: 60px;
  }
  }
  
  P { 
    color: black;
    padding: 10px;
    font-size: 12px;
    background-color: #f3f3fa;
    line-height: 1.8;
    border-radius: 4px;
  
     @media (max-width: 428px) {
      width: 230px;
      padding: 5px;
      font-size: 8px;
      text-align: center;
    }
  }
  
  button {  
    color: black;
    background-color: #f3f3fa;
    outline: none;
    border: none;
    padding: 10px 30px;
    z-index: 2;
    border-radius: 4px;
    margin-top: 10px;
  font-weight: bold; 

    &:hover { 
      cursor: pointer;
      background-color: #eeeeee;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    @media (max-width: 428px) and (min-width: 320px) {
     padding: 10px 15px;
     font-size: 8px;
      }
  }
`;
const Page = styled.div`
`;

const Arrow = styled(IoIosArrowForward)`
height: 10px;
`;

function Home({ element }) {
  return (
    <Page ref={element}>
      <Container >
        <SearchBar />

        <Banner>
          <h2>Change for the better!</h2>
          <p>LÅNA REDSKAP FÖR ATT LAPPA, LAGA, ELLER LYFTA DINA EGNA SAKER I VÅR NYA REPARATIONSLOKAL. VÄLKOMMEN IN!</p>

          <Link to={ROUTES.STORE} aria-label="läs mer om sellpys reparationslokal"><button>Till reparationslokalen <Arrow /></button> </Link>
        </Banner>
      </Container>

      <Menu>
        <p>START</p>
        <p>KVINNA</p>
        <p>MAN</p>
        <p>BARN</p>
        <p>PRYLAR</p>
      </Menu>

      <SliderLooks />
      <SliderCategories />
      <SliderOtherFavorites />
      <LogInPoster />
    </Page>
  );
}

export default Home;
