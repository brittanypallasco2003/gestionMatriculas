import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signUp, user, isAuthenticated, errores } = useAuth();
  const navegar = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navegar("/listar");
  }, [isAuthenticated]); //cuando isAutheticated (estado) cambia a true

  console.log(user);
  const onSubmit = handleSubmit(async (values) => {
    console.log(values);
    signUp(values);
    // const res = await registerRequest(values);
    // console.log(res);
  });

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      {errores.map((e, index) => (
        <div className="bg-red-500 p-2 text-white" key={index}>
          {e}
        </div>
      ))}
      <div className="bg-zinc-800 max-w-full p-10 rounded-md">
        <h1 className="text-2xl font-bold">Registro</h1>
        <form onSubmit={onSubmit}>
          <input
            type="email"
            {...register("email", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Correo electrónico"
          />
          {errors.email && (
            <p className="text-red-500">El email es requerido</p>
          )}
          <input
            type="password"
            {...register("password", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Contraseña"
          />
          {errors.password && (
            <p className="text-red-500">La contraseña es requerida</p>
          )}
          <div className="flex justify-center">
            <button type="submit" className="text">
              Registrarse
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
