import React from 'react';
import classNames from 'classnames';
import axios from 'axios'
import Badge from '../badge/index'
import './List.scss';
import removeSvg from '../../assets/img/remove.svg'

//функция в виде ES6
const List = ({items, isRemovable, className, click, onRemove, onClickItem, activeItem }) => {

  const removeList = (item) => {
    if (window.confirm('Вы действительно хотите удалить?')) {
      axios.delete('http://localhost:3001/lists/' + item.id).then(() => {
        onRemove(item.id)
      })
    }

  }
    return (
        <ul className="menu__list items" onClick={click}>
              {items && items.map((item) => 
              <li 
              key={item.name + item.id} 
              className={classNames( "menu__list-title mb-10 list", item.className, {active: activeItem && activeItem.id === item.id})}
              onClick={onClickItem ? () => onClickItem(item) : null}
              >
              <i>
              {item.icon ? 
              item.icon : 
                <Badge color={item.color.name} 
                />
              }
              </i>
                <span>{item.name} {item.tasks && item.tasks.length > 0 && ` (${item.tasks.length})`}</span>

                {isRemovable && 
                <img 
                className={"list__remove-icon"} 
                src={removeSvg} 
                alt="remove svg"
                onClick={() => removeList(item)} 
                />}
              </li>
              )}
        </ul>
    )
}

export default List;