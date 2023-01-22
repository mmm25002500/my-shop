import { useState, useEffect } from 'react';

import List from './components/List';

const App = () => {
  const [ todoList, setTodoList ] = useState(JSON.parse(localStorage.getItem('todoList')) || []);

  const addTodo = (event) => {
    setTodoList([
      ...todoList,
      {
        id: Date.now(),
        name: event.target.previousElementSibling.value,
        status: false
      }
    ]);
    event.target.previousElementSibling.value = '';
  };

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }, [ todoList ]);

  const remoteAllTodo = () => {
    setTodoList([]);
  };

  return (
    <div>
      <div className="bg-indigo-500 p-5 h-screen">
        <div className="max-w-[768px] m-auto bg-white p-5">
          <h1 className="text-center text-2xl mb-4">React ToDoList</h1>
          <div className="flex">
            <input type="text" className="w-full rounded-l-lg border-l-2 border-y-2 border-indigo-300 pl-4 focus:outline-indigo-500 focus:outline-none focus:outline-offset-0" placeholder="請輸入你的代辦事項" />
            <button onClick={ addTodo } className="w-[50px] h-[50px] border-0 bg-sky-500 hover:bg-sky-600 rounded-r-lg text-white transition duration-700">+</button>
          </div>

          <List todoList={ todoList } setTodoList={ setTodoList }/>

          <div className="flex justify-between items-center  mt-5">
            <p>
              目前有 <span className="font-medium">{ todoList.length }</span> 個事項待完成
            </p>

            <button onClick={ remoteAllTodo } type="button" className="bg-red-300 p-2 rounded-md hover:bg-red-400 transition duration-700">Clear All Todo</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;