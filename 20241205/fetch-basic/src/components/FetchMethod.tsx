export default function FetchMethod() {
  // CRUD
  // 데이터를 추가할 때 사용
  const postHandler = async () => {
    try {
      const response = await fetch(`http://localhost:3001/posts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: '3', title: 'third title', views: 300 }),
      });

      if (!response.ok) throw new Error('Failed to POST');
      const data = await response.json();
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  // 리소스를 삭제할 때 사용
  const deleteHandler = async () => {
    try {
      const response = await fetch(`http://localhost:3001/posts/3`, {
        method: 'DELETE',
      });

      if (!response.ok) throw new Error('Failed to POST');
      const data = await response.json();
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  // 모든 리소스(리소스를 식별할 수 있는 고유한 id 제외)를 수정할 때 사용
  const putHandler = async () => {
    try {
      const response = await fetch(`http://localhost:3001/posts/1`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: 'a new title', views: 500 }),
      });

      if (!response.ok) throw new Error('Failed to POST');
      const data = await response.json();
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  // 리소스 중 일부분을 변경할 때
  const patchHandler = async () => {
    try {
      const response = await fetch(`http://localhost:3001/posts/1`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: 'a patch title', views: 150 }),
      });

      if (!response.ok) throw new Error('Failed to POST');
      const data = await response.json();
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div className='flex gap-2 underline'>
        <button onClick={postHandler}>POST</button>
        <button onClick={deleteHandler}>DELETE</button>
        <button onClick={putHandler}>PUT</button>
        <button onClick={patchHandler}>PATCH</button>
      </div>
    </>
  );
}
