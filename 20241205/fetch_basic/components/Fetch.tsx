import React from "react";
import useFetch from "../hooks/useFetch";

const Fetch = () => {
  const {
    data,
    error,
    isLoading: loading,
  } = useFetch("http://localhost:3001/posts");

  const {
    data: profile,
    error: errorProfile,
    isLoading: loadingProfile,
  } = useFetch("http://localhost:3001/profile");

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>Error: {error}</h1>;
  }
  if (loadingProfile) {
    return <h1>Loading...</h1>;
  }
  if (errorProfile) {
    return <h1>Error: {errorProfile}</h1>;
  }

  return (
    <>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <pre>{JSON.stringify(profile, null, 2)}</pre>
    </>
  );
};

export default Fetch;
