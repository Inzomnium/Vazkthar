import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  touch-action: none;
  overflow: hidden;

  width: 100vw;
  height: 100vh;

  z-index: 6;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};

  svg {
    width: 10vw;
    height: auto;
    overflow: visible;
    stroke-linejoin: round;
    stroke-linecap: round;

    g {
      path {
        stroke: ${(props) => props.theme.text};
      }
    }
  }

  @media (max-width: 48em) {
    svg {
      width: 20vw;
    }
  }
`;

const Text = styled(motion.span)`
  font-size: ${(props) => props.theme.fontxl};
  color: ${(props) => props.theme.text};
  padding-top: 0.5rem;

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontlg};
  }
`;

const textVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,

    transition: {
      duration: 1,
      yoyo: Infinity, // repeats infinite times
      ease: "easeInOut",
    },
  },
};

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,

    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

const Loader = () => {
  return (
    <Container
      initial={{
        y: 0,
        opacity: 1,
      }}
      exit={{
        y: "100%",
        opacity: 0,
      }}
      transition={{
        duration: 2,
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        enableBackground="new 0 0 24 24"
        height="48px"
        viewBox="0 0 113.4 100.4"
        width="48px"
        fill="none"
      >


         <linearGradient id="animation">
        <stop offset="0" stop-color="white">
            <animate
                fill-opacity="1"
                dur="1s"
                attributeName="offset"
                fill="freeze"
                begin="2s"
                from="0"
                to="1"
                
            />
        </stop>
        <stop offset="0" stop-opacity="0">
            <animate                
                dur="1s"
                attributeName="offset"
                fill-opacity="1"
                begin="2s"
                from="0"
                to="1"
            />
        </stop>
    </linearGradient>
       
        <g 
        stroke-width="1"
        fill="url(#animation)"
        
        >
        
          <motion.path
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            classname="cls-1"
            d="M33.5,40.6c0.1,0.1,0.3,0.2,0.5,0.3c1.5,0.3,2.9,0.7,4.4,1l4.1,0.9l4.9,1.1l5.4,1.2c1.5,0.3,2.9,0.6,4.4,0.9
            c0.3,0.1,0.5,0.2,0.8,0.2v0.1c-0.3,0.2-0.5,0.4-0.8,0.6l-2.7,1.8l-3,2l-3,2c-0.9,0.5-0.7,0.6-1.7,0S45,51.5,44.2,51
            c-2.1-1.4-4.3-2.7-6.4-4.1c-1.4-0.9-2.7-1.8-4.1-2.7c-0.6-0.4-1.2-0.8-1.8-1.1c-0.2-0.1-0.4-0.2-0.7-0.3c0,0.2,0,0.3,0,0.4
            c0,1.6,0,3.3,0,4.9c0,0.2,0,0.5,0.1,0.7c0,0.1,0.1,0.2,0.2,0.2c1.8,0.5,3.6,0.9,5.4,1.3l5.8,1.5l3.5,1l0.3,0.1V53
            c-0.2,0-0.4,0-0.5,0l-4-0.5c-1.1-0.1-2.2-0.3-3.3-0.4c-0.9-0.1-1.8-0.2-2.6-0.3l-2.6-0.3l-2.6-0.3l-1-0.1l0.5,1.7
            c-2.5,0.4-5,0.7-7.5,1.1c0.1,0.1,0.2,0.2,0.4,0.2c1.2,0.2,2.4,0.3,3.6,0.4c0.9,0.1,1.7,0.2,2.6,0.3c1.3,0.1,2.5,0.4,3.7,0.9
            c1.7,0.7,3.5,1.3,5.2,2c0.8,0.3,1.7,0.7,2.5,1c0.1,0.1,0.3,0.1,0.4,0c0.4-0.3,0.8-0.7,1.2-1.1c0,0,0.1-0.1,0.1-0.1l-7-4.1v-0.1
            h8.8c0.9,0,1.7-0.1,2.6-0.1c0.1,0,0.2,0,0.3,0c-0.1,0.1-0.2,0.2-0.2,0.3l-1.6,1.5c-0.2,0.1-0.3,0.3-0.4,0.5c0,0-0.1,0.1,0,0.2
            c0.1,0.3,0,0.5-0.1,0.7c-0.1,0.2-0.1,0.4,0,0.6c0.1,0.1,0.2,0.2,0.3,0.2c0.3,0,0.5-0.1,0.8-0.1c0.3,0,0.5,0,0.8-0.1
            c0.3,0,0.7,0,1,0c0.3-0.1,0.6-0.3,0.9-0.4c0.3-0.2,0.6-0.3,0.9-0.5c0.1,0,0.2,0,0.3,0c0.3,0.2,0.5,0,0.7-0.2l3.8-2.9l3.7-2.8
            c1-0.8,2-1.5,3-2.2s2.2-1.7,3.3-2.5s2.1-1.6,3.1-2.4s2.1-1.7,3.2-2.5c0,0,0,0,0,0l0,0c-0.3,0.1-0.7,0.3-1,0.4l-3.3,1.5
            c-1.8,0.8-3.6,1.6-5.5,2.5c-0.9,0.4-1.7,0.8-2.6,1.2c-0.2,0.1-0.5,0.1-0.7,0c-2.5-1.2-5.1-2.3-7.6-3.5l-5.8-2.7l-2.9-1.3
            c-0.2-0.1-0.4-0.2-0.5-0.4c1.3,0.2,2.6,0.5,4,0.7l7.2,1.5c2,0.4,3.9,0.8,5.9,1.2c0.3,0.1,0.6,0.1,0.9,0l6.8-2.1
            c0.1,0,0.2-0.1,0.2-0.1c-0.1-0.1-0.2-0.1-0.4-0.2l-4.9-0.6L55.5,38l-4.7-0.6c-1.5-0.2-3-0.3-4.5-0.6c-1.2-0.3-2.3-0.6-3.5-1
            c-1.4-0.4-2.8-0.9-4.2-1.3c0.2-0.3,0.4-0.2,0.7-0.2c0.8-0.1,1.7-0.2,2.6-0.3c0.6-0.1,1.2-0.1,1.8-0.1c0.3,0,0.6-0.1,1-0.1
            s0.9,0,1.4,0h0.2c1.8,0.5,3.6,0.9,5.4,1.4l12.6,3.5c0.5,0.1,1,0.3,1.5,0.4c0.1,0.1,0.1,0.1,0.2,0.2c4.8-2.9,9.6-5.8,14.4-8.8v-0.1
            L80,30.3c-1.1-0.9-2.2-1.9-3.3-2.8l-3.3-2.7c-0.1-0.1-0.1-0.1-0.2-0.2c0.5-0.2,0.8,0.3,1.2,0.5c0.1,0.1,0.3,0.2,0.4,0.4
            C75,25,75.4,25,75.7,25s0.8,0,1.3,0c0.3,0,0.7,0,1,0c0.3,0,0.6,0.2,0.9,0.2c0.5,0,1.1,0,1.6-0.1c0.1,0,0.2,0,0.3,0
            c0.1,0,0.3-0.1,0.3-0.2c0,0,0-0.1,0-0.1c0-0.1,0.1-0.2,0.2-0.2c0.5,0.2,1.1,0.4,1.6,0.6l7.8,3.2l0.7,0.3c0-0.2,0-0.4-0.1-0.5
            c-0.7-2.4-1.3-4.8-2-7.1c-0.6-2.1-1.2-4.2-1.8-6.3c0-0.2-0.1-0.3-0.3-0.2c-0.7,0.1-1.3,0.2-1.9,0.3c-1.4,0.3-2.8,0.6-4.3,0.8
            c-0.6,0.1-1.2,0.1-1.8,0c-0.5,0-1-0.1-1.6-0.1l-3.4-0.3l-2.5-0.2l-3.1-0.3l-2.4-0.2l-2.4-0.2c0,0-0.1-0.1-0.1-0.1l0,0
            c0.9-0.5,1.7-1,2.6-1.5c3.3-1.9,6.6-3.8,9.9-5.7c2.2-1.2,4.3-2.4,6.5-3.7l0.1-0.1L75.7,0c1,0.1,2,0.3,3,0.4c2.9,0.5,5.7,1,8.6,1.5
            c1.8,0.3,3.5,0.4,5.3,0.5l5.3,0.5c0.1,0,0.2,0,0.3,0L98.8,3c0,0.1,0,0.1-0.1,0.2l-6.9,4.7L91.6,8c-1.5-0.1-3-0.4-4.4-0.8
            c-0.4-0.1-0.7-0.3-1-0.5c-0.5-0.4-1-0.9-1.4-1.4s-1-1.1-1.5-1.7L83,3.7l-5.5,5.7l-0.1,0.1l0,0l-2,2.2l1.1,0.1
            c1.1,0.1,2.1,0.2,3.2,0.3c0.9,0.1,1.8,0.2,2.7,0.3l2.7,0.3c0.6,0.1,1.3,0.1,1.9,0.2c0.2,0,0.4,0,0.5-0.1l3.4-4
            c0.1-0.2,0.3-0.3,0.5-0.5c-0.2,0.7-0.4,1.4-0.6,2.2L90,13.6c0,0.2,0,0.3,0.2,0.2l2.2-0.4c1.2-0.2,2.3-0.4,3.5-0.6
            c0.6-0.1,1.2-0.2,1.9-0.4l-1.4-1l-3.7-2.8c-0.2-0.2-0.4-0.3-0.7-0.5C92,8.1,91.9,8,91.9,7.9c1.5-0.1,3-0.2,4.6-0.3l3.8-0.2
            l3.8-0.2l1.1-0.1c0.7,0.3,1.4,0.5,2,0.8c1.5,0.7,2.9,1.3,4.4,2c0.4,0.1,0.8,0.3,1.2,0.4c0.2,0.1,0.3,0.2,0.5,0.4c0,0,0,0.1,0,0.1
            l-1.8,0.2l-2.9,0.3l-3.8,0.4l-2.5,0.3l-3.6,0.4c-0.4,0-0.7,0.2-1,0.4c-1.2,1.3-2.5,2.6-3.8,3.9c-0.5,0.5-1,1-1.5,1.5
            c-0.2,0.2-0.3,0.4-0.3,0.7c0.2,0.9,0.3,1.8,0.4,2.6c0.2,1.2,0.4,2.3,0.6,3.5s0.4,2.3,0.5,3.4c0.1,0.9,0.1,1.8,0,2.6
            c0,1.1-0.1,2.1-0.1,3.2l-0.1,1.1h-0.1l-1.9-2.9c-0.1,0.8-0.1,1.5-0.2,2.2c-0.1,1-0.3,2.1-0.4,3.1l-0.6,4.5
            c-0.2,1.5-0.4,3.1-0.7,4.7c-0.1,0.5-0.3,1-0.6,1.3c-0.8,0.8-1.6,1.7-2.4,2.5l-3,3.1L81,56.9c-1.2,1.2-2.4,2.5-3.6,3.7L75,63.2
            l-3.2,3.4l-2.3,2.5c-1.1,1.2-2.3,2.4-3.4,3.6c-0.4,0.4-0.7,0.8-1.1,1.2c0.4,0.5,0.8,0.9,1.1,1.3c1.3,1.5,2.5,3.1,3.8,4.6
            c0.3,0.3,0.5,0.8,0.5,1.2c0,0.2,0,0.4,0.1,0.6c1,1.7,2.1,3.3,3.1,5c0.4,0.5,0.5,1.1,0.5,1.7c0,0.5,0,1.1,0,1.6c0,0.1,0,0.2,0,0.3
            c-0.6,1.1-1.2,2.2-1.7,3.2c-0.1,0.3-0.3,0.5-0.4,0.7c0-1.5,0-3-0.1-4.5c-0.1,0.2-0.1,0.3-0.1,0.5c0,0.5-0.2,1-0.6,1.2
            c-0.7,0.6-1.4,1.2-2,1.9c-0.3,0.3-0.6,0.6-1,0.9c0-0.1,0-0.2,0.1-0.3c0.4-1.3,0.8-2.5,1.1-3.8c0-0.1,0-0.3-0.1-0.4
            c-0.9-1.6-1.8-3.1-2.6-4.7c-0.1-0.2-0.3-0.3-0.5-0.3l-1.8-0.4c0,0-0.1,0-0.1,0.1l0.5,0.6c0.6,0.7,1.2,1.4,1.8,2.1
            c0.1,0.1,0.1,0.2,0.1,0.4c0.1,0.8,0.1,1.6,0.2,2.3c0,0.3,0,0.6-0.2,0.8c-0.5,1-1,1.9-1.4,2.8c-0.1,0.2-0.3,0.4-0.4,0.6
            c-0.1-1-0.1-2-0.1-2.9c0-0.5-0.1-1.1-0.3-1.6c-0.2-0.3-0.3-0.7-0.5-1.1c-0.2-0.3-0.4-0.6-0.6-0.9c-1.3-1.1-2.6-2.2-3.9-3.3
            c-0.3-0.3-0.7-0.5-1.2-0.4c-1,0.2-2,0.3-3,0.4l-2.3,0.3c-0.9,0.1-1.9,0.2-2.8,0.3c-0.4,0-0.8,0.1-1.1,0.3c-0.6,0.5-1.3,0.9-2,1.3
            L44.1,88l-0.6,0.4v-0.1c0.1-0.1,0.2-0.3,0.3-0.4c1.2-1.6,2.5-3.1,3.7-4.7c0.4-0.6,1.1-1,1.8-1.2c0.3,0,0.6-0.2,0.9-0.3
            c0.5-0.4,1-0.8,1.5-1.3c0.6-0.8,1.5-1.4,2.4-1.6c0.6-0.1,1.2-0.3,1.8-0.4l-6-8.9c-2.9,3.9-5.7,7.8-8.5,11.7c0-0.6,0-1.2,0-1.9
            c0-1.1,0.1-2.2,0.1-3.3l0.1-3.9c0-0.6,0-1.1,0-1.7c0,0,0-0.1,0-0.1v-1.7l-9.5,16.8c-0.5-0.4-1.1-0.8-1.6-1.2
            c-0.3-0.2-0.5-0.5-0.5-0.8c0-0.1,0-0.1,0-0.2c-0.4-1.3-0.8-2.7-1.2-4c-0.5-1.8-1.1-3.6-1.6-5.4l-0.2-0.7c-0.1,0.2-0.1,0.2-0.1,0.3
            c-0.6,1.4-1.1,2.8-1.7,4.3c-1.1,2.7-2.1,5.3-3.2,8c-0.8,2-1.6,4-2.4,6s-1.6,3.8-2.4,5.7c-0.4,0.9-0.8,1.8-1.2,2.7
            c0,0.1-0.1,0.1-0.2,0.1c0.3-1.3,0.6-2.6,0.9-3.9c0.6-2.7,1.1-5.5,1.7-8.2s1.2-5.5,1.8-8.2c0.5-2.1,1-4.3,1.4-6.4c0,0,0,0,0-0.1
            c-0.2,0.4-0.3,0.7-0.5,1c-0.5,1-0.9,1.9-1.3,2.9c-0.6,1.4-1.3,2.9-1.9,4.3l-1.8,4l-2.2,5c-0.6,1.3-1.1,2.5-1.7,3.8l-1.8,4.1
            c-0.3,0.6-0.5,1.2-0.8,1.8c0,0,0,0-0.1,0c0-2.8,0-5.5,0.1-8.3c0-1.1,0-2.2,0.1-3.3c0.1-0.5,0.2-1,0.5-1.4c0.5-1.3,1-2.6,1.5-3.9
            l2.2-5.9l0.8-2.1c0-0.1,0-0.1,0-0.2C10.1,82.2,6,89.5,1.8,96.7c0.1-0.7,0.3-1.4,0.4-2.1c0.4-2.2,0.9-4.4,1.3-6.6
            c0.4-1.8,0.7-3.6,1.1-5.4c0.4-1.8,0.7-3.5,1.1-5.2c0-0.1,0.1-0.2,0.2-0.3l3.3-2.1L9.5,75l-2-0.2l-2.6-0.3
            c-0.8-0.1-1.7-0.2-2.5-0.3L0,74c0,0,0-0.1,0-0.1L12.3,66L5,65.6v-0.1L22.4,54v-0.1c-2.8-0.1-5.6-0.2-8.4-0.5c1-0.3,2-0.5,3-0.7
            l5.6-1.3c0.5-0.1,0.9-0.3,1.3-0.7c0.4-0.5,0.9-1,1.4-1.5l1.3-1.5l2.1-2.3c0.4-0.4,0.8-0.9,1.2-1.3s0.9-1,1.4-1.5
            C32,42,32.8,41.3,33.5,40.6 M14.5,75c0,0,0-0.1,0.1-0.1l0,0L14.5,75L14.5,75L14.5,75 M74.6,48.2c1.1-0.3,2.1-0.5,3.2-0.8
            c0.8-0.2,1.7-0.4,2.5-0.6c0.3,0,0.5-0.2,0.6-0.5c0.7-1.6,1.5-3.2,2.2-4.8l2-4.4c0.4-0.9,0.8-1.8,1.2-2.7c0.2-0.3,0.3-0.7,0.4-1
            c0,0,0-0.1,0-0.2l-21,17.2L74.6,48.2 M56.4,74.1c0.9,1.4,1.8,2.8,2.7,4.1c0.1,0.2,0.3,0.4,0.4,0.6c0.3,0.3,0.4,0.8,0.3,1.2v0.2
            c0.3,0.1,0.7,0.2,1,0.3c0.2,0,0.4,0,0.6-0.2l1.5-0.8c0.2-0.1,0.5-0.2,0.8-0.1c0.8,0.1,1.6,0.2,2.5,0.2l-0.4-0.5l-2.2-2.7
            c-0.8-1-1.7-2-2.5-3c-0.7-0.8-1.4-1.7-2.1-2.5c-0.2-0.2-0.3-0.3-0.6-0.1c-0.9,0.6-1.7,1.2-2.6,1.7c-0.1,0.1-0.2,0.1-0.3,0.2
            L56.4,74.1 M88.8,3.1c-0.4,0.3-0.8,0.5-1.3,0.8c0.7,0.5,1.3,0.9,1.9,1.3c0.1,0,0.1,0,0.2,0c0.5-0.4,1-0.7,1.5-1.1
            c0.1-0.1,0.2-0.2,0.3-0.3l-1.6-0.7C89.5,2.9,89.1,2.9,88.8,3.1z"
          />
        </g>
      </svg>
      <Text variants={textVariants} initial="hidden" animate="visible">
        Loading...
      </Text>
    </Container>
  );
};

export default Loader;
