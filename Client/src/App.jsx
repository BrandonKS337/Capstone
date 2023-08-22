import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Characters, BattlePit, Dashboard, Library, AdventurersDen, Login } from "./components/pages";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/Home" element={
          <>
            <Navbar />
            <Dashboard />
            <Footer />
          </>
        } />
        
        <Route path="/Characters" element={
          <>
            <Navbar />
            <Characters />
            <Footer />
          </>
        } />

        <Route path="/Library" element={
          <>
            <Navbar />
            <Library />
            <Footer />
          </>
        } />

        <Route path="/BattlePit" element={
          <>
            <Navbar />
            <BattlePit />
            <Footer />
          </>
        } />

        <Route path="/AdventurersDen" element={
          <>
            <Navbar />
            <AdventurersDen />
            <Footer />
          </>
        } />
      </Routes>
    </div>
  );
}

export default App;
