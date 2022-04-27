import React, { useState, useEffect } from "react";
import { ThemeProvider,  StyledEngineProvider } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import theme from './theme';
import MainLandingPage from './mainLandingPage/MainLandingPage';
import Loader from "./components/Loader";


import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3500);
  }, []);

  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
      <AnimatePresence exitBeforeEnter>
       <Router>
        <Routes>
         <Route path="/" caseSensitive={false} element={ loading ? <Loader /> : <MainLandingPage /> }/>
        </Routes>
       </Router>
       <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "#FFFFFF",
          },
        },
        fullScreen: { enable: true, zIndex: -15 },
        fpsLimit: 30,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#9db0e4",
          },
          links: {
            color: "#8b8c8d",
            distance: 200,
            enable: true,
            opacity: 0.6,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: true,
            speed: 3,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 1200,
            },
            value: 50,
          },
          opacity: {
            value: 0.8,
          },
          shape: {
            type: "triangle",
          },
          size: {
            value: { min: 3, max: 8 },
          },
        },
        detectRetina: true,
      }}
      />
      </AnimatePresence>
      </ThemeProvider>
    </StyledEngineProvider>
    
  );
}

export default App;
