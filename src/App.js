import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './pages/Home';
import Upload from './pages/Upload'; 

export default function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="upload" element={<Upload />} /> 
    </Routes>
  );
}
