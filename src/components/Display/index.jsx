import React from 'react';

 import { Container } from './styles';

function Display({ value, isNegative }) {
  return(
    <Container isNegative={isNegative}>
      <p>{value}</p>
    </Container>  
  );
}

export default Display;