import React, {PropTypes} from 'react'

const Todo = ({onClick, text, completed}) => {
  const style = {
    textDecoration: completed ? 'line-through' : 'none'
  }
  return (
    <li onClick={onClick} style={style}>{text}</li>
  )
}

Todo.propTypes = {}
Todo.defaultProps = {}

export default Todo
