import React from 'react'
import {shallow, mount} from 'enzyme'
import {createStore} from 'redux'
import reducer from '../../src/todo-app/reducers/app'
import AddTodoConnect, {AddTodo} from '../../src/todo-app/components/AddTodo'

describe('AddTodo', () => {
  const render = ({store = createStore(reducer)} = {}) => {
    const context = {store}
    return mount(<AddTodoConnect/>, {context})
  }

  it('renders a paragraph element', () => {
    const addTodo = shallow(<AddTodo/>)
    expect(addTodo.type()).toBe('div')
  })

  it('renders a text input', () => {
    const addTodo = render()
    const input = addTodo.find('input')
    expect(input.type()).toEqual('input')
  })

  it('renders a button to add a new todo', () => {
    const addTodo = render()
    const button = addTodo.find('button')
    expect(button.type()).toEqual('button')
    expect(button.render().text()).toEqual('Add Todo')
  })

  it('adds a new todo when button is clicked', () => {
    const store = createStore(reducer)
    store.dispatch = jest.fn()
    const addTodo = render({store})
    const input = addTodo.find('input')
    const button = addTodo.find('button')
    input.node.value = 'new todo'
    button.simulate('click')
    expect(store.dispatch).toBeCalledWith({
      type: 'ADD_TODO',
      id: 0,
      text: 'new todo'
    })
  })

  it('clears input when button is clicked', () => {
    const store = createStore(reducer)
    const addTodo = render({store})
    const input = addTodo.find('input')
    const button = addTodo.find('button')
    input.node.value = 'new todo'
    button.simulate('click')
    expect(input.node.value).toEqual('')
  })
})