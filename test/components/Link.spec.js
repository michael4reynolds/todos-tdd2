import React from 'react'
import {shallow, mount} from 'enzyme'
import { createStore } from 'redux'
import reducer from '../../src/todo-app/reducers/app'
import FilterLink, {Link} from '../../src/todo-app/components/link'

describe('Link', () => {
  const render = ({active = false, onClick = () => {}} = {}) => {
    const props = { active, onClick }
    return shallow(<Link {...props}>title</Link>)
  }

  it('renders simple text when active', () => {
    const active = true
    const link = render({ active })
    expect(link.type()).toEqual('span')
  })

  it('renders an anchor when not active', () => {
    const active = false
    const link = render({ active })
    expect(link.type()).toEqual('a')
  })

  it('renders its children', () => {
    const link = render()
    expect(link.render().text()).toEqual('title')
  })

  it('points to the same page', () => {
    const link = render()
    expect(link.prop('href')).toEqual('#')
  })

  it('executes callback when clicked', () => {
    const onClick = jest.fn()
    const link = render({ onClick })
    link.simulate('click')
    expect(onClick).toBeCalled()
  })  
})

describe('Filter Link', () => {
  const render = ({store = createStore(reducer), filter = ''} = {}) => {
    const currentFilter = store.getState().visibilityFilter
    const context = { store }
    const component = (
      <FilterLink filter={filter ? filter : currentFilter}>
        link
      </FilterLink>
    )
    return mount(component, { context })
  }
  
  it('renders a Link component', () => {
    const filterLink = render()
    const link = filterLink.find('Link')
    expect(link.type().name).toEqual('Link')
  })

  it('passes children to Link component', () => {
    const filterLink = render()
    const link = filterLink.find('Link')
    expect(link.prop('children')).toEqual('link')
  })

  it('renders active Link when received and current filter are same', () => {
    const filterLink = render()
    const link = filterLink.find('Link')
    expect(link.prop('active')).toBe(true)
  })

  it('changes visibility filter when clicked', () => {
    const store = createStore(reducer)
    const filter = 'new filter'
    const filterLink = render({ store, filter })
    const link = filterLink.find('Link')
    link.simulate('click')
    const currentFilter = store.getState().visibilityFilter
    expect(currentFilter).toEqual('new filter')
  })

  it('subscribes to store changes', () => {
    const store = createStore(reducer)
    store.subscribe = jest.fn()
    render({ store })
    expect(store.subscribe).toBeCalled()
  })

  it('is updated on store changes', () => {
    const store = createStore(reducer)
    const filter = 'filter'
    const filterLink = render({ store, filter })
    store.dispatch({
      type: 'SET_VISIBILITY_FILTER',
      filter: 'filter'
    })
    filterLink.update()
    const link = filterLink.find('Link')
    expect(link.prop('active')).toBe(true)
  })

  it('unsubscribes from store changes when unmounted', () => {
    FilterLink.prototype.forceUpdate = jest.fn()
    const store = createStore(reducer)
    const filterLink = render({ store })
    filterLink.unmount()
    store.dispatch({
      type: 'SET_VISIBILITY_FILTER',
      filter: 'new filter'
    })
    expect(FilterLink.prototype.forceUpdate).not.toBeCalled()
  })
})
