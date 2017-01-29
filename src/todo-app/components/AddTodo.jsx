import React from 'react'
import {connect} from 'react-redux'
import addTodo from '../../action-creators/add-todo'
import DoubleDown from 'react-icons/lib/fa/angle-double-down'

let AddTodo = ({dispatch}) => {
  let input
  return (
    <div className="todo-form">
      <DoubleDown className="todo-dd"/>
      <input className="todo-input" ref={node => input = node}/>
      <button className="input-button" onClick={() => {
        dispatch(addTodo(input.value))
        input.value = ''
      }}>Add Todo
      </button>
    </div>
  )
}

export {AddTodo}
export default connect()(AddTodo)
