// CRUD
// Create - POST
// Read - GET
// Updae - PUT?PATCH
// Delete - DELETE
import axios from "axios";

export default function AxiosMethod() {
  // HTTP Method: POST
  // 데이터를 추가할 때
  const postHandler = async () => {
    try {
      const { data } = await axios.post("http://localhost:3001/posts", {
        id: "3",
        title: "third title",
        views: 300,
      });
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  // DELET -> 리소스 삭제
  const deleteHandler = async () => {
    try {
      const { data } = await axios.delete("http://localhost:3001/posts/3");
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  // PUT - 모든 리소스를 수정할 때
  const putHandler = async () => {
    try {
      const { data } = await axios.put("http://localhost:3001/posts/1", {
        title: "a new title",
        views: 3100,
      });
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  const patchHandler = async () => {
    try {
      const { data } = await axios.patch("http://localhost:3001/posts/1", {
        views: 1200,
      });
      console.log(data);
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
