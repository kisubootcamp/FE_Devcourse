import React from 'react';

export default React.memo(function TodoListItem({
  todo,
  toggleTodo,
  removeTodo,
}: {
  todo: Todo;
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}) {
  console.log('TodoListItem Rendering');

  return (
    <li className='flex items-center justify-between p-3 border-b hover:bg-gray-100 transition-colors'>
      <div className='flex items-center'>
        <input
          type='checkbox'
          className='mr-3 h-4 w-4 text-blue-500 focus:ring-blue-400'
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />
        <span className={`${todo.completed && 'line-through'}`}>
          {todo.text}
        </span>
      </div>
      <button
        className='text-red-500 hover:text-red-700 ml-4'
        onClick={() => removeTodo(todo.id)}>
        Delete
      </button>
    </li>
  );
});
