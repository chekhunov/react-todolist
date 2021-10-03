import React from 'react';
import classNames from 'classnames';
import './List.scss';

//функция в виде ES6
const List = ({items, isRemovable, className}) => {
    return (
        <ul className="menu__list items">
              {items && items.map((item) => 
              <li key={item.id} className={classNames("menu__list-title mb-10 list", item.className, {'active': item.active })}>
              <i>
              {item.icon ? (item.icon) : (<i className={`badge badge--${item.color}`}></i>)}
              </i>
                <span>{item.name}</span>
              </li>
              )}
        </ul>
    )
}

export default List;