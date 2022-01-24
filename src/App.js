import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Form from "./components/form";
import About from "./components/about";
import React, { useState } from "react";

function App() {
  let name = "Sidddyyy";
  const [usethis, setuseThis] = useState("light");
  let togglethis = () => {
    if (usethis == "light") {
      setuseThis("dark");
      document.body.style.backgroundColor = "#343a40";
    } else {
      setuseThis("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <Navbar title={name} togglethis={togglethis} usethis={usethis} />
      <div className="container">
        <Form usethis={usethis} oho="what the f" />
      </div>
      <div className="container">
        <About />
      </div>
    </>
  );
}

export default App;
