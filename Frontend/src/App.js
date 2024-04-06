import './App.css';
import Header from './Header';
import Footer from './Footer';
import Inicio from './Inicio';
import Registro from './Registro';
import Login from './Login';
import Contacto from './Contacto';
import Acerca from './Acerca';
import VistaPrincipalMapa from './Vista_Dueño_Mascota/VistaPrincipalMapa';
import VistaPrincipal from './Vista_Dueño_Establecimiento/VistaPrincipal';
import { useState, useEffect } from "react";
import NoMatch from "./NoMatch";
import { Routes, Route } from "react-router-dom";
import Reserva from './Vista_Dueño_Mascota/Reserva';
import AñadirActividad from './Vista_Dueño_Establecimiento/AñadirActividad'
import AñadirEstablecimiento from './Vista_Dueño_Establecimiento/AñadirEstablecimiento'
import Editar from './Vista_Dueño_Establecimiento/Editar'

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
			  <Route path="/duenoMascota" element={<VistaPrincipalMapa />} />
			  <Route path="/duenoEstablecimiento" element={<VistaPrincipal />} />
			  <Route path="/reserva" element={<Reserva />} />
			  <Route path="/anadirEst" element={<AñadirEstablecimiento />} />
			  <Route path="/anadirAct" element={<AñadirActividad />} />
			  <Route path="/editar" element={<Editar />} />
			  <Route path="*" element={<NoMatch />} />
			</Routes>
		  </div>
		  <Footer />
		</div>
	  );
}

export default App;