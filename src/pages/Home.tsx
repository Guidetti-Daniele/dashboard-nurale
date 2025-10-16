import { useAuth } from "@/contexts/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const { auth } = useAuth();
  const { isAuthenticated, username } = auth;

  useEffect(() => {
    if (!isAuthenticated) navigate("/login");
  }, []);

  return (
    <div>
      <p>Benvenutom, {username}</p>
    </div>
  );
};

export default Home;
