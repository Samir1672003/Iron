import { useContext, useEffect, useState } from "react";
import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Section from "./components/Section/Section";
import Section2 from "./components/Section/Section2";
import Section3 from "./components/Section/Section3";
import Section4 from "./components/Section/Section4";
import Section5 from "./components/Section/Section5";
import Section6 from "./components/Section/Section6";
import Section7 from "./components/Section/Section7";
import Section8 from "./components/Section/Section8";
import Section9 from "./components/Section/Section9";
import Section10 from "./components/Section/Section10";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup";
import { datacontext } from "./Context/Context";
import ParticlesBackground from "./components/ParticlesBackground";
import Topbar from "./components/Header/Topbar";
import AOS from "aos";
import "aos/dist/aos.css";
import { BounceLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

function App() {
  const { popup } = useContext(datacontext);
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(!loading);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
        className=""
      >
        <BounceLoader
          color="#62351f"
          loading={loading}
          size={60}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
        <BounceLoader
          color="#c4ae78"
          loading={loading}
          size={60}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
        <BounceLoader
          color="#62351f"
          loading={loading}
          size={60}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  }

  return (
    <>
      <ParticlesBackground />
      <Topbar />
      <Header />
      {popup ? (
        <Popup />
      ) : (
        <>
          <Section />
          <hr />
          <Section2 />
          <hr />
          <Section3 />
          <hr />
          <Section4 />
          <hr />
          <Section5 />
          <hr />
          <Section6 />
          <hr />
          <Section7 />
          <hr />
          <Section8 />
          <hr />
          <Section9 />
          <hr />
          <Section10 />
        </>
      )}

      <Footer />
    </>
  );
}

export default App;
