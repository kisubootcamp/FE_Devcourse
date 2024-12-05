import axios from "axios";

export default function AxiosMethod() {
  const postHandler = async () => {
    try {
      const { data } = await axios.post(`http://localhost:3001/posts`, {
        id: "3",
        title: "c title",
        views: 0,
      });
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };
  const deleteHandler = async () => {
    try {
      const { data } = await axios.delete(`http://localhost:3001/posts/3`);

      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  const putHandler = async () => {
    try {
      const { data } = await axios.put(`http://localhost:3001/posts/3`, {
        title: "new title",
        views: 10,
      });

      console.log(data);
    } catch (e) {}
  };
  const patchHandler = async () => {
    try {
      const { data } = await axios.patch(`http://localhost:3001/posts/3`, {
        title: "new patch title",
        views: 20,
      });

      console.log(data);
    } catch (e) {}
  };
  return (
    <div className="flex gap-2 underline">
      <button onClick={postHandler}>POST</button>
      <button onClick={deleteHandler}>DELETE</button>
      <button onClick={putHandler}>PUT</button>
      <button onClick={patchHandler}>PATCH</button>
    </div>
  );
}
