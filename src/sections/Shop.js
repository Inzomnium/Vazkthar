import React, { useState, useRef, useLayoutEffect } from 'react';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import styled from "styled-components";
import Modal from "../components/Modal";

import imgbg from "../assets/Images/bgs/2.webp";
import img1 from "../assets/Images/paintings/dusk.webp";
import img2 from "../assets/Images/paintings/parentsandchild.webp";
import img3 from "../assets/Images/paintings/priestess.webp";
import img4 from "../assets/Images/paintings/the world.webp";
import img5 from "../assets/Images/paintings/Tango.webp";
import img6 from "../assets/Images/paintings/elephant.webp";
import img7 from "../assets/Images/7.webp";
import img8 from "../assets/Images/8.webp";
import img9 from "../assets/Images/9.webp";
import img10 from "../assets/Images/10.webp";
import Product from "../components/Product";

const Section = styled.section`
  min-height: 100vh;
  height: auto;
  width: 100vw;
  margin: 0 auto;
  overflow: hidden;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  position: relative;
`;
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: "Permanent Marker", cursive;
  font-weight: 300;
  text-shadow: 1px 1px 1px ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 11;

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl};
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const Left = styled.div`
  width: 35%;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};

  min-height: 100vh;
  z-index: 5;

  position: fixed;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: ${(props) => props.theme.fontlg};
    font-weight: 300;
    width: 80%;
    margin: 0 auto;
  }

  @media (max-width: 64em) {
    p {
      font-size: ${(props) => props.theme.fontmd};
    }
  }

  @media (max-width: 48em) {
    width: 40%;
    p {
      font-size: ${(props) => props.theme.fontsm};
    }
  }

  @media (max-width: 30em) {
    p {
      font-size: ${(props) => props.theme.fontxs};
    }
  }
`;
const Right = styled.div`
  position: absolute;
  left: 35%;
  padding-left: 30%;
  min-height: 100vh;

  background-color: ${(props) => props.theme.grey};
  /* width: 65%; */
  display: flex;
  justify-content: flex-start;
  align-items: center;

  h1 {
    width: 5rem;
    margin: 0 2rem;
  }
  .img-base {
    background:none;
    border:none;
  }
  .img-base h2 {
    font-weight: 100;
    font-size: 1.8em;
    margin-top: 0.5em;
  }
  .img-base img {
    border: 2px #202020 solid;
  }
`;





const Shop = () => {
  gsap.registerPlugin(ScrollTrigger);
  const [modalData, setModalData] = useState({ show: false, img: '', title: '' });
  const openModal = (img, title) => {
    setModalData({ show: true, img, title });
  };

  const closeModal = () => {
    setModalData({ show: false, img: '', title: '' });
  };
  const ref = useRef(null);
  const horizontalRef = useRef(null);

  useLayoutEffect(() => {
    if (!ref.current || !horizontalRef.current) return;
  
    let element = ref.current;
    let scrollingElement = horizontalRef.current;
  
    let pinWrapWidth = scrollingElement.offsetWidth;
  
    let t1 = gsap.timeline();
  
    setTimeout(() => {
      if (!element || !scrollingElement) return; // Verifica nuevamente antes de aplicar GSAP
  
      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: pinWrapWidth,
          scroller: ".shop-scroller", // locomotive element
          scrub: true,
          pin: true,
        },
        height: `${scrollingElement.scrollWidth}px`,
        ease: "none",
      });
  
      t1.to(scrollingElement, {
        scrollTrigger: {
          trigger: scrollingElement,
          start: "top top",
          end: pinWrapWidth,
          scroller: ".shop-scroller",
          scrub: true,
        },
        x: -pinWrapWidth,
        ease: "none",
      });
  
      ScrollTrigger.refresh();
    }, 1000);
  
    return () => {
      if (t1) t1.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <Section ref={ref} id="shop" style={{ backgroundImage: `url(${imgbg})`, backgroundSize: "cover", backgroundPosition: "center" }}>
      <Title data-scroll data-scroll-speed="-1">
        My Art
      </Title>
      <Left>
        <p>
        My artwork is a vibrant exploration of color, form, and emotion. Blending elements of abstraction, symbolism, and figurative expression, I seek to create visual stories that evoke both the familiar and the enigmatic. 
        <br />
        <br />
        Through intricate patterns, dynamic compositions, and bold contrasts, each piece captures a moment of connection, spirituality, or introspection. My work draws inspiration from folk art, surrealism, and contemporary concepts, inviting viewers to find their own narratives within the layers of color and texture."
        </p>
      </Left>
      <Right ref={horizontalRef}>
      <Product img={img1} title="The Dusk" openModal={openModal} />
        <Product img={img2} title="Parents and descendants" openModal={openModal} />
        <Product img={img3} title="The faceless devotee" openModal={openModal} />
        <Product img={img4} title="The World in my eyes" openModal={openModal} />
        <Product img={img5} title="Tango for one" openModal={openModal} />
        <Product img={img6} title="Elephants" openModal={openModal} />
        <Product img={img7} title="Lorem" openModal={openModal} />
        <Product img={img8} title="Lorem" openModal={openModal} />
        <Product img={img9} title="Lorem" openModal={openModal} />
        <Product img={img10} title="Lorem" openModal={openModal} />
      </Right>
      <Modal img={modalData.img} title={modalData.title} showModal={modalData.show} closeModal={closeModal} />
    </Section>
  );
};

export default Shop;
