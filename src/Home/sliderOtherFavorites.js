import React, { Component } from "react";
import Slider from "react-slick";
import styled from 'styled-components';


const ShopContainer = styled.div`
margin: 40px 60px;
@media (max-width: 600px) {
  margin: 10px 10px;
  }

h2 { 
    margin: 0;

  @media (max-width: 320px) {
    font-size: 14px;
   } 
}

p { 
  font-size: 10px;
  font-weight: bold;
  margin: 2px;

  @media (max-width: 320px) {
   font-size: 6px;
  } 
}

p:nth-child(3){ 
    font-weight: normal; 
    color: rgb(117, 117, 117);
margin-top: 4px;
margin-bottom: 4px;
}
`;


const GinaTricot = styled.div`
background-image: url("./otherfavoritepictures/ginatricotbyxafront.webp");
background-repeat: no-repeat;
background-position: center;
background-size: 100% auto;

width: 230px;
    height: 290px;

    @media (max-width: 320px) {
      width: 80px;
    height: 100px;
    }   
    
      @media (max-width: 428px) and (min-width: 321px) {
        width: 110px;
      height: 130px;
      }
    
      @media (max-width: 899px) and (min-width: 429px) {
        width: 120px;
      height: 160px;
      } 
    
      @media (max-width: 1066px) and (min-width: 900px) {
      width: 170px;
      height: 210px;
      } 

    &:hover {
        background-image: url("./otherfavoritepictures/ginatricotbyxaback.webp");
    }
`;

const Adidas = styled.div`
background-image: url("./otherfavoritepictures/adidasfront.webp");
background-repeat: no-repeat;
background-position: center;
background-size: 100% auto;
width: 230px;
    height: 290px;

    @media (max-width: 320px) {
      width: 80px;
    height: 100px;
    }  
      @media (max-width: 428px) and (min-width: 321px) {
        width: 110px;
      height: 130px;
      }
    
      @media (max-width: 899px) and (min-width: 429px) {
        width: 120px;
      height: 160px;
      } 
    
      @media (max-width: 1066px) and (min-width: 900px) {
      width: 170px;
      height: 210px;
      } 

    &:hover {
        background-image: url("./otherfavoritepictures/adidasback.webp");
    }
    }
`;

const OddMolly = styled.div`
background-image: url("./otherfavoritepictures/oddmollyfront.webp");
background-repeat: no-repeat;
background-position: center;
background-size: 100% auto;
width: 230px;
    height: 290px;

    @media (max-width: 320px) {
      width: 80px;
    height: 100px;
    }  
    
      @media (max-width: 428px) and (min-width: 321px) {
        width: 110px;
      height: 130px;
      }
    
      @media (max-width: 899px) and (min-width: 429px) {
        width: 120px;
      height: 160px;
      } 
    
      @media (max-width: 1066px) and (min-width: 900px) {
      width: 170px;
      height: 210px;
      } 

    &:hover {
        background-image: url("./otherfavoritepictures/oddmollyback.webp");
    }
    }
`;

const NLYtop = styled.div`
background-image: url("./otherfavoritepictures/nlytopfront.webp");
background-repeat: no-repeat;
background-position: center;
background-size: 100% auto;
width: 230px;
    height: 290px;

    @media (max-width: 320px) {
      width: 80px;
    height: 100px;
    }  
    
      @media (max-width: 428px) and (min-width: 321px) {
        width: 110px;
      height: 130px;
      }
    
      @media (max-width: 899px) and (min-width: 429px) {
        width: 120px;
      height: 160px;
      } 
    
      @media (max-width: 1066px) and (min-width: 900px) {
      width: 170px;
      height: 210px;
      } 

    &:hover {
        background-image: url("./otherfavoritepictures/nlytopback.webp");
    }
    }
`;

const VictoriaBeckhamSkirt = styled.div`
background-image: url("./otherfavoritepictures/vbskirt.webp");
background-repeat: no-repeat;
background-position: center;
background-size: 100% auto;
width: 230px;
    height: 290px;

    @media (max-width: 320px) {
      width: 80px;
    height: 100px;
    }  
    
      @media (max-width: 428px) and (min-width: 321px) {
        width: 110px;
      height: 130px;
      }
    
      @media (max-width: 899px) and (min-width: 429px) {
        width: 120px;
      height: 160px;
      } 
    
      @media (max-width: 1066px) and (min-width: 900px) {
      width: 170px;
      height: 210px;
      } 

    &:hover {
        background-image: url("./otherfavoritepictures/vbskirtback.webp");
    }
    }
`;


