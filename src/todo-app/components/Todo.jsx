import React from 'react'
import classNames from 'classnames'
import AngleRight from 'react-icons/lib/fa/angle-right'

const Todo = ({onClick, text, completed}) => {
  let liClass = classNames({completed}, 'todo-item')
  return (
    <li onClick={onClick} className={liClass}><AngleRight/>{text}</li>
  )
}

export default Todo
