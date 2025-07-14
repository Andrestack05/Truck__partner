import { useForm } from "react-hook-form";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

type LoginData = {
  correo: string;
  contraseña: string;
};

export default function LoginCliente() {
  const {
  register,
  handleSubmit,
  formState: { errors, isValid },
} = useForm<LoginData>({ mode: "onChange" });
  const { login } = useUser();
  const navigate = useNavigate();

  const onSubmit = (data: LoginData) => {
    // Aquí puedes agregar lógica real más adelante
    login("conductor"); // Guardamos que es un conductor
    navigate("/conductor/inicio"); // Redirigimos a su dashboard
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded shadow-md w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">
          Ingreso Conductor
        </h2>

        <div>
          <label className="block text-sm font-medium text-gray-700">Correo</label>
          <input
  type="email"
  {...register("correo", {
    required: "El correo es obligatorio",
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: "Formato de correo inválido",
    },
  })}
            className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
          {errors.correo && (
  <p className="text-red-500 text-sm mt-1">{errors.correo.message}</p>
)}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Contraseña</label>
          <input
  type="password"
  {...register("contraseña", {
    required: "La contraseña es obligatoria",
    minLength: {
      value: 6,
      message: "Mínimo 6 caracteres",
    },
  })}
            className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
          {errors.contraseña && (
  <p className="text-red-500 text-sm mt-1">{errors.contraseña.message}</p>
)}
        </div>

        <button
  type="submit"
  disabled={!isValid}
  className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition disabled:bg-gray-300"
>
  Ingresar
</button>
      </form>
    </div>
  );
}
