import React from 'react';
import './styles/App.css';
import TodoList from './components/TodoList'
import TodoProvider from './context/todosContext'

function App() {
  return (
    <div className="App">
      <TodoProvider>
        <TodoList />
      </TodoProvider>
    </div>
  );
}

export default App;
