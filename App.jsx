import React from "react";
import { Routes, Route, UNSAFE_DataRouterStateContext } from "react-router-dom";
import { useState } from "react";
import NavBar from "./NavBar.jsx";
import Table1 from "./Pages/Table1.jsx";
import AddScore from "./Pages/AddScore.jsx";
import "./Pages/Table1.css";
import GoldenBoot from "./Pages/GoldenBoot.jsx";
import Home from "./Pages/Home.jsx";
import { DataProvider } from "./DataProvider.jsx";

export default function App() {
  return (
    <>
      <DataProvider>
        <NavBar />
        <Routes>
          <Route path="/Pages/Table1" element={<Table1 />} />
          <Route path="/Pages/GoldenBoot" element={<GoldenBoot />} />
          <Route path="/Pages/AddScore" element={<AddScore />} />
          <Route path="/pages/Home" element={<Home />} />
        </Routes>
      </DataProvider>
    </>
  );
}
