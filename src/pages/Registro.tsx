import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useState } from "react";

type FormValues = {
  nombre: string;
  correo: string;
  contraseña: string;
  confirmar: string;
  tipoUsuario: "cliente" | "conductor";
  tipoVehiculo?: string;
  marca?: string;
  modelo?: string;
  capacidad?: number;
  placa?: string;
  propiedad?: "propio" | "empresa";
};

export default function Registro() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    mode: "onChange",
    defaultValues: {
      tipoUsuario: "cliente",
    },
  });

  const tipoUsuario = watch("tipoUsuario");

  const onSubmit = (data: FormValues) => {
  try {
    console.log("Datos enviados:", data);

    // Leer lo que ya existe en localStorage
    const registrosPrevios = JSON.parse(localStorage.getItem("usuarios") || "[]");

    // Validar que sea un arreglo (protección extra)
    const registrosArray = Array.isArray(registrosPrevios) ? registrosPrevios : [];

    // Agregar el nuevo usuario
    const nuevosRegistros = [...registrosArray, data];

    // Guardar en localStorage
    localStorage.setItem("usuarios", JSON.stringify(nuevosRegistros));
toast.success("¡Registro exitoso!", {
  position: "top-right",
  autoClose: 3000,
});
navigate("/");
  } catch (error) {
    console.error("Error al guardar en localStorage:", error);
  }
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-gray-200 flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded shadow-md w-full max-w-lg space-y-4"
      >
        <h2 className="text-2xl font-bold text-center text-blue-700">
          Registro de Usuario
        </h2>

        {/* Nombre */}
        <div>
          <label className="block font-medium">Nombre completo</label>
          <input
            type="text"
            {...register("nombre", { required: "Este campo es obligatorio", minLength: {
      value: 3,
      message: "Debe tener al menos 3 caracteres", } })}
            className="w-full mt-1 border rounded px-3 py-2"
          />
          {errors.nombre && <p className="text-red-500 text-sm">{errors.nombre.message}</p>}
        </div>

        {/* Correo */}
        <div>
          <label className="block font-medium">Correo electrónico</label>
          <input
            type="email"
            {...register("correo", {
              required: "Este campo es obligatorio",
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Correo inválido",
              },
            })}
            className="w-full mt-1 border rounded px-3 py-2"
          />
          {errors.correo && <p className="text-red-500 text-sm">{errors.correo.message}</p>}
        </div>

        {/* Contraseña */}
        <div>
          <label className="block font-medium">Contraseña</label>
          <input
            type="password"
            {...register("contraseña", {
              required: "Este campo es obligatorio",
              minLength: {
                value: 6,
                message: "Mínimo 6 caracteres",
              },
            })}
            className="w-full mt-1 border rounded px-3 py-2"
          />
          {errors.contraseña && <p className="text-red-500 text-sm">{errors.contraseña.message}</p>}
        </div>

        {/* Confirmar Contraseña */}
        <div>
          <label className="block font-medium">Confirmar contraseña</label>
          <input
            type="password"
            {...register("confirmar", {
              required: "Este campo es obligatorio",
              validate: (value) =>
                value === watch("contraseña") || "Las contraseñas no coinciden",
            })}
            className="w-full mt-1 border rounded px-3 py-2"
          />
          {errors.confirmar && <p className="text-red-500 text-sm">{errors.confirmar.message}</p>}
        </div>

        {/* Tipo de usuario */}
        <div>
          <label className="block font-medium">Tipo de usuario</label>
          <select
            {...register("tipoUsuario")}
            className="w-full mt-1 border rounded px-3 py-2"
          >
            <option value="cliente">Cliente</option>
            <option value="conductor">Conductor</option>
          </select>
        </div>

        {/* Campos del conductor */}
        {tipoUsuario === "conductor" && (
          <div className="space-y-4">
            {/* Tipo de vehículo */}
            <div>
              <label className="block font-medium">Tipo de vehículo</label>
              <select
                {...register("tipoVehiculo", { required: "Este campo es obligatorio" })}
                className="w-full mt-1 border rounded px-3 py-2"
              >
                <option value="">Selecciona una opción</option>
                <option value="Tractomula">Tractomula</option>
                <option value="Camión">Camión</option>
                <option value="Van">Van</option>
                <option value="NPR">NPR</option>
              </select>
              {errors.tipoVehiculo && <p className="text-red-500 text-sm">{errors.tipoVehiculo.message}</p>}
            </div>

            {/* Marca */}
            <div>
              <label className="block font-medium">Marca</label>
              <input
                type="text"
                {...register("marca", { required: "Este campo es obligatorio" })}
                className="w-full mt-1 border rounded px-3 py-2"
              />
              {errors.marca && <p className="text-red-500 text-sm">{errors.marca.message}</p>}
            </div>

            {/* Modelo */}
            <div>
              <label className="block font-medium">Modelo</label>
              <input
                type="text"
                {...register("modelo", { required: "Este campo es obligatorio" })}
                className="w-full mt-1 border rounded px-3 py-2"
              />
              {errors.modelo && <p className="text-red-500 text-sm">{errors.modelo.message}</p>}
            </div>

            {/* Capacidad */}
            <div>
              <label className="block font-medium">Capacidad (Toneladas)</label>
              <input
                type="number"
                {...register("capacidad", {
                  required: "Este campo es obligatorio",
                  min: { value: 0.5, message: "Debe ser mayor que 0" },
                })}
                className="w-full mt-1 border rounded px-3 py-2"
              />
              {errors.capacidad && <p className="text-red-500 text-sm">{errors.capacidad.message}</p>}
            </div>

            {/* Placa */}
            <div>
              <label className="block font-medium">Placa</label>
              <input
                type="text"
                {...register("placa", { required: "Este campo es obligatorio", maxLength: {
      value: 6,
      message: "Debe tener máximo 6 caracteres",}, minLength: {
      value: 6,
      message: "Debe tener minimo 6 caracteres", } })}
                className="w-full mt-1 border rounded px-3 py-2"
              />
              {errors.placa && <p className="text-red-500 text-sm">{errors.placa.message}</p>}
            </div>

            {/* Propiedad del vehículo */}
            <div>
              <label className="block font-medium">¿El vehículo es propio o de empresa?</label>
              <div className="flex space-x-4 mt-1">
                <label>
                  <input
                    type="radio"
                    value="propio"
                    {...register("propiedad", { required: "Este campo es obligatorio" })}
                  />{" "}
                  Propio
                </label>
                <label>
                  <input
                    type="radio"
                    value="empresa"
                    {...register("propiedad", { required: "Este campo es obligatorio" })}
                  />{" "}
                  Empresa
                </label>
              </div>
              {errors.propiedad && <p className="text-red-500 text-sm">{errors.propiedad.message}</p>}
            </div>
          </div>
        )}

        <button
          type="submit"
          className={`w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition ${
            !isValid ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={!isValid}
        >
          Registrarse
        </button>
      </form>
    </div>
  );
}
