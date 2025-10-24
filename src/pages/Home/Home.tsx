import { useAuth } from "@/hooks";

export const Home: React.FC = () => {
  const {
    auth: { username },
  } = useAuth();

  return (
    <div className="h-32 flex justify-center items-center">
      <p className="text-3xl text-black text-center">Benvenuto, {username}</p>
    </div>
  );
};
