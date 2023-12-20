import React, { useState } from "react";
import "./styles/style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { StarsCanvas } from "./components/canvas";
import {
  Navbar,
  Hero,
  Skills,
  Experience,
  Works,
  Education,
  Contact,
  Footer,
  Introduction,
} from "./components";

const IntroPage = ({ onClick }) => {
  return (
    <div className="intro-page">
      <StarsCanvas />

      <div className="introduction">
        <Introduction />
        <button className="Intro-btn" onClick={onClick}>
          Enter
        </button>
      </div>
    </div>
  );
};

const MainWebsite = () => {
  return (
    <div id="main" className="mainwebsite">
      <Navbar />
      <Hero />
      <div className="wrapper">
        <Skills />
        <Experience />
        <Works />
        <Education />
      </div>
      <div className="wrapper">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

const App = () => {
  const [showIntro, setShowIntro] = useState(true);

  const handleClick = () => {
    setShowIntro(false);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            showIntro ? <IntroPage onClick={handleClick} /> : <MainWebsite />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

// import "./styles/style.css";
// import { BrowserRouter } from "react-router-dom";
// import { StarsCanvas } from "./components/canvas";
// import {
//   Navbar,
//   Hero,
//   Skills,
//   Experience,
//   Works,
//   Education,
//   Contact,
//   Footer,
// } from "./components";
// const App = () => {
//   return (
//     <BrowserRouter>
//       <div className="intro ">
//         <StarsCanvas />
//       </div>

//       <div className="mainwebsite">
//         <Navbar />
//         <Hero />

//         <div className="wrapper">
//           <Skills />
//           <Experience />
//           <Works />
//           <Education />
//         </div>
//         <div className="wrapper">
//           <Contact />
//         </div>
//         <Footer />
//       </div>
//     </BrowserRouter>
//   );
// };

// export default App;
