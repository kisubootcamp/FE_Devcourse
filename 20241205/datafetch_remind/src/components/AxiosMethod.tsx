import axios from "axios";

export default function AxiosMethod() {
  const postHandler = async () => {
    try {
      const res = await axios.post("http://localhost:3001/posts", {
        id: "3",
        title: "a title",
        views: 100,
      });

      console.log(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  const deleteHandler = async () => {
    try {
      const res = await axios.delete("http://localhost:3001/posts/3");
      console.log(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  const putHandler = async () => {
    try {
      const res = await axios.put("http://localhost:3001/posts/1", {
        title: "a new title",
        views: 500,
      });

      console.log(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  const patchHandler = async () => {
    try {
      const res = await axios.patch("http://localhost:3001/posts/1", {
        title: "a patch title",
      });

      console.log(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div className="flex gap-2 underline">
        <button onClick={postHandler}>POST</button>
        <button onClick={deleteHandler}>DELETE</button>
        <button onClick={putHandler}>PUT</button>
        <button onClick={patchHandler}>PATCH</button>
      </div>
    </>
  );
}
