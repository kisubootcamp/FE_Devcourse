
import useFetch from "../hooks/useFetch.";

export default function Fectching() {
  const { data, error, loading } = useFetch("http://localhost:3001/posts");

  const {
    data: profile,
    error: errorProfile,
    loading: loadingProfile,
  } = useFetch("http://localhost:3001/profile");

  if (loading) return <h1>Loading</h1>;
  if (error) return <h1>Error: {error}</h1>;
  if (loadingProfile) return <h1>Loading</h1>;
  if (errorProfile) return <h1>Error: {errorProfile}</h1>;
  return (
    <div>
      {JSON.stringify(data, null, 2)}
      {JSON.stringify(profile, null, 2)}
    </div>
  );
}
