import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RegisterPage } from "./pages/RegisterPage";
import { LoginPage } from "./pages/LoginPage";
import { AuthProvider } from "./context/AuthContext";
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Home page</h1>} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/listar" element={<h1>actualizar</h1>} />
          <Route path="/actualizar" element={<h1>actualizar</h1>} />
          <Route path="/crear" element={<h1>Crear</h1>} />
          <Route path="/visualizar/:id" element={<h1>Visualizar</h1>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
