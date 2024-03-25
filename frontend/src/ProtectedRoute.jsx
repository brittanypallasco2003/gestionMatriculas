import {  Navigate, Outlet} from "react-router-dom";
import { useAuth } from "./context/AuthContext";

export function ProtectedRoute({}) {
  const { loading, isAuthenticated } = useAuth();

  console.log(loading, isAuthenticated);

  //si el usuario no está autenticado lo redirecciona
  // if(loading) return <h1>Loading...</h1>

  if ( !loading && !isAuthenticated) {
    return <Navigate to="/login" replace />;}

  return <Outlet />;
}