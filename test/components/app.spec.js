import React from 'react'
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'
import TodoApp from '../../src/todo-app/components/app'

describe('App', () => {
  it('renders a button', () => {
    const app = shallow(<TodoApp/>)
    expect(app.find('button').length).toBe(1)
    expect(toJson(app)).toMatchSnapshot()
  })
})
