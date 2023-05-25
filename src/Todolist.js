import React from 'react';

const TodoList = () => {
  return (
    <div>
      <TodoList></TodoList>
      <input type='text'></input>
      <button>タスクの追加</button>
      <button>完了したタスクの削除</button>
      <div>残りのタスク:0</div>
    </div>
  );
};

export default TodoList;
