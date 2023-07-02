import "./App.css";
import Navbar from "./components/Nav/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import PROJECTS from "./pages/Projects/PROJECTS";
import { Route, Routes, Navigate } from "react-router-dom";
import React from "react";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="page-container">
      <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/projects" />} />
          <Route path="/projects" element={<PROJECTS />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
