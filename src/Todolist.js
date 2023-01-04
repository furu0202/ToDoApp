import React from 'react'

const Todolist = ({ todos }) => {
  return todos.map((todo) => <todo todo={todo} />);
};

export default Todolist;