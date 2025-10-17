import { useAuth } from "@/contexts/AuthContext";

const Home: React.FC = () => {
  const {
    auth: { username },
  } = useAuth();

  return (
    <div>
      <p>Benvenuto, {username}</p>
    </div>
  );
};

export default Home;
