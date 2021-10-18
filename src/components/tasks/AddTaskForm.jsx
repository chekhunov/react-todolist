import React from 'react'

export default function AddTaskForm() {
    return (
        <div className="tasks__form">
            <div className="tasks__form-new">
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
            </div>
        </div>
    )
}
