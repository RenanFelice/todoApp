import React, { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';


export const TodosContext = createContext()

const TodosContextProvider = (props) => {

    const [todos, setTodos] = useState([{ id: uuidv4(), task: 'comprar mistura' }, { id: uuidv4(), task: 'estudar' }, { id: uuidv4(), task: 'jogar valorant' }])
    

    const addTodo = newTodo => {

        setTodos([...todos, {task: newTodo, id: uuidv4()}])
    }
    
    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const editTodo = (id, task) => {
        setTodos(todos.map(item => {
            if(item.id === id) return {id:item.id, task}
            else return item
        }))
    }

    return (
        <TodosContext.Provider value={{todos, addTodo, deleteTodo, editTodo}}>
            {props.children}
        </TodosContext.Provider>
    )
}

export default TodosContextProvider
