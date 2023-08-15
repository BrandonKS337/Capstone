import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Characters, BattlePit, Dashboard, Library, AdventurersDen } from "./components/pages"; // Import using curly braces
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Characters" element={<Characters />} />
        <Route path="/Library" element={<Library />} />
        <Route path="/BattlePit" element={<BattlePit />} />
        <Route path="/AdventurersDen" element={<AdventurersDen />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
