import { BrowserRouter, Routes, Route } from "react-router";
import ProtectedRoutes from "./components/ProtectedRoutes";

import AuthProvider from "./contexts/AuthContext";

import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Routes that require login go down below */}
          <Route element={<ProtectedRoutes />}>
            <Route index path="/" element={<Home />} />
          </Route>

          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
