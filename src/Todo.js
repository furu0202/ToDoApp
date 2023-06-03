import React from 'react';

const Todo = ({ todo }) => {
  return (
    <div>
      <label>
        <input type='checkbox' checked={todo.completed}></input>
      </label>
      {todo.name}
    </div>
  );
};

export default Todo;
