import React, {Fragment} from 'react'
import List from './list'

const AddButtonList = () => {
    return (
        <Fragment>
        <List items={[
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

      <div className="add-list-popup">123</div>
        </Fragment>
    )
}

export default AddButtonList;