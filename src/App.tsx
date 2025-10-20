import { BrowserRouter, Routes, Route } from "react-router";
import ProtectedRoutes from "./components/ProtectedRoutes";
import { ROUTE_PATHS } from "./constants/routes";

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
            <Route index path={ROUTE_PATHS.home} element={<Home />} />
          </Route>

          <Route path={ROUTE_PATHS.login} element={<Login />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
