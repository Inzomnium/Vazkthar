import React from "react";
import styled from "styled-components";

import img1 from "../assets/Images/bgs/2.webp";
import img2 from "../assets/Images/aaa1.jpg";
import img3 from "../assets/Images/aaa2.jpg";
import GlitchEffect from "../components/GlitchEffect";





const images = [
  "/me/1.png",
  "/me/2.png",
  "/me/3.png",
  "/me/4.png",
  "/me/5.png",
  "/me/6.png",
  "/me/7.png",

];

const Section = styled.section`
  position: relative;
  min-height: 100vh;
  width: 80vw;
  display: flex;
  margin: 0 auto;

  @media (max-width: 48em) {
    width: 90vw;
  }
  @media (max-width: 30em) {
    width: 100vw;
  }
`;
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontBig};
  font-family: "Permanent Marker", cursive;
  font-weight: 300;

  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 5;

  @media (max-width: 64em) {
    font-size: ${(props) => `calc(${props.theme.fontBig} - 5vw)`};
    top: 0;
    left: 0;
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxxxl};
  }
`;
const Left = styled.div`
  width: 50%;
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 300;
  position: relative;
  z-index: 5;
  margin-top: 20%;
  .mail{ 
  color:red;
    }

  @media (max-width: 64em) {
    width: 80%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) !important;
    margin: 0 auto;

    padding: 2rem;
    font-weight: 600;

    backdrop-filter: blur(2px);
    background-color: ${(props) => `rgba(${props.theme.textRgba},0.4)`};
    border-radius: 20px;
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontmd};
  }
  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontsm};
    width: 70%;
  }
`;
const Right = styled.div`
  width: 50%;
  position: relative;
  background-image
  img {
    width: 100%;
    height: auto;
  }

  .small-img-1 {
    width: 40%;
    position: absolute;
    right: 95%;
    bottom: 10%;
  }
  .small-img-2 {
    width: 40%;
    position: absolute;
    left: 80%;
    bottom: 30%;
  }

  @media (max-width: 64em) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      height: 100vh;
      object-fit: cover;
    }
    .small-img-1 {
      width: 30%;
      height: auto;
      left: 5%;
      bottom: 10%;
    }
    .small-img-2 {
      width: 30%;
      height: auto;
      left: 60%;
      bottom: 20%;
    }
  }
`;

const About = () => {
  return (
    <Section id="fixed-target" className="about">
      <Title
        data-scroll
        data-scroll-speed="-2"
        data-scroll-direction="horizontal"
      >
        About Me
      </Title>
      <Left data-scroll data-scroll-sticky data-scroll-target="#fixed-target">
      Hello, my name is Sebastian Cofre, and I am an artist who explores the intersections between chaos, color, and imagination. Through vibrant patterns, abstract forms, and symbolic compositions, I create pieces that invite viewers to discover new meanings within the layers of color and texture. 
      <br />
      <br />
      My work is a constant dialogue between reality and creativity — a canvas where chaos bleeds into color and imagination cracks the ordinary. Welcome to my world of visual storytelling.
      Any contact or echoes you can reach me at <a className="mail" href="mailto:contact@vakzthar.com">contact@vakzthar.com</a>
      </Left>
      <Right style={{ backgroundImage: `url(${img1})`, backgroundSize: "cover", backgroundPosition: "center" }}>
      <GlitchEffect images={images}  />
        <img
          data-scroll
          data-scroll-speed="5"
          src={img2}
          className="small-img-1"
          alt="About Us"
        />
        <img
          data-scroll
          data-scroll-speed="-2"
          src={img3}
          alt="About Us"
          className="small-img-2"
        />
      </Right>
    </Section>
  );
};

export default About;
