import { BrowserRouter, Routes, Route } from "react-router";

import { ProtectedRoutes, ROUTE_PATHS } from "./routing";
import { AuthProvider } from "./contexts";
import { Home, Inbox, Calendar, Search, Settings, Login } from "./pages";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
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
