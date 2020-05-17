import React, { useState } from 'react';
import '../styles/Todo.css'

const Todo = (props) => {
    
    const { task, id, completed } = props.todoObj;
    const dispatch = props.dispatch
    const [editing, setEditing] = useState(false)
    const [newTask, setNewTask] = useState(task)
    

    return (
        editing ?
            <form onSubmit={e => {
                e.preventDefault()
                 dispatch({type: 'EDIT_TODO', id, newTask})
                 setEditing(!editing)
            }} className='TodoEditing'>
                <div className="form-group">
                    <input value={newTask} onChange={e => setNewTask(e.target.value)} type="text" className="form-control" />
                </div>
            </form> :
            <div onClick={ e => dispatch({type:'TOGGLE_COMPLETED', id})} className={completed ? 'Todo Completed' : 'Todo'}>
                <p >{task}</p>
                <div className='icons'>
                    <i onClick={() => dispatch({ type: 'REMOVE_TODO', id })} className="fas fa-trash"></i>
                    <i onClick={() => setEditing(!editing)} className="fas fa-pencil-alt"></i>
                </div>



            </div>
    );
}

export default Todo;