import React from "react";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Upload from "./pages/Upload";
import AnimalDetails from "./pages/AnimalDetails";

export default function App() {
	return (
		<Routes>
			<Route index element={<Home />} />
			<Route path="upload" element={<Upload />} />
			<Route path="animal-detail" element={<AnimalDetails />} />
		</Routes>
	);
}
