import { createContext, useState, useContext, useEffect } from "react";
import { registerRequest, loginRequest, API } from "../api/auth.js";
import axios from "axios";

export const AuthContext = createContext();
//TODOS LOS COMPENENTES PODRÁN LLAMAR A LOS DATOS DEL USUARIO Y LA FUNCIÓN REGISTER

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe estar dentro del AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setAuthenticated] = useState(false); //conocer si el usuario se ha autenticado
  const [errores, setErrores] = useState([]);

  const perfil = async (token) => {
    try {
      const url = `${API}/perfil`;
      const options = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const respuesta = await axios.get(url, options);
      setUser(respuesta.data);
      setAuthenticated(true);
    } catch (error) {
      console.log(error);
    }
  };

  const signUp = async (user) => {
    try {
      const res = await registerRequest(user);
      console.log(res.data);
      setUser(res.data);
      setAuthenticated(true);
    } catch (error) {
      console.log(error.response.data);
      setErrores(error.response.data.msg);
    }
  };

  const signIn = async (user) => {
    try {
      const res = await loginRequest(user);
      localStorage.setItem('token',res.data.token)
      console.log(res);
      setAuthenticated(true);
      setUser(res.data);
    } catch (error) {
      console.log(error.response.data);
      setErrores(error.response.data.msg);
    }
  };

  useEffect(() => {
    if (errores.length > 0) {
      const temporizadorError = setTimeout(() => setErrores([]), 4000); //si pasan 6 segundos se elimina el mensaje de error del backend de la interfaz
      return () => clearTimeout(temporizadorError);
    }
  }, [errores]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token)
    if (token) {
      perfil(token);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ signUp, user, isAuthenticated, errores, signIn }}
    >
      {children}
    </AuthContext.Provider>
  );
};
