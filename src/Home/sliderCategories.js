import React, { Component } from "react";
import Slider from "react-slick";
import styled from 'styled-components';


const ShopContainer = styled.div`
margin: 40px 60px;

@media (max-width: 600px) {
  margin: 10px 10px;
  }

 img { 
  width: 230px;
  height: 287px;

  &:hover {
    opacity: 0.8;
  }

 @media (max-width: 320px) {
    width: 80px;
  height: 100px;
  }  

  @media (max-width: 428px) and (min-width: 321px) {
    width: 104px;
  height: 130px;
  }
  @media (max-width: 899px) and (min-width: 429px) {
    width: 128px;
  height: 160px;
  } 

  @media (max-width: 1066px) and (min-width: 900px) {
  width: 168px;
  height: 210px;
  }  
} 

h2 { 
  @media (max-width: 320px) {
    font-size: 14px;
   } 
}

p { 
  font-size: 10px;
  font-weight: bold;

  @media (max-width: 320px) {
    font-size: 6px;
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
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
      }}
      onClick={onClick}
    />
  );
}


class SliderPictures extends Component {
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
        <h2> Populära kategorier</h2>
        <Slider {...settings}>


          <div>
            <img sizes="(min-width: 776px) 20vw, 40vw" srcSet="./categorypictures/jackor.webp 320w, ./categorypictures/jackor.webp 414w, ./categorypictures/jackor.webp 640w, ./categorypictures/jackor.webp 768w, ./categorypictures/jackor.webp 848w, ./categorypictures/jackor.webp 1024w, ./categorypictures/jackor.webp 1366w," src="./categorypictures/jackor.webp" alt="Kategori jackor" />
            <p>Jackor</p>
          </div>


          <div>
            <img sizes="(min-width: 776px) 20vw, 40vw" srcSet="./categorypictures/skor.webp 320w, ./categorypictures/skor.webp 414w, ./categorypictures/skor.webp 640w, ./categorypictures/skor.webp 768w, ./categorypictures/skor.webp 848w, ./categorypictures/skor.webp 1024w, ./categorypictures/skor.webp 1366w," src="./categorypictures/skor.webp" alt="Kategori skor" />
            <p>Skor</p>
          </div>

          <div>
            <img sizes="(min-width: 776px) 20vw, 40vw" srcSet="./categorypictures/klanningar.webp 320w, ./categorypictures/klanningar.webp 414w, ./categorypictures/klanningar.webp 640w, ./categorypictures/klanningar.webp 768w, ./categorypictures/klanningar.webp 848w, ./categorypictures/klanningar.webp 1024w, ./categorypictures/klanningar.webp 1366w," src="./categorypictures/klanningar.webp" alt="Kategori klänningar" />
            <p>Klänningar</p>
          </div>

          <div>
            <img sizes="(min-width: 776px) 20vw, 40vw" srcSet="./categorypictures/boots.webp 320w, ./categorypictures/boots.webp 414w, ./categorypictures/boots.webp 640w, ./categorypictures/boots.webp 768w, ./categorypictures/boots.webp 848w, ./categorypictures/boots.webp 1024w, ./categorypictures/boots.webp 1366w," src="./categorypictures/boots.webp" alt="Kategori boots" />
            <p>Boots</p>
          </div>


          <div>
            <img sizes="(min-width: 776px) 20vw, 40vw" srcSet="./categorypictures/overdelar.webp 320w, ./categorypictures/overdelar.webp 414w, ./categorypictures/overdelar.webp 640w, ./categorypictures/overdelar.webp 768w, ./categorypictures/overdelar.webp 848w, ./categorypictures/overdelar.webp 1024w, ./categorypictures/overdelar.webp 1366w," src="./categorypictures/overdelar.webp" alt="Kategori överdelar" />

            <p>Överdelar</p>
          </div>


          <div>
            <img sizes="(min-width: 776px) 20vw, 40vw" srcSet="./categorypictures/trenchcoats.webp 320w, ./categorypictures/trenchcoats.webp 414w, ./categorypictures/trenchcoats.webp 640w, ./categorypictures/trenchcoats.webp 768w, ./categorypictures/trenchcoats.webp 848w, ./categorypictures/trenchcoats.webp 1024w, ./categorypictures/trenchcoats.webp 1366w," src="./categorypictures/trenchcoats.webp" alt="Kategori trenchcoats" />

            <p>Trenchcoats</p>
          </div>


          <div>
            <img sizes="(min-width: 776px) 20vw, 40vw" srcSet="./categorypictures/accessoarer.webp 320w, ./categorypictures/accessoarer.webp 414w, ./categorypictures/accessoarer.webp 640w, ./categorypictures/accessoarer.webp 768w, ./categorypictures/accessoarer.webp 848w, ./categorypictures/accessoarer.webp 1024w, ./categorypictures/accessoarer.webp 1366w," src="./categorypictures/accessoarer.webp" alt="Kategori accessoarer" />


            <p>Accessoarer</p>
          </div>

          <div>
            <img sizes="(min-width: 776px) 20vw, 40vw" srcSet="./categorypictures/inredning.webp 320w, ./categorypictures/inredning.webp 414w, ./categorypictures/inredning.webp 640w, ./categorypictures/inredning.webp 768w, ./categorypictures/inredning.webp 848w, ./categorypictures/inredning.webp 1024w, ./categorypictures/inredning.webp 1366w," src="./categorypictures/inredning.webp" alt="Kategori inredning" />

            <p>Inredning</p>
          </div>

          <div>
            <img sizes="(min-width: 776px) 20vw, 40vw" srcSet="./categorypictures/hem.webp 320w, ./categorypictures/hem.webp 414w, ./categorypictures/hem.webp 640w, ./categorypictures/hem.webp 768w, ./categorypictures/hem.webp 848w, ./categorypictures/hem.webp 1024w, ./categorypictures/hem.webp 1366w," src="./categorypictures/hem.webp" alt="Kategori hem och hushåll" />
            <p>Hem & hushåll</p>
          </div>

          <div>
            <img sizes="(min-width: 776px) 20vw, 40vw" srcSet="./categorypictures/skonhet.webp 320w, ./categorypictures/skonhet.webp 414w, ./categorypictures/skonhet.webp 640w, ./categorypictures/skonhet.webp 768w, ./categorypictures/skonhet.webp 848w, ./categorypictures/skonhet.webp 1024w, ./categorypictures/skonhet.webp 1366w," src="./categorypictures/skonhet.webp" alt="Kategori skönhet" />


            <p>Skönhet</p>
          </div>

        </Slider>
      </ShopContainer>
    );
  }
}

export default SliderPictures