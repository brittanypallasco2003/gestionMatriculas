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
    <div className="bg-zinc-800 max-w-md p-10 rounded-md">
      {
        errores.map((e,index)=>(
          <div className="bg-red-500 p-2 text-white" key={index}>
            {e}
          </div>
        ))
      }
      <form onSubmit={onSubmit}>
        <input
          type="email"
          {...register("email", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          placeholder="Correo electrónico"
        />
        {errors.email && (
          <p className="text-red-500">El correo electrónico es requerido</p>
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
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
}
