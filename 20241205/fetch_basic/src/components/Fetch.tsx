import useFetch from "../hooks/useFetch";

// 생성(마운트)
// 수정(업데이트)
// 삭제(언마운트)
export default function Fetch() {
  const { data, error, loading } = useFetch("http://localhost:3001/posts");
  const {
    data: profile,
    error: errorProfile,
    loading: loadingProfile,
  } = useFetch("http://localhost:3001/profile");

  if (loading) return <h1>Loading..</h1>;
  if (error) return <h1>Error: {error}</h1>;
  if (loadingProfile) return <h1>Profile Loading..</h1>;
  if (errorProfile) return <h1>Profile Error: {errorProfile}</h1>;

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <pre>{JSON.stringify(profile, null, 2)}</pre>
    </div>
  );
}
