import { useAuth } from "@/hooks";

export const Home: React.FC = () => {
  const {
    auth: { username },
  } = useAuth();

  return (
    <>
      <div className="h-32 flex justify-center items-center">
        <p className="text-3xl text-black text-center">Benvenuto, {username}</p>
      </div>
      <p className="h-[1000px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
        pariatur quos consequuntur laborum quod iure ipsa, optio ducimus dicta,
        exercitationem ipsam illum! Voluptate cupiditate ut eaque rem error
        quisquam alias nemo facilis voluptatum. Tempora, magni! Incidunt
        recusandae sequi earum sint tempora sed soluta. Fugit quidem beatae
        accusantium cum facere voluptate at! Voluptas odit quia aspernatur sequi
        veritatis dicta eos exercitationem repellat deleniti, id quod esse
        aliquam blanditiis rerum ex accusantium recusandae perferendis, sed iste
        laboriosam. Possimus praesentium repellendus sint ratione aperiam
        explicabo est, facere ut quam quos id quibusdam sequi eaque! Facere
        voluptatem eum consectetur expedita? Odit explicabo laudantium quasi?
      </p>
    </>
  );
};
