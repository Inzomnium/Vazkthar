
import Modal from "./Modal";
import styled from "styled-components";
import { motion } from "framer-motion";
const Item = styled(motion.div)`
    width: 20rem;
    margin-right: 6rem;
  
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 100%;
      height: auto;
    }
    h1 {
      display: inline-block;
      width: fit-content;
      font-weight: 500;
      text-align: center;
      cursor: pointer;
    }   
    @media (max-width: 48em) {
      width: 15rem;
    }
    #shop {
        position: relative
    }
    .imagen-desactivada {
        pointer-events: none;
        opacity: 0.5;
        z-index:1
    }
    .model-open { 
        position:fixed;
        z-index: 10;
        width:150%;
    }

  `;

const Product = ({ img, title }) => {
   
    return (
      <Item
        initial={{ filter: "grayscale(100%)" }}
        whileInView={{ filter: "grayscale(0%)" }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false, amount: "all" }}
      >

        <Modal img={img} title={title} />

     
      </Item>
    );
  };

  export default Product;