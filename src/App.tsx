import React from "react";

import * as S from "./styles/App";

import Sidebar from "./components/Sidebar";
import Routes from "./routes";

function App() {
  return (
    <S.MainWrapper>
      <Sidebar />
      <S.Container>
        <Routes />
      </S.Container>
    </S.MainWrapper>
  );
}

export default App;
