import React from "react";
import Header from "./components/shared/header";
import Manipulate from "./util/Manipulate";
import Interact from "./util/Interact";
import SvgSection from "./util/SvgSection";
import { ContextProvider } from "./data/context";

const App = () => {
  return (
    <ContextProvider>
      <Header />
      <Manipulate />
      <Interact />
      <SvgSection />
    </ContextProvider>
  );
};

export default App;
