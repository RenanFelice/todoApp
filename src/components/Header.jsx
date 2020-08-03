import React, { useContext } from 'react'
import styles from './Header.module.css'
import { TodosContext } from '../context/todosContext'
import { useState } from 'react'

const Header = () => {

    const { addTodo } = useContext(TodosContext)
    const [textInput, setTextInput] = useState('')

    return (
        <div className={styles.header}>
            <h1 className={styles.headerTitle}>Todo App</h1>
            <h5 className={styles.headerSubtitle}>aplicativo simples de tarefas</h5>
            <form className={styles.form}
                onSubmit={e => {
                    e.preventDefault()
                    addTodo(textInput)
                    setTextInput('')
                }
                }>
                <input
                    placeholder={'Adicionar tarefa...'}
                    maxLength={30}
                    value={textInput}
                    required
                    onChange={e => setTextInput(e.target.value)}
                />
            </form>
        </div>
    )
}

export default Header
