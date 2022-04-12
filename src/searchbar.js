import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi'; 
 
const SearchBarSmallScreen = styled.div`
display: flex;
align-items: center;
margin: 0 auto;
padding: 0px 0px 0px 0px; 
position: relative;
margin-bottom: 20px;


@media (min-width: 429px) {
    display: none;
     }

     @media (max-width: 428px) {
        margin-top: 20px;
         }

input {
height:10px;
border-radius: 20px;
outline: none;
border: none;
width: 250px;
padding: 10px 10px 10px 40px;
background-color: #eeeeee; 
}
`;

const SearchIcon = styled.div`
position: absolute; 
margin-left: 5px;
margin-top: 2px;
z-index: 1;
`;

const ScreenReader = styled.span `
clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`; 

function SearchBar() {
    let iconStyles = { color: "black", fontSize: "1.3em", padding: "0.3em" };
    return (
      <>
<SearchBarSmallScreen>
<form>
<label htmlFor="header-search">
<ScreenReader>Vad vill du handla?</ScreenReader>
</label>
<input
type="text"
placeholder="Vad vill du handla?"/> 
</form> 
<SearchIcon><FiSearch style={iconStyles}/></SearchIcon>
</SearchBarSmallScreen>

</>
    );
  }
  
  export default SearchBar;