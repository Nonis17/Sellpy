import styled from 'styled-components'; 
import {FiMapPin} from 'react-icons/fi';
import {AiTwotonePhone} from 'react-icons/ai';
import {FaTruck} from 'react-icons/fa'; 

const Information = styled.div`
display: flex; 
flex-direction: column;
justify-content: center;
align-items: center; 
margin: 0 auto; 
margin-bottom: 40px;

img { 
  max-height: 500px; 
  max-width: 360px;

  @media (min-width: 768px) {
    max-height: 600px;
    max-width: 700px;
  }

  @media (max-width: 320px) {
    max-width: 300px;
  }
}

ul { 
  list-style: none;
  padding: 0px;
}

li {
  padding: 5px 0px 5px 0px;
  text-align: center;
  line-height: 1.6;
}
p{
  font-weight: bold;
  margin-left: 10px;
}

span {
  font-weight: bold;
}
`;



const LineHide = styled.span`
visibility: hidden;
`;

function Findus() {
    return (
      <>
      <Information>
     <h1>HITTA HIT</h1>
<img src="images/karta.webp" alt="karta vart vi befinner oss"/>
  
<ul>
  <li>
  <FiMapPin /> <br />
<span>Besöksadress:</span> <br/>
Frihamnsgatan 56, 115 56 Stockholm
</li>

<li><AiTwotonePhone /><br /> <span>Telefon Reparationslokalen</span> 
  <br /> 08-502 820 86</li>

<li>
  <FaTruck /> <br /><span>Kundtjänst för Transport:</span> 
<br />08-123 45 67 </li>

<p>Reparationslokalen är öppet följande tider. Det går bra att ringa oss under öppettiderna:</p>

<li>Måndag<LineHide>................................</LineHide>10:00-18:00</li>
<li>Onsdag<LineHide>................................</LineHide>10:00-18:00</li>
<li>Lördag<LineHide>.................................</LineHide>10:00-18:00</li>
</ul>

     </Information>
     </>
    );
  }
  
  export default Findus;