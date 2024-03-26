import './App.css';
import Header from './Header';
import Footer from './Footer';
import Inicio from './Inicio';
import Registro from './Registro';
import Login from './Login';
import Contacto from './Contacto';
import Acerca from './Acerca';
import VistaMapa from './Vista_Dueño_Mascota/VistaMapa';
import { useState, useEffect } from "react";
import NoMatch from "./NoMatch";
import { Routes, Route } from "react-router-dom";

function App() {

	return (
		<div className="App" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
		  <Header />
		  <div style={{ flex: 1 }}>
			<Routes>
			  <Route path="/" element={<Inicio />} />
			  <Route path="/login" element={<Login />} />
			  <Route path="/registro" element={<Registro />} />
			  <Route path="/contacto" element={<Contacto />} />
			  <Route path="/acerca" element={<Acerca />} />
			  <Route path="/usuario" element={<VistaMapa />} />
			</Routes>
		  </div>
		  <Footer />
		</div>
	  );
	  
}

export default App;