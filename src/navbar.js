import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FiHeart } from 'react-icons/fi';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FaWarehouse } from 'react-icons/fa';
import { GrMenu } from 'react-icons/gr';
import { FiSearch } from 'react-icons/fi';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { BsPerson } from 'react-icons/bs';
import useWindowDimensions from './windowsize';
import { useState } from 'react';
import { AuthUserContext } from './Session';
import * as ROUTES from './Constants/routes';

const Container = styled.div`
margin: 0;
padding: 0;
display: flex;
flex-direction: column;
position: ${props => props.isSticky ? "absolute" : "sticky"};
top: ${props => props.isSticky ? "0px" : "0px"};
left: ${props => props.isSticky ? "0px" : "0px"};
right: ${props => props.isSticky ? "0px" : "0px"};
z-index: 20;
`;

const Banner = styled.div`
background-color: #0762C8; 
margin: 0;
text-align: center;
color: white;
font-size: 12px;

@media (max-width: 414px) {
    font-size: 8px;
  }

span {  
    text-decoration: underline;
}
`;

const NavbarStyle = styled.nav`
font-family: ballinger, sans-serif;
background-color: #FFFFFF;
display: flex;
margin: 0 auto;
width: 100%;
border-bottom: 1px solid #eeeeee;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

}
`;

const LinksNav = styled.div`
display: flex;
flex-direction: row; 
justify-content: space-evenly;
align-items: center;

ul { 
    margin: 0; 
    padding: 0;
    display: flex;
flex-direction: row; 
justify-content: space-evenly;
align-items: center;
}

h1 { 
    color: black;
    text-decoration: none;
    margin: 0px 10px;

    @media (max-width: 375px) {
        font-size: 18px;
      }
}

     li:nth-child(7),
     li:nth-child(9){
                  &: hover{
            cursor: pointer;
            background-color: #eeeeee;  

            @media (max-width: 428px) {
                background-color: white;
              }
        }
         }
`

const LinkList = styled.li`
 list-style: none;
 text-decoration: none;
padding: ${props => props.icon ? "15px 7px" : "0px"};

@media (min-width: 1199px) {
    padding: ${props => props.icon ? "15px" : "0px"};
    }

& * {
color: black; 
text-decoration: none;
}

@media (max-width: 414px) {
    padding: 2px;
    }

span { 
 font-size: 12px;
 font-weight: bold;

         @media (max-width: 768px) {
           display: none;
           }
}
`;


const SearchBar = styled.div`
display: flex;
padding: 0px 0px 0px 0px; 
position: relative;

@media (max-width: 700px) {
  display: none;
  }

input {
height:20px;
border-radius: 20px;
outline: none;
border: none;
width: ${props => (props.isBig ? `350px` : `200px`)};
padding: 10px 60px 10px 50px;
background-color: #f2f2f2; 
margin-left: 40px;
margin-right: 60px;

    @media (min-width: 415px) {
        margin: 0px 5px 0px 5px;
         }
}
`;

const SearchIcon = styled.div`
position: absolute; 
margin-left: 10px; 
margin-top: 2px;
z-index: 1;

@media (width: 768px) {
        margin-left: 15px;
     }
`;

const ScreenReader = styled.span`
clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`;


const Buy = styled.div`
margin: 0px 0px 0px 10px;
border-left: 1px solid #dbdbdb;
border-right: 1px solid #dbdbdb;
padding: 24px 15px 24px 15px;
width: 70px;
text-align: center;

@media (max-width: 1000px) {
    display: none;
    }
`;
const Sell = styled.div`
margin: 0px 10px 0px 0px;
border-right: 1px solid #dbdbdb;
padding: 24px 15px 24px 15px;
width: 70px;
text-align: center;

@media (max-width: 1000px) {
    display: none;
    }
`;

const Sellnav = styled.div`
display: flex;
flex-direction: row; 
border-left: 1px solid #dbdbdb;
margin-left: 35px;
align-items: center; 
padding: 22px 5px 22px 5px;
font-size: 12px;

@media (max-width: 375px) and (min-width: 321px) {
    margin-left: 27px;
        }

@media (max-width: 375px) {
    display: none;
    }

    @media (min-width: 700px) {
        display: none;
        }
`;


