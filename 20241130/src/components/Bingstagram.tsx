import { useState } from 'react';

export default function Bingstagram() {
  // 화면에 렌더링할 이미지를 배열로 저장
  const pictures = [
    'https://cdn.pixabay.com/photo/2018/10/19/12/14/train-3758523_1280.jpg',
    'https://cdn.pixabay.com/photo/2022/11/29/09/01/winter-7624034_1280.jpg',
    'https://cdn.pixabay.com/photo/2021/11/02/07/59/winter-6762640_1280.jpg',
    'https://cdn.pixabay.com/photo/2022/12/06/19/42/winter-7639603_1280.jpg',
    'https://cdn.pixabay.com/photo/2020/02/08/14/36/trees-4830285_1280.jpg',
    'https://cdn.pixabay.com/photo/2021/01/13/13/46/house-5914171_1280.jpg',
  ];

  // 사진 배열의 useState
  const [picture, setPicture] = useState(pictures);
  // 삭제된 사진 배열의 useState
  const [deletedPicture, setDeletedPicture] = useState<string[]>([]);

  // 삭제 로직
  const handleDelete = (index: number) => {
    // 삭제할 사진을 deleteTarget에 할당
    const deleteTarget = picture[index];
    // setDeletedPicture을 사용하여 이 전에 지워진 사진이 있다면 현 시점에 지워진 사진 앞에 먼저 나열한 후, 그 뒤에 현재 지워진 사진을 추가
    // 추후에 사진을 복구할 때 삭제된 사진 배열의 앞에서부터(최근 삭제된 사진부터) 꺼내기 위함
    setDeletedPicture((prevDeleted) => [deleteTarget, ...prevDeleted]);
    // setPicture을 사용하여 지워진 사진을 제외한 사진들을 화면에 렌더링
    setPicture((prevPictures) => prevPictures.filter((_, i) => i !== index));
  };

  // 복구 로직
  const handleRestore = () => {
    // 복구할 사진이 있는 경우(즉, 삭제된 사진이 있는 경우)에 실행하기 위하여 length가 0 이상인 경우를 가정
    if (deletedPicture.length > 0) {
      // 가장 최근 삭제된 사진(삭제된 사진 배열에 첫 번째 요소)을 lastestDeleted에 할당
      const lastestDeleted = deletedPicture[0];
      // setPicture을 사용하여, 삭제된 사진이 복구되기 전에 남아있던 사진들을 나열하고, 그 뒤에 최근 삭제된 사진을 추가
      setPicture((prevPictures) => [...prevPictures, lastestDeleted]);
      // setDeletedPicture을 사용하여, 이전에 삭제된 사진들의 배열에서 첫 번째 요소를 잘라냄
      setDeletedPicture((prevDeleted) => prevDeleted.slice(1));
    }
  };

  return (
    <div>
      <div className='w-full max-w-4xl mx-auto py-6 px-4'>
        <header className='flex items-center justify-between mb-6'>
          <h1 className='text-2xl font-bold'>BINGSTAGRAM</h1>
          {/* More Buttons */}
          <div className='flex items-center gap-2'>
            <button
              className='inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10 rounded-full'
              onClick={handleRestore}>
              <img src='/undo.svg' alt='Moon icon' className='h-5 w-5' />
              <span className='sr-only'>Toggle dark mode</span>
            </button>
          </div>
        </header>
        <div className='grid grid-cols-3 gap-4'>
          {picture.map((value, index) => (
            <div className='group relative' key={index}>
              <a className='group' href='#'>
                <img
                  src={value}
                  width='400'
                  height='400'
                  alt={`Photo ${index + 1}`}
                  className='w-full h-full object-cover rounded-lg group-hover:opacity-80 transition-opacity'
                  style={{ aspectRatio: '400 / 400', objectFit: 'cover' }}
                />
              </a>
              <button
                className='inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-red-500 text-white hover:bg-red-600 h-10 w-10 absolute top-2 right-2 rounded-full'
                onClick={() => handleDelete(index)}>
                <img src='/delete.svg' alt='Delete icon' className='h-4 w-4' />
                <span className='sr-only'>Delete</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
