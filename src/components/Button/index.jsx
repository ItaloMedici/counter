import React from 'react';
import { ButtonStyle } from "./styles"

const Button = ({ onClick, add }) => {
  const label = add ?  "+ Adicionar" : "- Subtrair";

  return (
    <ButtonStyle
      onClick={onClick}
      add={add}
    >
      {label}
    </ButtonStyle>
  )
}

export default Button;