const Navbar = ({ sticky }) => {
    const { width } = useWindowDimensions();
    const [shownPage, setShownPage] = useState('main')

    function IconSize(marked) {
        if ({ width } > 1200) {
            let iconStyles = { fill: marked ? "#0762C8" : "black", fontSize: "1.8em", padding: "0.3em", };
            return iconStyles;
        } else {
            let iconStyles = { fill: marked ? "#0762C8" : "black", fontSize: "1.3em", padding: "0.3em", };
            return iconStyles;
        };
    };

    function SearchBarSize() {
        if (window.innerWidth > 1100) {
            return true;
        } else {
            return false;
        }
    }

    let iconSearchStyle = { color: "black", fontSize: "1.3em", padding: "0.3em", };
    let hamburgerMenu = { color: "black", fontSize: "2em", padding: "0.1em" };

    return (
        <Container isSticky={sticky}>
            <Banner>
                <p>Fri frakt på din första order med koden FRIFRAKT. <span>Läs mer</span></p>
            </Banner>


            <NavbarStyle>
                <LinksNav>
<ul>
                    <LinkList>
                        <GrMenu style={hamburgerMenu} />
                    </LinkList>

                    <LinkList><Link to='/' onClick={() => setShownPage('main')}>
                     
                       <h1>Sellpy</h1> 
                    </Link></LinkList>

                    <Buy><LinkList><span>HANDLA</span></LinkList></Buy>
                    <Sell><LinkList><span>SÄLJ</span></LinkList></Sell>


                    <SearchBar isBig={SearchBarSize({ width })}>
                        <form>
                            <label htmlFor="header-search">
                                <ScreenReader>Vad vill du handla?</ScreenReader>
                            </label>
                            <input
                                type="text"
                                placeholder="Vad vill du handla?" />
                        </form>
                        <SearchIcon><FiSearch style={iconSearchStyle} /></SearchIcon>
                    </SearchBar>


                    <LinkList icon><FiHeart style={IconSize(false)} /></LinkList>

                    <AuthUserContext.Consumer>
                        {authUser =>
                            authUser ? (
                                <NavigationAuth shownPage={shownPage} setShownPage={setShownPage} />
                            ) : (
                                <NavigationNonAuth shownPage={shownPage} setShownPage={setShownPage} />
                            )

                        }
                    </AuthUserContext.Consumer>

                    <LinkList icon><AiOutlineShoppingCart style={IconSize(false)} /></LinkList>

                    <LinkList icon><Link aria-label="sellpy reparationslokal" to={ROUTES.STORE} onClick={() => setShownPage('store')}>
                        <FaWarehouse style={IconSize(shownPage === 'store')} /></Link></LinkList>
                        </ul>

                    <Sellnav>
                        <HiOutlineShoppingBag style={IconSize(false)} />
                        <span>SÄLJ</span>
                    </Sellnav>
                </LinksNav>
            </NavbarStyle>
        </Container>
    );
}

const NavigationAuth = (props) => {
    const { width } = useWindowDimensions();

    function IconSize(marked) {
        if ({ width } >= 1200) {
            let iconStyles = { fill: marked ? "#0762C8" : "black", fontSize: "1.8em", padding: "0.3em", };
            return iconStyles;
        } else {
            let iconStyles = { fill: marked ? "#0762C8" : "black", fontSize: "1.3em", padding: "0.3em", };
            return iconStyles;
        };
    };

    return (
        <>
            <LinkList icon>
                <Link aria-label="ditt konto" to={ROUTES.ACCOUNT} onClick={() => props.setShownPage('signIn')}>
                    <BsPerson style={IconSize(props.shownPage === 'signIn')} /></Link></LinkList>
        </>
    )
};

const NavigationNonAuth = (props) => {
    const { width } = useWindowDimensions();

    function IconSize(marked) {
        if ({ width } >= 1200) {
            let iconStyles = { fill: marked ? "#0762C8" : "black", fontSize: "1.8em", padding: "0.3em", };
            return iconStyles;
        } else {
            let iconStyles = { fill: marked ? "#0762C8" : "black", fontSize: "1.3em", padding: "0.3em", };
            return iconStyles;
        };
    };

    return (
        <>
            <LinkList icon>
                <Link aria-label="logga in på ditt konto" to={ROUTES.SIGN_IN} onClick={() => props.setShownPage('signIn')}>
                    <BsPerson style={IconSize(props.shownPage === 'signIn')} /></Link></LinkList>
        </>
    )
};

export default Navbar;