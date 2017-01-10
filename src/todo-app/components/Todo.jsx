import React from 'react'
import classNames from 'classnames'
import '../styles/styles.css'

const Todo = ({onClick, text, completed}) => {
  let liClass = classNames({completed})
  return (
    <li onClick={onClick} className={liClass}>{text}</li>
  )
}

export default Todo
