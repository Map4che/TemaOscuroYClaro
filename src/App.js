import React from "react";
import GlobalStyle from "./GlobalStyle";

import Container from "./Components/Container";
import Header from "./Components/Header";

import { temaClaro, temaOscuro } from "./Components/UI/Temas";
import { ThemeProvider } from "styled-components";

import { BtnTema } from "./Components/UI";
import SwitcherTema from "./Components/SwitcherTema";
import { useState } from "react";

function App() {
  const [tema, setTema] = useState(true);

  const toggleTema = () => {
    setTema((tema) => !tema);
  };

  return (
    <ThemeProvider theme={tema ? temaClaro : temaOscuro}>
      <GlobalStyle />
      <BtnTema onClick={toggleTema}>
        <SwitcherTema tema={tema} />
      </BtnTema>
      <Header />
      <Container />
    </ThemeProvider>
  );
}

export default App;
