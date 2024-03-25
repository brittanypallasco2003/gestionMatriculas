import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";

export function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signIn, user, isAuthenticated, errores } = useAuth();
  
  const onSubmit = handleSubmit((data) => {
    signIn(data)
    console.log(data);
  });

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      {errores.map((e, index) => (
        <div className="bg-red-500 p-2 text-white" key={index}>
          {e}
        </div>
      ))}
      <div className="bg-zinc-800 max-w-full p-10 rounded-md">
        <h1 className="text-2xl font-bold">Login</h1>
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
          <button type="submit">Iniciar Sesión</button>
        </form>
      </div>
    </div>
  );
}
