import axios from 'axios';

export default function AxiosMethod() {
  // CRUD
  // 데이터를 추가할 때 사용
  const postHandler = async () => {
    try {
      const { data } = await axios.post(`http://localhost:3001/posts`, {
        id: '3',
        title: 'third title',
        views: 300,
      });

      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  // 리소스를 삭제할 때 사용
  const deleteHandler = async () => {
    try {
      const { data } = await axios.delete(`http://localhost:3001/posts/3`);

      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  // 모든 리소스(리소스를 식별할 수 있는 고유한 id 제외)를 수정할 때 사용
  const putHandler = async () => {
    try {
      const { data } = await axios.put(`http://localhost:3001/posts/1`, {
        title: 'a new title',
        views: 500,
      });

      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  // 리소스 중 일부분을 변경할 때
  const patchHandler = async () => {
    try {
      const { data } = await axios.patch(`http://localhost:3001/posts/1`, {
        title: 'a patch title',
        views: 150,
      });
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
