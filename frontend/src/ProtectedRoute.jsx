import {  Navigate, Outlet} from "react-router-dom";
import { useAuth } from "./context/AuthContext";

export function ProtectedRoute({}) {
  const { user, isAuthenticated } = useAuth();

  //si el usuario no está autenticado lo redirecciona
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}