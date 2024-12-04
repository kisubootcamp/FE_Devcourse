import { useMemo, useState } from 'react';
import A from './components/A';
import { initialItems } from './utils/utils';

function App() {
  console.log('App rendering');

  const [count, setCount] = useState(0);

  const selectedItems = useMemo(
    () => initialItems.find((item) => item.selected),
    []
  );

  return (
    <div className='text-5xl flex flex-col gap-4 items-start'>
      <h1>
        App : {count} \ {selectedItems?.id}
      </h1>
      <button onClick={() => setCount((count) => count + 1)}>App 증가</button>
      <A />
    </div>
  );
}

export default App;
