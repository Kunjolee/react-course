import React from "react";
import styled, { css, keyframes, ThemeProvider } from "styled-components";
/* CreateGlobalStyle que es la funcion que da estilos globales, esta en el archvio index.js */
const setTransitionTime = (time) => `background-color ${time} ease-out`;

const redColor = "#f00";
const greenColor = "#f2f5";

const light = {
  color: "#222",
  bgColor: "#eee",
};

const dark = {
  color: "#eee",
  bgColor: "#222",
};

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1
  }
`;

const MyH3 = styled.h3`
  background-color: ${redColor};
  padding: 2rem;

  transition: ${setTransitionTime("1s")};

  color: ${(props) => props.myColor};
  color: ${({ myColor }) => myColor};
  color: ${({ myColor }) => myColor || "#222"};

  ${({ isButton }) =>
    isButton &&
    css`
      margin: auto;
      border-radius: 4rem;
      max-width: 50%;
      border: #222 2px solid;
      cursor: pointer;
    `};

  ${({ myKeyFrame }) =>
    myKeyFrame &&
    css`
      animation: ${fadeIn} 5s ease;
    `};

  &:hover {
    background-color: ${greenColor};
  }
`;

const Box = styled.div`
  margin: 1rem;
  padding: 2rem;
  color: ${({ theme }) => theme.color};
  background-color: ${({ theme }) => theme.bgColor};
`;

const Box2 = styled.div`
  color: ${({ theme }) => theme.color};
  background-color: ${({ theme }) => theme.bgColor};
`;

/* Hereda los estilos del componente Box */
const BoxRounded = styled(Box)`
  border-radius: 2rem;
`;

export default function ComponentesEstilizados() {
  return (
    <div>
      <h2>Styled-Components</h2>
      <h3>H3 normal sin styled components</h3>
      <MyH3>H3 styled components</MyH3>
      <MyH3 myColor="#61dafb">H3 styled components con props</MyH3>
      <MyH3 isButton myColor="#eee">
        H3 con estilos de boton(usando funcion CSS styledComponents)
      </MyH3>
      <MyH3 myKeyFrame>Key Frames (Animaciones)</MyH3>
      <ThemeProvider theme={light}>
        <Box>LIGHT</Box>
        <Box2>LIGHT2</Box2>
        <BoxRounded>Caja redondeada</BoxRounded>
      </ThemeProvider>
      <ThemeProvider theme={dark}>
        <Box>DARK</Box>
        <Box2>DARK2</Box2>
        <BoxRounded>Caja redondeada</BoxRounded>
      </ThemeProvider>
    </div>
  );
}
