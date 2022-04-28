import React, { Fragment } from "react";
import NavBar from "../components/NavBar";
import Head from "../components/Head";
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import FooterSection from "../components/FooterSection";
import { motion, useViewportScroll } from "framer-motion";

const MainLandingPage = () => {
  const { scrollYProgress } = useViewportScroll();
  
    return (
      <Fragment>
        <motion.path
          d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
          style={{ pathLength: scrollYProgress }}
        />
        <NavBar />
        <Head />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <FooterSection />
      </Fragment>
    );
};

export default MainLandingPage;

