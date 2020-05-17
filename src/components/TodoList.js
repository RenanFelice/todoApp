import React, {useContext, useState} from 'react';
import Todo from './Todo'
import '../styles/TodoList.css'
import {TodosContext, DispatchContext} from '../context/todosContext'




const TodoList = () => {
    const todos = useContext(TodosContext)
    const dispatch = useContext(DispatchContext)
    const [task, setTask] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        dispatch({type:'ADD_TODO', task: task})
        setTask('')
    }

    return (
        <div className='TodoList'>
            <h1 className='TodoList-title'>Todo App</h1>
            <form  className='form' onSubmit={handleSubmit}>
                <div className="form-group">
                    <input placeholder='Informe o Todo...' value={task} onChange={e => setTask(e.target.value)} type="text" className="form-control"  aria-describedby="form" />
                </div>
            </form>
            {todos.map(todo => (
                <Todo dispatch={dispatch} key={todo.id} todoObj={todo}/>
            ))}
            
        </div>
    );
}

export default TodoList;