import React, {createContext, useReducer} from 'react';
import reducer from '../reducer/todoReducer'

const defaultTodos = [
    { id: 1, task: "Fazer uma entrevista de emprego", completed: false },
    { id: 2, task: "Conseguir o emprego :)", completed: true }
  ];


export const TodosContext = createContext();
export const DispatchContext = createContext();


const TodoProvider = (props) => {
    const [todos, dispatch] = useReducer(reducer, defaultTodos)
    return ( 
        <TodosContext.Provider value={todos}>
            <DispatchContext.Provider value={dispatch}>
            {props.children}
            </DispatchContext.Provider>
        </TodosContext.Provider>
     );
}
 
export default TodoProvider;