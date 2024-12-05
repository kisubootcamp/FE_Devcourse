import useAxios from '../hooks/useAxios';

export default function Axios() {
  const { data, loading, error } = useAxios('http://localhost:3001/posts');

  if (loading) return <h1>Loading ...</h1>;
  if (error) return <h1>Error: {error}</h1>;

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
