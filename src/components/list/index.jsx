import React from 'react';
import classNames from 'classnames';
import Badge from '../badge/index'
import './List.scss';
import removeSvg from '../../assets/img/remove.svg'

//функция в виде ES6
const List = ({items, isRemovable, className, click, onRemove}) => {
    return (
        <ul className="menu__list items" onClick={click}>
              {items && items.map((item) => 
              <li key={item.id} className={classNames("menu__list-title mb-10 list", item.className, {'active': item.active })}>
              <i>
              {item.icon ? (item.icon) : (
                <Badge color={item.color} />
              )}
              </i>
                <span>{item.name}</span>

                {isRemovable && 
                <img 
                className={"list__remove-icon"} 
                src={removeSvg} 
                alt="remove svg"
                onClick={() => onRemove(item)} 
                />}
              </li>
              )}
        </ul>
    )
}

export default List;