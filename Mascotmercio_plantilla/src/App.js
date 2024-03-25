import './App.css';
import Header from './Header';
import Footer from './Footer';
import Inicio from './Inicio';
import BotonesInicio from './BotonesInicio';
import Tarjetas from './Tarjetas';
import { useState, useEffect } from "react";
import { mockdata } from "./constants/products.js";
import NoMatch from "./NoMatch";
import { Routes, Route } from "react-router-dom";

function App() {

	return (
		<div className="App">
		<Header />
		<Routes>
			<Route path="/" element={<Inicio />} />
		</Routes>
		<BotonesInicio/>
		<Tarjetas/>
		<Footer />
	</div>
	)
}

export default App;