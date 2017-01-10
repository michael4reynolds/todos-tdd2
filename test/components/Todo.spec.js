import React from 'react'
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'
import Todo from '../../src/todo-app/components/todo'

describe('App', () => {
  it('renders a list element', () => {
    const todo = shallow(<Todo/>)
    expect(todo.type()).toBe('li')
  })

  it('handles click event', () => {
    const onClick = jest.fn()
    const todo = shallow(<Todo onClick={onClick}/>)
    todo.simulate('click')
    expect(onClick).toBeCalled()
  })

  it('renders given text', () => {
    const todo = shallow(<Todo text="todo"/>)
    expect(todo.render().text()).toEqual('todo')
  })

  it('is not crossed when not completed', () => {
    const todo = shallow(<Todo completed={false}/>)
    expect(todo.hasClass('completed')).toBe(false)
    expect(toJson(todo)).toMatchSnapshot()
  })

  it('is crossed when completed', () => {
    const todo = shallow(<Todo completed={true}/>)
    expect(todo.hasClass('completed')).toBe(true)
    expect(toJson(todo)).toMatchSnapshot()
  })
})
