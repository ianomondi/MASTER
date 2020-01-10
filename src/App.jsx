import React from "react";
import Navbar from "./components/Navbar";
import Content from "./components/MainContent";
import Sidenav from "./components/Sidenav";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Content />
      <Sidenav />
      <Footer />
    </>
  );
}

export default App;
