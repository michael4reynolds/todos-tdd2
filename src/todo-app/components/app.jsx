import React from 'react'
import AddTodo from './AddTodo'
import VisibleTodoList from './TodoList'
import Footer from './Footer'
import '../styles/reset.css'
import '../styles/styles.css'

const TodoApp = () => {
  return (
    <div className="todo-app">
      <div className="container">
        <h1 className="main-heading">Todo Lister</h1>
        <AddTodo/>
        <VisibleTodoList/>
        <Footer/>
      </div>
    </div>
  )
}

export default TodoApp
