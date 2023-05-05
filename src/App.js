import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import OrnareOrn from "./components/OrnareOrn";
import Story from "./components/Story";
import About from "./components/About";
import WatchVideo from "./components/WatchVideo";
// import OurNft from "./components/OurNft";
import Nft from "./components/Nft";

function App() {
  return (
    <>
      <div classNameName=" overflow-hidden">
        <OrnareOrn />
        <Story />
        <About />
        <WatchVideo />
        {/* <OurNft /> */}
        <Nft />
      </div>
    </>
  );
}

export default App;
