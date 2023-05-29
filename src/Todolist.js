import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos }) => {
  return todos.map((todo) => <Todo todo={todo}></Todo>);
};

export default TodoList;
