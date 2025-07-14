export default function Servicios() {
  return (
    <section className="bg-white py-16 px-6 md:px-16 min-h-screen">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-700 mb-6">
          Nuestros Servicios
        </h2>
        <p className="text-gray-600 text-lg mb-12">
          En <span className="font-semibold text-blue-600">Truck Partner</span> ofrecemos soluciones eficientes
          para conectar carga y transporte en Colombia. Aquí algunos de los servicios que brindamos:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Servicio 1 */}
          <div className="bg-blue-50 rounded-xl shadow p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">Registro de Cargas</h3>
            <p className="text-gray-600 text-sm">
              Clientes pueden publicar fácilmente sus solicitudes de transporte especificando
              origen, destino, tipo de carga y valor ofrecido.
            </p>
          </div>

          {/* Servicio 2 */}
          <div className="bg-blue-50 rounded-xl shadow p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">Rastreo en Tiempo Real</h3>
            <p className="text-gray-600 text-sm">
              Conductores podrán compartir su ubicación para que los clientes sigan el viaje en tiempo real.
            </p>
          </div>

          {/* Servicio 3 */}
          <div className="bg-blue-50 rounded-xl shadow p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">Historial y Calificaciones</h3>
            <p className="text-gray-600 text-sm">
              Tanto clientes como transportistas podrán calificar y ver el historial de servicios realizados.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
