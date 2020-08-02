import React, { useState, useContext } from 'react'
import styles from './Todo.module.css'
import cx from 'classnames'
import { TodosContext } from '../context/todosContext'




const Todo = ({ todo }) => {
    const { deleteTodo, editTodo } = useContext(TodosContext)
    const [finished, setFinished] = useState(false)
    const [fadeOut, setFadeOut] = useState(false)
    const [isEditing, setIsEditing] = useState(false)
    const [editInputText, setEditInputText] = useState(todo.task)

    const handleSubmit = e => {
        e.preventDefault()
        editTodo(todo.id, editInputText)
        setIsEditing(false)
    }

    return (
        <div className={cx(styles.todo, { [styles.fadeOut]: fadeOut })}>
            {isEditing ?
                <>
                    <form className={styles.editForm}
                        onSubmit={e => {
                            handleSubmit(e)
                        }}>
                        <input className={styles.editInpu}

                            value={editInputText}
                            required
                            maxLength={30}
                            onChange={e => {
                                setEditInputText(e.target.value)
                            }}
                        />
                    </form>
                    <div className={styles.editIcons}>
                        <span className={styles.confirmEdit}
                            onClick={e => {
                                handleSubmit(e)
                            }}
                        ><i className="fas fa-check"></i></span>
                        <span className={styles.cancelEdit}
                            onClick={e => {
                                setEditInputText(todo.task)
                                setIsEditing(false)
                            }}
                        ><i className="fas fa-times"></i></span>
                    </div>
                </>
                :
                <>
                    <div
                        onClick={e => {
                            e.stopPropagation()
                            setFinished(!finished)
                        }}
                        className={cx(styles.task, { [styles.finished]: finished })}>{todo.task}
                    </div>
                    <div className={styles.iconsContainer}>
                        <span className={styles.deleteBtn}
                            onClick={e => {
                                e.stopPropagation()
                                setFadeOut(!fadeOut)
                                setTimeout(() => {
                                    deleteTodo(todo.id)
                                }, 400);
                            }}><i className="fas fa-trash"></i></span>
                        <span className={styles.editBtn}
                            onClick={e => setIsEditing(true)}
                        ><i className="fas fa-edit"></i></span>
                    </div>
                </>
            }


        </div>
    )
}

export default Todo


