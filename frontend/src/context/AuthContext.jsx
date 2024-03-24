import { createContext, useState, useContext } from "react";
import { registerRequest } from "../api/auth.js";

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
  const [user, setUser] = useState(null)
  const [isAuthenticated, setAuthenticated]=useState(false)//conocer si el usuario se ha autenticado
const [errores, serErrores]=useState([])

  const signUp = async (user) => {
      try {
        const res = await registerRequest(user);
        console.log(res.data);
        setUser(res.data);
        setAuthenticated(true)
    } catch (error) {
        console.log(error.response.data);
        serErrores(error.response.data.msg)
    }
  };

  return (
    <AuthContext.Provider value={{ signUp, user ,isAuthenticated,errores}}>
        {children}
    </AuthContext.Provider>
  );
};
