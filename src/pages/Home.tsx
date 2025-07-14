import { Link } from "react-router-dom";
import tractomulaImg from "../assets/home_image.png";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-800 to-black flex items-center justify-center px-6">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Texto */}
        <div>
          <h1 className="text-5xl font-truck text-black leading-tight mb-6">
            Bienvenido a <span className="text-blue-600">    Truck Partner</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Conecta clientes con transportistas de manera rápida, segura y eficiente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/login-cliente"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-lg hover:scale-105"
            >
              Soy Cliente
            </Link>
            <Link
              to="/login-conductor"
              className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition duration-300 shadow-lg hover:scale-105"
            >
              Soy Transportista
            </Link>
          </div>
        </div>

        {/* Imagen tractomula */}
        <div className="w-full h-84 md:h-106 overflow-hidden rounded-lg shadow-lg">
            <img
  src={tractomulaImg}
  alt="Tractomula"
  className="object-cover w-full h-full rounded-lg shadow-md"
/>
        </div>
      </div>
    </main>
  );
}

