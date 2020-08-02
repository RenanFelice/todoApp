import React from 'react';
import TodosList from './components/TodosList'
import Header from './components/Header'
import TodosContextProvider from './context/todosContext'


import styles from './App.module.css'


function App() {


  return (
    <div className={styles.App}>
      <TodosContextProvider>
        <Header/>
        <TodosList/>
      </TodosContextProvider>
    </div>
  );
}

export default App;
