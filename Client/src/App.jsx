import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Characters, BattlePit, Dashboard, Library, AdventurersDen, Login, Library2} from "./components/pages";
import Footer from "./components/Footer";
import Profile from "./components/pages/Profile";

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
        <Route path="/Profile" element={
          <>
            <Navbar />
            <Profile />
            <Footer />
          </>
        } />
        <Route path="/Library2" element={
          <>
            <Navbar />
            <Library2 />
            <Footer />
          </>
        } />
      </Routes>
    </div>
  );
}

export default App;
