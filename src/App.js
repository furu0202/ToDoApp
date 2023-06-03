import { useState, useRef } from 'react';
import TodoList from './Todolist';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, name: 'sample1', completed: false },
  ]);

  const todoNameRef = useRef();
  const handleAddTodo = () => {
    // タスクを追加
    const name = todoNameRef.current.value;
    setTodos((prevTodos) => {
      return [...prevTodos, { id: '1', name: name, completed: false }];
    });
    todoNameRef.current.value = null;
  };
  return (
    <div>
      <TodoList todos={todos}></TodoList>
      <input type='text' ref={todoNameRef}></input>
      <button onClick={handleAddTodo}>タスクの追加</button>
      <button>完了したタスクの削除</button>
      <div>残りのタスク:0</div>
    </div>
  );
}

export default App;
