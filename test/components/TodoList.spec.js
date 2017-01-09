import React from 'react'
import { shallow, mount } from 'enzyme'
import { createStore } from 'redux'
import reducer from '../../src/todo-app/reducers/app'
import VisibleTodoList, {TodoList, getVisibleTodos} from '../../src/todo-app/components/TodoList'

describe('TodoList', () => {
  const render = ({ todos = [], onTodoClick = () => {} } = {}) => {
    return shallow(
      <TodoList todos={todos} onTodoClick={onTodoClick}></TodoList>
    )
  }
  
  it('renders an unordered list', () => {
    const list = render()
    expect(list.type()).toEqual('ul')
  })

  it('renders a list of todos', () => {
    const todos = [{
      id: 0,
      text: 'todo 1'
    },{
      id: 1,
      text: 'todo 2'
    }]
    const list = render({ todos })
    const todoItems = list.find('Todo')
    expect(todoItems.length).toBe(2)
  })

  it('passes all properties of the todo to the rendered Todo item', () => {
    const todos = [{
      id: 0,
      text: 'todo 1'
    }]
    const list = render({ todos })
    const todo = list.find('Todo')
    expect(todo.prop('id')).toBe(0)
    expect(todo.prop('text')).toBe('todo 1')
  })

  it('calls callback with id of todo when a Todo item is clicked', () => {
    const todos = [{
      id: 0,
      text: 'todo 1'
    }]
    const onTodoClick = jest.fn()
    const list = render({ todos, onTodoClick })
    const todo = list.find('Todo')
    todo.simulate('click')
    expect(onTodoClick).toBeCalledWith(0)
  })
})

describe('Get Visible Todos', () => {
  it('returns all todos when receives SHOW_ALL filter', () => {
    const allTodos = [{
      completed: false
    },{
      completed: true
    }]
    const todos = getVisibleTodos(allTodos, 'SHOW_ALL')
    expect(todos).toEqual(allTodos)
  })

  it('returns completed todos when receives SHOW_COMPLETED filter', () => {
    const allTodos = [{
      completed: false
    },{
      completed: true
    }]
    const todos = getVisibleTodos(allTodos, 'SHOW_COMPLETED')
    expect(todos).toEqual([{
      completed: true
    }])
  })

  it('returns active todos when receives SHOW_ACTIVE filter', () => {
    const allTodos = [{
      completed: false
    },{
      completed: true
    }]
    const todos = getVisibleTodos(allTodos, 'SHOW_ACTIVE')
    expect(todos).toEqual([{
      completed: false
    }])
  })

  it('returns all todos when receives unknown filter', () => {
    const allTodos = [{
      completed: false
    },{
      completed: true
    }]
    const todos = getVisibleTodos(allTodos, 'UNKNOWN')
    expect(todos).toEqual(allTodos)
  })
})

describe('Filtered TodoList', () => {
  const render = ({
    store = createStore(reducer)
  } = {}) => {
    const context = { store }
    return mount(<VisibleTodoList/>, { context })
  }

  it('renders a TodoList component', () => {
    const visibleTodoList = render()
    expect(visibleTodoList.find('TodoList').length).toBe(1)
  })

  it('retrieves visible todos and passes them to TodoList', () => {
    const store = createStore(reducer)
    store.dispatch({ type: 'ADD_TODO', text: 'todo 1', id: 0 })
    store.dispatch({ type: 'ADD_TODO', text: 'todo 2', id: 1 })
    store.dispatch({ type: 'TOGGLE_TODO', id: 1 })
    store.dispatch({ type: 'SET_VISIBILITY_FILTER', filter: 'SHOW_COMPLETED' })
    const visibleTodoList = render({ store })
    const todoList = visibleTodoList.find('TodoList')
    expect(todoList.prop('todos')).toEqual([{
      id: 1,
      text: 'todo 2',
      completed: true
    }])
  })

  it('provides onClick handler for toggling todos', () => {
    const store = createStore(reducer)
    store.dispatch = jest.fn()
    const visibleTodoList = render({ store })
    const todoList = visibleTodoList.find('TodoList')
    const toggleTodo = todoList.prop('onTodoClick')
    toggleTodo('todo id')
    expect(store.dispatch).toBeCalledWith({
      type: 'TOGGLE_TODO',
      id: 'todo id'
    })
  })

  it('subscribes to store changes', () => {
    const store = createStore(reducer)
    store.subscribe = jest.fn()
    render({ store })
    expect(store.subscribe).toBeCalled()
  })

  it('is updated on store changes', () => {
    const store = createStore(reducer)
    store.dispatch({ type: 'ADD_TODO', text: 'todo', id: 0 })
    const visibleTodoList = render({ store })
    store.dispatch({
      type: 'TOGGLE_TODO',
      id: 0
    })
    visibleTodoList.update()
    const todoList = visibleTodoList.find('TodoList')
    expect(todoList.prop('todos')).toEqual([{
      id: 0,
      text: 'todo',
      completed: true
    }])
  })

  it('unsubscribes from store changes when unmounted', () => {
    VisibleTodoList.prototype.forceUpdate = jest.fn()
    const store = createStore(reducer)
    store.dispatch({ type: 'ADD_TODO', text: 'todo', id: 0 })
    const visibleTodoList = render({ store })
    visibleTodoList.unmount()
    store.dispatch({
      type: 'TOGGLE_TODO',
      id: 0
    })
    expect(VisibleTodoList.prototype.forceUpdate).not.toBeCalled()
  })
})
