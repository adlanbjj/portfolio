import "./App.css";
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './pages/ContactPage';
import Navbar from "./components/Navbar/Navbar";
import AboutPage from "./pages/AboutPage";
import SkillsPage from "./pages/SkillsPage";
import ProjectsPage from "./pages/ProjectsPage";

const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route path="contact" element={<Contact />} />
        <Route path="skills" element={<SkillsPage />} />
        <Route path="projects" element={<ProjectsPage />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
