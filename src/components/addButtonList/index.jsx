import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { List, Badge } from '../'

import closeSvg from '../../assets/img/close.svg'
import './AddButtonList.scss'
const AddButtonList = ({colors, onAdd}) => {

const [visiblePopup, setVisiblePopup] = useState(false)
const [selectedColor, selectColor] = useState(3)
const [inputValue, setInputValue] = useState('')


useEffect(()=>{
  if(Array.isArray(colors)){
    selectColor(colors[0].id)
    console.log()
  }
},[colors])

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

  axios.post('http://localhost:3001/lists', {
    name: inputValue, colorId: selectedColor
  }).then(({ data }) => {
    const color = colors.filter(c => c.id === selectedColor)[0].name;
    const listObj = { ...data, color: { name: color } }
    onAdd(listObj)
    onClose()
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
            stroke-width="1.5" 
            stroke-linecap="round" 
            stroke-linejoin="round"/>
            <path 
            d="M1 6H11" 
            stroke="#868686" 
            stroke-width="1.5" 
            stroke-linecap="round" 
            stroke-linejoin="round"/>
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
            className="add-list__popup-close-btn" 
            src={closeSvg} 
            alt="close button" />

            <input className="field" value={inputValue} onChange={e => setInputValue(e.target.value)} type="text" placeholder="Назначение папки" />
            <div className="add-list__popup-colors">
        
              {colors && colors.map((color, index) => 
            
                  <Badge 
                  onClick = {() => selectColor(color.id)}
                  key={index} 
                  color={color.name} 
                  className={selectedColor === color.id && 'active'}
                  />
             
              )}
           
            </div>
                       
            <button 
            onClick={addList} 
            className="button"
            >
              Добавить</button>
            </div>}
        </div>
    )
}

export default AddButtonList;