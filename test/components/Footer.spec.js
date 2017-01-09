import React from 'react'
import {shallow, mount} from 'enzyme'
import {createStore} from 'redux'
import reducer from '../../src/todo-app/reducers/app'
import Footer from '../../src/todo-app/components/Footer'

describe('Footer', () => {
  const mountOptions = () => {
    const context = {store: createStore(reducer)}
    const childContextTypes = {
      store: React.PropTypes.object
    }
    return {context, childContextTypes}
  }

  const render = () => mount(<Footer/>, mountOptions())

  it('renders a paragraph element', () => {
    const footer = shallow(<Footer/>)
    expect(footer.type()).toBe('p')
  })

  it('renders a filter link to show all todos', () => {
    const footer = render()
    const link = footer.find('Connect(Link)').at(0)
    expect(link.prop('filter')).toEqual('SHOW_ALL')
    expect(link.render().text()).toEqual('All')
  })

  it('renders a filter link to show active todos', () => {
    const footer = render()
    const link = footer.find('Connect(Link)').at(1)
    expect(link.prop('filter')).toEqual('SHOW_ACTIVE')
    expect(link.render().text()).toEqual('Active')
  })

  it('renders a filter link to show completed todos', () => {
    const footer = render()
    const link = footer.find('Connect(Link)').at(2)
    expect(link.prop('filter')).toEqual('SHOW_COMPLETED')
    expect(link.render().text()).toEqual('Completed')
  })
})
