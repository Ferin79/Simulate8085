import React from "react";
import Header from "./components/shared/header";
import Manipulate from "./util/Manipulate";
import Interact from "./util/Interact";
import SvgSection from "./util/SvgSection";

const App = () => {
  return (
    <div>
      <Header />
      <Manipulate />
      <Interact />
      <SvgSection />
    </div>
  );
};

export default App;
