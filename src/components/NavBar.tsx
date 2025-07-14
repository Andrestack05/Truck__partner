import { useUser } from "../context/UserContext";
import { NavLink, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";

export default function NavBar() {
  const { isLoggedIn, tipoUsuario, logout } = useUser();
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);
  const timer = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timer.current) clearTimeout(timer.current);
    setShowMenu(true);
  };

  const handleMouseLeave = () => {
    timer.current = setTimeout(() => {
      setShowMenu(false);
    }, 200);
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="bg-black shadow-md px-6 py-4 flex justify-between items-center">
      <div className="flex items-center space-x-8">
        <h1
  onClick={() => navigate("/")}
  className="text-4xl font-truck tracking-wide uppercase bg-gradient-to-r from-gray-800 via-blue-700 to-green-500 bg-clip-text text-transparent drop-shadow-lg"
>
  Truck Partner
</h1>
</div>
        <NavLink
  to="/"
  className="text-gray-700 hover:text-blue-600 transition"
>
  Inicio
</NavLink>
        <NavLink
  to="/servicios"
  className="text-gray-700 hover:text-blue-600 transition"
>
  Nuestros Servicios
</NavLink>

      {/* Opciones si NO ha iniciado sesión */}
      {!isLoggedIn && (
        <div className="flex items-center space-x-4 relative">
          <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
              Ingresar
            </button>

            {showMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg animate-fade-in z-10">
                <button
                  className="block w-full text-left px-4 py-2 hover:bg-blue-100 text-gray-700"
                  onClick={() => navigate("/login-cliente")}
                >
                  Como Cliente
                </button>
                <button
                  className="block w-full text-left px-4 py-2 hover:bg-blue-100 text-gray-700"
                  onClick={() => navigate("/login-conductor")}
                >
                  Como Conductor
                </button>
              </div>
            )}
          </div>

          <button
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
            onClick={() => navigate("/registro")}
          >
            Registrarse
          </button>
        </div>
      )}

      {/* Opciones si YA ha iniciado sesión */}
      {isLoggedIn && (
        <div className="flex items-center space-x-4">
          {tipoUsuario === "cliente" && (
            <>
              <button onClick={() => navigate("/cliente/inicio")} className="text-gray-700 hover:text-blue-600 transition">
                Buscar Transporte
              </button>
              <button onClick={() => navigate("/cliente/perfil")} className="text-gray-700 hover:text-blue-600 transition">
                Perfil
              </button>
              <button onClick={() => navigate("/cliente/novedades")} className="text-gray-700 hover:text-blue-600 transition">
                Novedades
              </button>
            </>
          )}

          {tipoUsuario === "conductor" && (
            <>
              <button onClick={() => navigate("/conductor/buscar")} className="text-gray-700 hover:text-blue-600 transition">
                Buscar Carga
              </button>
              <button onClick={() => navigate("/conductor/rastrear")} className="text-gray-700 hover:text-blue-600 transition">
                Rastrear
              </button>
              <button onClick={() => navigate("/conductor/mis-cargas")} className="text-gray-700 hover:text-blue-600 transition">
                Mis Cargas
              </button>
            </>
          )}

          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
          >
            Cerrar Sesión
          </button>
        </div>
      )}
    </nav>
  );
}
