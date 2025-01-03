import { useAuthStore } from "../stores/authStore";

const Home = () => {
  const accessToken = useAuthStore((state) => state.accessToken);
  return (
    <>
      <h1>Home</h1>
      <h2>{accessToken}</h2>
    </>
  );
};

export default Home;