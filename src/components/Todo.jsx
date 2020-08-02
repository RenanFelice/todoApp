import React, { useState, useContext, useRef } from 'react'
import styles from './Todo.module.css'
import cx from 'classnames'
import { Tooltip } from '@material-ui/core'
import { TodosContext } from '../context/todosContext'




const Todo = ({ todo }) => {
    const { deleteTodo, editTodo } = useContext(TodosContext)
    const [finished, setFinished] = useState(false)
    const [fadeOut, setFadeOut] = useState(false)
    const [isEditing, setIsEditing] = useState(false)
    const [editInputText, setEditInputText] = useState(todo.task)
    const editInputEl = useRef(null)

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
                            ref={editInputEl}
                            value={editInputText}
                            required
                            maxLength={30}
                            onChange={e => {
                                setEditInputText(e.target.value)
                            }}
                        />
                    </form>
                    <div className={styles.editIcons}>
                        <Tooltip title="Confirmar">
                            <span className={styles.confirmEdit}
                                onClick={e => {
                                    handleSubmit(e)
                                }}
                            ><i className="fas fa-check"></i></span>
                        </Tooltip>
                        <Tooltip title="Cancelar">
                            <span className={styles.cancelEdit}
                                onClick={e => {
                                    setEditInputText(todo.task)
                                    setIsEditing(false)
                                }}
                            ><i className="fas fa-times"></i></span>
                        </Tooltip>
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
                        <Tooltip title="Apagar">
                            <span className={styles.deleteBtn}
                                onClick={e => {
                                    e.stopPropagation()
                                    setFadeOut(!fadeOut)
                                    setTimeout(() => {
                                        deleteTodo(todo.id)
                                    }, 400);
                                }}><i className="fas fa-trash"></i></span>
                        </Tooltip>
                        <Tooltip title="Editar">
                            <span className={styles.editBtn}
                                onClick={async e => {
                                    await setIsEditing(true)
                                    editInputEl.current.focus()
                                }}
                            ><i className="fas fa-edit"></i></span>
                        </Tooltip>
                    </div>
                </>
            }


        </div>
    )
}

export default Todo


