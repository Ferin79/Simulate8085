import React, { useState } from "react";
import Header from "./components/shared/header";
import Manipulate from "./util/Manipulate";
import Interact from "./util/Interact";
import SvgSection from "./util/SvgSection";
import { ContextProvider } from "./data/context";
import Footer from "./components/shared/footer";
import Tutorial from "./util/Tutorials";

const App = () => {
  const [showTutorials, setShowTutorials] = useState(false);
  return (
    <ContextProvider>
      <Header />
      {showTutorials ? <Tutorial setShowTutorials={setShowTutorials} /> : null}
      <Manipulate />
      <Interact />
      <SvgSection />
      <Footer />
    </ContextProvider>
  );
};

export default App;
