import React from 'react'
import {connect} from 'react-redux'
import toggleTodo from '../../action-creators/toggle-todo'
import Todo from './Todo'

export const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    default:
      return todos
  }
}

const TodoList = ({todos, onTodoClick}) => (
  <ul className="todo-list">
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
      />
    )}
  </ul>
)

const mapStateToProps = (state) => ({
  todos: getVisibleTodos(
    state.todos,
    state.visibilityFilter
  )
})

const mapDispatchToProps = (dispatch) => ({
  onTodoClick(id) {
    dispatch(toggleTodo(id));
  }
})

export {TodoList}
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
