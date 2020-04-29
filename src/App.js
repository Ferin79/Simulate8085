import React from "react";
import Header from "./components/shared/header";
import Manipulate from "./util/Manipulate";
import Interact from "./util/Interact";
import SvgSection from "./util/SvgSection";
import { ContextProvider } from "./data/context";
import Footer from "./components/shared/footer";

const App = () => {
  return (
    <ContextProvider>
      <Header />
      <Manipulate />
      <Interact />
      <SvgSection />
      <Footer />
    </ContextProvider>
  );
};

export default App;
