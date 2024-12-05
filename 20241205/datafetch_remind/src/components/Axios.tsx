import useAxios from "../hooks/useAxios";

export default function Axios() {
  const {
    data: posts,
    error,
    isLoading: loading,
  } = useAxios("http://localhost:3001/posts");

  const {
    data: profile,
    error: errorProfile,
    isLoading: loadingProfile,
  } = useAxios("http://localhost:3001/profile");

  if (loading) return <div>Posts Loading...</div>;
  if (error) return <div>Posts Error: {error}</div>;

  if (loadingProfile) return <div>Profile Loading...</div>;
  if (errorProfile) return <div>Profile Error: {error}</div>;

  return (
    <>
      <pre>{JSON.stringify(posts, null, 2)}</pre>
      <pre>{JSON.stringify(profile, null, 2)}</pre>
    </>
  );
}
