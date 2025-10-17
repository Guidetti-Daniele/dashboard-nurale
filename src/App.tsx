import { BrowserRouter, Routes, Route } from "react-router";
import ProtectedRoutes from "./components/ProtectedRoutes";
import { HOME_ROUTE, LOGIN_ROUTE } from "./constants/routes";

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
            <Route index path={HOME_ROUTE} element={<Home />} />
          </Route>

          <Route path={LOGIN_ROUTE} element={<Login />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
