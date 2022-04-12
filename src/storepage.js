
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import BannerPicture from './BannerImages/sellpybackground.webp';
import { FaTruck } from 'react-icons/fa';
import { BiCalendar } from 'react-icons/bi';
import { FaWarehouse } from 'react-icons/fa';
import { createGlobalStyle } from 'styled-components';
import React, { useState } from 'react';
import TransportModal from './PopUp/transportModal';

const GlobalStyle = createGlobalStyle`
  body {
     background-color: #f3f5f7; 
  }
`

const PageHeader = styled.div`
background-image: url("./sellpyheader.webp");
width: 190px;
height: 60px;
background-repeat: no-repeat;
background-position: center;
background-size: 100% auto;
`;

const Banner = styled.div`
background: cover;
background-repeat: no-repeat;
background-image: url(${BannerPicture});
width: 100%;
height: 350px;
display: flex;
align-items: center;
justify-content: center; 
flex-direction: column;
margin: 0 auto;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
position: relative; 

h2 { 
  color: #f3f3fa;
}

div {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
}

P { 
  color: #f3f3fa;
  width: 300px;
  padding: 10px;
  line-height: 1.6;
 margin: 0;
 font-size: 12px;

  @media (max-width: 1024px) {
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
`;


const About = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 30px;

h3 {
  color: #0762C8;
  margin-bottom: 5px;
}

section { 
  min-height: 200px;
  position: relative;
  padding-left: 150px;
  border-radius: 6px;
  margin: 10px;
  padding-right: 25px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 4px 10px 0 rgba(0, 0, 0, 0.19);

  @media (max-width: 414px) {
    padding-left: 25px;
  }

  @media (min-width: 1024px) {
    width: 800px;
  }

  div{ 
   display: flex;
    flex-direction: row;
    align-items: center;

    @media (max-width: 414px) {
      display: none;
    }
  }
}

h5{
  margin-bottom: 0;
  color: #0762C8;
  font-size: 12px;

  @media (max-width: 375px) {
    font-size: 14px; 
  }
}

p{
  margin-top: 0;
  max-width: 900px;
  line-height: 1.8;
  font-size: 12px;
}

li { 
  padding: 5px;
}

button { 
  outline: none; 
  background: none; 
  border: none;
  cursor: pointer;
  margin: 0px 0px 20px 0px;
padding: 0;
text-decoration: underline;
 font-size: 12px; 
color: rgb(0, 49, 232);
}

`;


const Information = styled.div`
 display: flex; 
flex-direction: column;
align-items: center; 
justify-content: center; 
margin: 30px 0px 30px 0px;
padding: 20px;
border-radius: 3px;
max-width: 700px;
margin: 0 auto;


div { 
  display: flex;
  flex-direction: column;
  align-items: center;
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



function Store() {

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev);
  }



  let iconStyle = { color: "black", fontSize: "4em", padding: "0.5em", position: "absolute", left: 0, top: "30%" };
  let iconStyleCalendar = { color: "black", fontSize: "4em", padding: "0.5em", position: "absolute", left: 0, top: 30 };
  let iconStyleTransport = { color: "black", fontSize: "4em", padding: "0.5em", position: "absolute", left: 0, top: 50 };

  return (
    <>
      <GlobalStyle />
      <Banner>
        <PageHeader />
        <h2>Reparationslokalen</h2>
        <div><p>
          Vill du reparera eller göra om en gammal möbel eller andra saker som behöver nytt liv? Kanske sy om ett klädesplagg eller andra textilier? </p>

          <p>Här kan du låna vår reparationslokal med verktyg, samt vår syhörna med symaskiner med tillbehör. De finns även en hörna för ommålning.</p>
        </div>
      </Banner>


      <About>
        <section>
          <div> <FaWarehouse style={iconStyle} /></div>
          <h3>Om lokalen:</h3>
          <p>I vår lokal finns de alla de vanligt förekommande verktyg som en kan behöva för att bygga, laga eller reparera t.ex. möbler. Såna verktyg som man kanske inte alltid har hemma! Det finns även personal på plats som kan vara behjälpliga vid frågor eller funderingar. Lokalen är endast öppen för de som har en bokad tid den aktuella dagen.</p>
          <h5>Våra verktyg i träslöjden</h5><p>Bland annat har vi träklubbor med stämjärn och skölp, snickarhammare, hovtång, planhyvel, rundsåg, rasp och fil, täljknivar, skedknivar, dragknivar, tumstockar, olika träborrar, navare, mejslar, vinkelhakar, dragmått m.m. Om ni behöver skruv eller spik kan de finnas överblivna på plats, men ta gärna med egna. </p>
          <h5>Våra verktyg i syslöjden</h5><p>I vår syhörna finns de fem symaskiner, synålar, rundnålar, knappnålar, virknålar, sticknålar (med dubbla spetsar), sticknålar (för rundstickning), sax, måttband. Tråd och tyg får man ta med själv, vissa lämnar kvar överblivna trådar och tyger som finns på hyllan märkt "Varsågod att använda". </p>
          <p>Hör av dig till oss om du behöver veta om vi har ett specifikt verktyg på plats.  </p>
        </section>

        <section>
          <div> <BiCalendar style={iconStyleCalendar} /></div>
          <h3>Regler för bokningen:</h3>
          <p>Bokningen kan enbart göras online via vårt <Link to='/booking' aria-label="boka ny tid">bokningssystem</Link>.
            Där väljer du datum, tid och antalet personer som bokningen avser. Avbokning sker senast 24h innan bokad tid, vid utebliven närvaro eller sen avbokning debiteras du.
          Priset för att utnyttja reparationslokalen och använda utrustningen är ett fastpris på 200 SEK för två timmar. Detta gäller per person. Efter du har gjort bokningen finns de möjlighet att boka en Sellpy transport. Läs mer nedan.</p>
        </section>

        <section>
          <div> <FaTruck style={iconStyleTransport} /></div>
          <h3>Om transporten:</h3>
          <p>Hos oss kan man få hjälp att transportera sin vara/möbel till vår reparationslokal om man inte själv har möjligheten. För en avgift så kommer vi och hämtar upp dig och varan/möbeln så att ni är på plats till er bokade tid. Vi erbjuder transporthjälp inom en radie av fem mil. Kostnaden för transporten avser alltid tur- och retur, och har ett fastpris på 350 kronor. Först bokar du en tid i vårt bokningssystem, sedan kontaktar du Sellpys kundtjänst för att boka en transport. Bokningen sker alltid via telefon och utebliven körning debiteras, och återbetalas inte.</p>
          <button onClick={openModal}>Boka en Sellpy transport</button>

        </section>
      </About>

      <TransportModal showModal={showModal} setShowModal={setShowModal} />

      <Information>
        <div>
          <Link to='/booking'><button>BOKA TID</button></Link>
          <Link to='/findus'> <button>HITTA HIT</button></Link>
        </div>
      </Information>
  
    </>

    
  );
}

export default Store;