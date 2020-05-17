import { v4 as uuidv4 } from 'uuid';

const reducer = (state, action) => {
    switch(action.type){
        case 'ADD_TODO':
            return [...state, {id: uuidv4(), task: action.task, completed:false}];
        case 'REMOVE_TODO':
            return state.filter(todo => todo.id !== action.id)
        case 'EDIT_TODO':
            return state.map(todo =>
                todo.id === action.id ? { ...todo, task: action.newTask } : todo
              );
        case 'TOGGLE_COMPLETED':
            return state.map(todo =>
                todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
              );
        default:
            return state;
    }
}

export default reducer;