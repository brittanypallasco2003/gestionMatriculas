import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RegisterPage } from "./pages/RegisterPage";
import { LoginPage } from "./pages/LoginPage";
import { AuthProvider } from "./context/AuthContext";
import { HomePage } from "./pages/HomePage";
import { Listar } from "./pages/Listar";
import { CrearAct } from "./pages/CrearAct";
import { ProtectedRoute } from "./ProtectedRoute";
import { PerfilPage } from "./pages/PerfilPage";
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />

          <Route element={<ProtectedRoute/>}>
            <Route path="/listar" element={<Listar />} />
            <Route path="/actualizar/:id" element={<CrearAct />} />
            <Route path="/crear" element={<CrearAct />} />
            <Route path="/perfil" element={<PerfilPage/>} />
          </Route>
          
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
