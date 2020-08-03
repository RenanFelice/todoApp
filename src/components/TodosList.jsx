import React, { useContext } from 'react'
import Todo from './Todo'
import { TodosContext } from '../context/todosContext'
import styles from './TodosList.module.css'

const TodosList = () => {
    const { todos } = useContext(TodosContext)



    if (todos.length) {
        return <div className={styles.todoList}>{todos.map(todo => <Todo key={todo.id} todo={todo}/>)}</div>
    } else {
        return <h1 className={styles.noTodos}>Sem tarefas <span><i className="far fa-smile-beam"></i></span></h1>
    }
}

export default TodosList
