import React, { Component } from "react";
import Slider from "react-slick";
import styled from 'styled-components';

//https://react-slick.neostack.com/docs/example/custom-slides

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
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",

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
            slidesToShow: 6,
            slidesToScroll: 6,
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
        <h2> Shop the look! </h2>
        <Slider {...settings}>

          <div>
            <img sizes="(min-width: 776px) 20vw, 40vw" srcSet="./images/look1.230x287.webp 320w, ./images/look1.230x287.webp 414w, ./images/look1.230x287.webp 640w, ./images/look1.230x287.webp 768w, ./images/look1.230x287.webp 848w, ./images/look1.230x287.webp 1024w, ./images/look1.230x287.webp 1366w," src="./images/look1.230x287.webp" alt="shop the look shades of blue" />
            <p>Shades of blue</p>
          </div>

          <div>
            <img sizes="(min-width: 776px) 20vw, 40vw" srcSet="./images/look2.230x287.webp 320w, ./images/look2.230x287.webp 414w, ./images/look2.230x287.webp 640w, ./images/look2.230x287.webp 768w, ./images/look2.230x287.webp 848w, ./images/look2.230x287.webp 1024w, ./images/look2.230x287.webp 1366w," src="./images/look2.230x287.webp" alt="shop the look maxed out" />
            <p>Maxed out</p>
          </div>

          <div>
            <img sizes="(min-width: 776px) 20vw, 40vw" srcSet="./images/look3.230x287.webp 320w, ./images/look3.230x287.webp 414w, ./images/look3.230x287.webp 640w, ./images/look3.230x287.webp 768w, ./images/look3.230x287.webp 848w, ./images/look3.230x287.webp 1024w, ./images/look3.230x287.webp 1366w," src="./images/look3.230x287.webp" alt="shop the look glossy savannah" />
            <p>Glossy savannah</p>
          </div>

          <div>
            <img sizes="(min-width: 776px) 20vw, 40vw" srcSet="./images/look4.230x287.webp 320w, ./images/look4.230x287.webp 414w, ./images/look4.230x287.webp 640w, ./images/look4.230x287.webp 768w, ./images/look4.230x287.webp 848w, ./images/look4.230x287.webp 1024w, ./images/look4.230x287.webp 1366w," src="./images/look4.230x287.webp" alt="shop the look pattern bonanza" />
            <p>Pattern bonanza</p>
          </div>

          <div>
            <img sizes="(min-width: 776px) 20vw, 40vw" srcSet="./images/look5.230x287.webp 320w, ./images/look5.230x287.webp 414w, ./images/look5.230x287.webp 640w, ./images/look5.230x287.webp 768w, ./images/look5.230x287.webp 848w, ./images/look5.230x287.webp 1024w, ./images/look5.230x287.webp 1366w," src="./images/look5.230x287.webp" alt="shop the look sharp as chalk" />
            <p>Sharp as chalk</p>
          </div>

          <div>
            <img sizes="(min-width: 776px) 20vw, 40vw" srcSet="./images/look6.230x287.webp 320w, ./images/look6.230x287.webp 414w, ./images/look6.230x287.webp 640w, ./images/look6.230x287.webp 768w, ./images/look6.230x287.webp 848w, ./images/look6.230x287.webp 1024w, ./images/look6.230x287.webp 1366w," src="./images/look6.230x287.webp" alt="shop the look pink clouds" />
            <p>Pink clouds</p>
          </div>

          <div>
            <img sizes="(min-width: 776px) 20vw, 40vw" srcSet="./images/look7.230x287.webp 320w, ./images/look7.230x287.webp 414w, ./images/look7.230x287.webp 640w, ./images/look7.230x287.webp 768w, ./images/look7.230x287.webp 848w, ./images/look7.230x287.webp 1024w, ./images/look7.230x287.webp 1366w," src="./images/look7.230x287.webp" alt="shop the look olive garden" />
            <p>Olive garden</p>
          </div>

        </Slider>
      </ShopContainer>
    );
  }
}

export default SliderPictures