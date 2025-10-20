import { BrowserRouter, Routes, Route } from "react-router";
import ProtectedRoutes from "./components/ProtectedRoutes";
import { ROUTE_PATHS } from "./constants/routes";

import AuthProvider from "./contexts/AuthContext";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Inbox from "./pages/Inbox";
import Calendar from "./pages/Calendar";
import Search from "./pages/Search";
import Settings from "./pages/Settings";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Routes that require login go down below */}
          <Route element={<ProtectedRoutes />}>
            <Route path={ROUTE_PATHS.home} element={<Home />} />
            <Route path={ROUTE_PATHS.inbox} element={<Inbox />} />
            <Route path={ROUTE_PATHS.calendar} element={<Calendar />} />
            <Route path={ROUTE_PATHS.search} element={<Search />} />
            <Route path={ROUTE_PATHS.settings} element={<Settings />} />
          </Route>

          <Route path={ROUTE_PATHS.login} element={<Login />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
