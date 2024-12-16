import React from 'react';
import styled from 'styled-components';

const Item = styled.div`
  width: 20rem;
  margin-right: 6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  img {
    width: 100%;
    height: auto;
  }

  h2 {
    text-align: center;
    margin-top: 0.5rem;
  }
`;

const Product = ({ img, title, openModal }) => {
  return (
    <Item onClick={() => openModal(img, title)}>
      <img src={img} alt={title} />
      <h2>{title}</h2>
    </Item>
  );
};

export default Product;
