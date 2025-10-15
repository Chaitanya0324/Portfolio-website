import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Personal from "./components/Personal";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
    <div className="bg-gray-50 text-gray-800">
      <Navbar />
      <section id="about"><About /></section>
      <section id="personal"><Personal /></section>
      <section id="education"><Education /></section>
      <section id="skills"><Skills /></section>
      <section id="projects"><Projects /></section>
      <Footer/>
    </div>
    <div>
      
    </div>
    </>
  );
}
