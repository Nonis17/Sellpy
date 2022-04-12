import styled from 'styled-components'; 
import {AiOutlineCopyrightCircle} from 'react-icons/ai';
import {FiMapPin} from 'react-icons/fi';



const Footer = styled.footer `
height:80px;
background-color: black; 
color: white;
padding: 20px;

@media (max-width: 320px) {
  height: 50px;
  }

p{ 
 text-align:center; 
  font-weight: bold;
  font-size: 10px;

  @media (max-width: 320px) {
    font-size: 8px;
    }
}
`;

function TheFooter() {
    return (
 
       <Footer>
       <p><FiMapPin /> Sverige | Logga in</p>
       <p><AiOutlineCopyrightCircle /> Sellhelp AB | Frihamnsgatan 56, 115 56 Stockholm</p>
       <p>Säljavtal | Köpavtal | Datapolicy | Cookiepolicy</p>
       </Footer>

    )
};

export default TheFooter;