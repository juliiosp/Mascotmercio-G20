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
import Detalle from './Vista_Dueño_Mascota/Detalle';
import AñadirActividad from './Vista_Dueño_Establecimiento/AñadirActividad';
import AñadirEstablecimiento from './Vista_Dueño_Establecimiento/AñadirEstablecimiento';
import Editar from './Vista_Dueño_Establecimiento/Editar';
import MisReservas from './Vista_Dueño_Mascota/MisReservas';
import ReservaEst from './Vista_Dueño_Establecimiento/ReservaEst'
import MiPerfil from './Vista_Dueño_Mascota/Perfil';

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
			  <Route path="/detalle" element={<Detalle />} />
			  <Route path="*" element={<NoMatch />} />
			  <Route path="/misreservas" element={<MisReservas />} />
			  <Route path="/reservasEst" element={<ReservaEst />} />
			  <Route path="/perfil" element={<MiPerfil />} />
			</Routes>
		  </div>
		  <Footer />
		</div>
	  );
}

export default App;