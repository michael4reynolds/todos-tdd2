import React from 'react'

const Todo = ({onClick, text, completed}) => {
  const style = {
    textDecoration: completed ? 'line-through' : 'none'
  }
  return (
    <li onClick={onClick} style={style}>{text}</li>
  )
}

export default Todo
