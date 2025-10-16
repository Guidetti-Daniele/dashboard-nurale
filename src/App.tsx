import { BrowserRouter, Routes, Route } from "react-router";

import AuthProvider from "./contexts/AuthContext";

import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
