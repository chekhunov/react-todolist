import React, { useState } from 'react'
import axios from 'axios'

export default function AddTaskForm({ lists, onAddTask}) {
    const [isLoading, setIsLoading] = useState(false)
    const [visibleForm, setVisibleForm] = useState(false)
    const [inputValue, setInputValue] = useState(false)
    
    const toggleFormVisible = () => {
        setVisibleForm(!visibleForm)
        setInputValue('')
    }

    const addTask = () => {
        const obj = {
            listId: lists.id,
            text: inputValue,
            completed: false
        }
        setIsLoading(true)
        axios.post('http://localhost:3001/tasks', obj)
        .then(({ data}) =>{   
            onAddTask(lists.id, data)
            toggleFormVisible()
        })
        .catch(() => {
            alert ('Ошибка добавления')
        })
        .finally(() => {
            setIsLoading(false)
        }) 
    }

    return (
        <div className="tasks__form">
            {!visibleForm ? ( <div className="tasks__form-new" onClick={toggleFormVisible}>
                            <svg 
                            width="12" 
                            height="12" 
                            viewBox="0 0 12 12" 
                            fill="none" 
                            xmlns="http://www.w3.org/2000/svg">
                            <path 
                            d="M6 1V11" 
                            stroke="#868686" 
                            strokeWidth="1.5" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"/>
                            <path 
                            d="M1 6H11" 
                            stroke="#868686" 
                            strokeWidth="1.5" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"/>
                            </svg>
                            <span>Новая задача</span>
            </div> ) : (
                
            <div className="tasks__form-block">
                <input className="field"
                value={inputValue} 
                onChange={e => setInputValue(e.target.value)}
                type="text" 
                placeholder="Текст задачи" />

                <button  
                onClick={addTask}
                className="button"
                >
                {isLoading ? 'Добавление...' : 'Добавить'}
                </button>

                <button  
                className="button button--gray"
                onClick={toggleFormVisible}
                >
                Отмена
                </button>
            </div>
            )}
        </div>
    )
}
