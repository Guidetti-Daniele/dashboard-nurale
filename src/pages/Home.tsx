import { useAuth } from "@/contexts/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const {
    auth: { isAuthenticated, username },
  } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) navigate("/login");
  }, []);

  return (
    <div>
      <p>Benvenuto, {username}</p>
    </div>
  );
};

export default Home;
