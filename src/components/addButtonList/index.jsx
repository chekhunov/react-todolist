import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { List, Badge } from '../'

import closeSvg from '../../assets/img/close.svg'
import './AddButtonList.scss'
const AddButtonList = ({colors, onAdd}) => {

const [isLoading, setIsLoading] = useState(false);
const [visiblePopup, setVisiblePopup] = useState(false)
const [selectedColor, selectColor] = useState(3)
const [inputValue, setInputValue] = useState('')

useEffect(()=>{
  if(Array.isArray(colors)){
    selectColor(colors[0].id)
  }
},[colors])
console.log(colors)

const onClose = () => {
  //закрываем окно
  setVisiblePopup(false)
  //сбрасываем инпут
  setInputValue('')
  //сбрасываем выбранный цввет
  selectColor(colors[0].id)
}

const addList = () => {
  if(!inputValue) {
    alert('Введите название списка')
    return;
  }
  setIsLoading(true);

  axios
  .post('http://localhost:3001/lists', {
    name: inputValue, 
    colorId: selectedColor
  })
  .then(({ data }) => {
    const color = colors.filter(c => c.id === selectedColor)[0].name;
    const listObj = { ...data, color: { name: color } }
    onAdd(listObj)
    onClose()
  })
  .finally(() => {
    setIsLoading(false)
  })
}

    return (
        <div className="add-list">
          <List 
          click = {() => setVisiblePopup(!visiblePopup)}
          items={[
          {
            className: "items__add-button",
            icon: (
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
            )
            ,
            name: 'Добавить список'
          }
          ]} 
          />

          {visiblePopup && 
          <div className="add-list__popup">

            <img 
            onClick={onClose}
            src={closeSvg} 
            className="add-list__popup-close-btn" 
            alt="close button" />

            <input className="field" 
            value={inputValue} 
            onChange={e => setInputValue(e.target.value)} 
            type="text" 
            placeholder="Назначение папки" />

            <div className="add-list__popup-colors">
        
              {colors && colors.map((color) => 
            
                  <Badge 
                  onClick = {() => selectColor(color.id)}
                  key={color.id} 
                  color={color.name} 
                  className={selectedColor === color.id && 'active'}
                  />   
              )}
           
            </div>
                       
            <button 
            onClick={addList} 
            className="button"
            >
             {isLoading ? 'Добавление...' : 'Добавить'}
              </button>
            </div>}
        </div>
    )
}

export default AddButtonList;
