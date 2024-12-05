export default function FetchMethod() {
  const postHandler = async () => {
    try {
      const res = await fetch(`http://localhost:3001/posts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: "3",
          title: "c title",
          views: 0,
        }),
      });
      if (!res.ok) throw new Error("Failed to Post.");
      const data = await res.json();
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };
  const deleteHandler = async () => {
    try {
      const res = await fetch(`http://localhost:3001/posts/3`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed to Post.");
      const data = await res.json();
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  const putHandler = async () => {
    try {
      const res = await fetch(`http://localhost:3001/posts/3`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: "new title",
          views: 10,
        }),
      });
      if (!res.ok) throw new Error("Failed to Post.");
      const data = await res.json();
      console.log(data);
    } catch (e) {}
  };
  const patchHandler = async () => {
    try {
      const res = await fetch(`http://localhost:3001/posts/3`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: "new patch title",
          views: 20,
        }),
      });
      if (!res.ok) throw new Error("Failed to Post.");
      const data = await res.json();
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
