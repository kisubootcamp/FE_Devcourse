
import useAxios from "../hooks/useAxios";

export default function Axios() {
  const { data, loading, error } = useAxios(`http://localhost:3001/posts`);
  //   const [data, setData] = useState(null);
  //   const [loading, setLoading] = useState(false);
  //   const [error, setError] = useState(null);

  if (loading) return <div>loading</div>;
  if (error) return <div>{error}</div>;
  return <div> {JSON.stringify(data, null, 2)}</div>;
}
