import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Servicios from "./pages/Servicios";
import NavBar from "./components/NavBar";
import LoginCliente from "./pages/LoginCliente";
import LoginConductor from "./pages/LoginConductor";
import Registro from "./pages/Registro";
import ClienteDashboard from "./pages/ClienteDashboard";
import ConductorDashboard from "./pages/ConductorDashboard";

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/login-cliente" element={<LoginCliente />} />
        <Route path="/login-conductor" element={<LoginConductor />} />
        <Route path="/" element={<Home />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/cliente/inicio" element={<ClienteDashboard />} />
        <Route path="/conductor/inicio" element={<ConductorDashboard />} />
      </Routes>
    </>
  );
}
