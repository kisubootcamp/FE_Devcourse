// CRUD
// Create - POST
// Read - GET
// Updae - PUT?PATCH
// Delete - DELETE

export default function FetchMethod() {
  // HTTP Method: POST
  // 데이터를 추가할 때
  const postHandler = async () => {
    try {
      const response = await fetch("http://localhost:3001/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: "3", title: "third title", views: 300 }),
      });

      if (!response.ok) throw new Error("Failed to Post!");
      const data = await response.json();

      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  // DELET -> 리소스 삭제
  const deleteHandler = async () => {
    try {
      const response = await fetch("http://localhost:3001/posts/3", {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Failed to Post!");
      const data = await response.json();

      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  // PUT - 모든 리소스를 수정할 때
  const putHandler = async () => {
    try {
      const response = await fetch("http://localhost:3001/posts/1", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: "a new title", views: 50 }),
      });

      if (!response.ok) throw new Error("Failed to Post!");
      const data = await response.json();

      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };
  const patchHandler = async () => {
    try {
      const response = await fetch("http://localhost:3001/posts/1", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ views: 250 }),
      });

      if (!response.ok) throw new Error("Failed to Post!");
      const data = await response.json();

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