const JeanPascale = styled.div`
background-image: url("./otherfavoritepictures/jeanpascalefront.webp");
background-repeat: no-repeat;
background-position: center;
background-size: 100% auto;
width: 230px;
    height: 290px;

    @media (max-width: 320px) {
      width: 80px;
    height: 100px;
    }  
    
      @media (max-width: 428px) and (min-width: 321px) {
        width: 110px;
      height: 130px;
      }
    
      @media (max-width: 899px) and (min-width: 429px) {
        width: 120px;
      height: 160px;
      } 
    
      @media (max-width: 1066px) and (min-width: 900px) {
      width: 170px;
      height: 210px;
      } 

    &:hover {
        background-image: url("./otherfavoritepictures/jeanpascaleback.webp");
    }
    }
`;

const EmporioArmani = styled.div`
background-image: url("./otherfavoritepictures/emporiofront.webp");
background-repeat: no-repeat;
background-position: center;
background-size: 100% auto;
width: 230px;
    height: 290px;

    @media (max-width: 320px) {
      width: 80px;
    height: 100px;
    }  
    
      @media (max-width: 428px) and (min-width: 321px) {
        width: 110px;
      height: 130px;
      }
    
      @media (max-width: 899px) and (min-width: 429px) {
        width: 120px;
      height: 160px;
      } 
    
      @media (max-width: 1066px) and (min-width: 900px) {
      width: 170px;
      height: 210px;
      } 

    &:hover {
        background-image: url("./otherfavoritepictures/emporioback.webp");
    }
    }
`;


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        right: "-25px",
        display: "block",
        background: "#eeeeee",
        padding: "6px",
        margin: "5px",
        zIndex: "5",
        borderRadius: "5px",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        left: "-45px",
        display: "block",
        background: "#eeeeee",
        padding: "6px",
        margin: "5px",
        zIndex: "5",
        borderRadius: "5px",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",

      }}
      onClick={onClick}
    />
  );
}


class SliderOtherFavorites extends Component {
  render() {
    const settings = {
      arrows: true,
      infinite: true,
      speed: 300,
      slidesToShow: 5,
      slidesToScroll: 4,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1286,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5,
            infinite: true,
            arrows: true,
          }
        },
        {
          breakpoint: 1285,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            arrows: false,
          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 2,
            arrows: false
          }
        },
        {
          breakpoint: 428,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 2,
            arrows: false
          }
        }

      ]
    };
    return (
      <ShopContainer>
        <h2> Andras favoriter </h2>
        <p>Shoppa nu</p>
        <Slider {...settings}>

          <section>
            <GinaTricot></GinaTricot>
            <p>Gina Tricot</p>
            <p>Mjukisbyxor, Strl M</p>
            <p>75 SEK</p>
          </section>

          <section>
            <Adidas></Adidas>
            <p>Adidas</p>
            <p>Huvtröja, Strl 34-36</p>
            <p>100 SEK</p>
          </section>

          <section>
            <OddMolly></OddMolly>
            <p>Odd Molly</p>
            <p>Kofta, Strl M</p>
            <p>540 SEK</p>
          </section>

          <section>
            <NLYtop></NLYtop>
            <p>NLY top</p>
            <p>Omlottop, Strl S</p>
            <p>75 SEK</p>
          </section>


          <section>
            <VictoriaBeckhamSkirt></VictoriaBeckhamSkirt>
            <p>Victoria Beckham</p>
            <p>Kjol, Strl S</p>
            <p>380 SEK</p>
          </section>


          <section>
            <JeanPascale></JeanPascale>
            <p>Jean Pascale</p>
            <p>Kappa, Strl 34</p>
            <p>120 SEK</p>
          </section>


          <section>
            <EmporioArmani></EmporioArmani>
            <p>Emporio Armani</p>
            <p>Kofta, Strl 40</p>
            <p>200 SEK</p>
          </section>
        </Slider>
      </ShopContainer>
    );
  }
}

export default SliderOtherFavorites;