import deepFreeze from 'deep-freeze'
import app  from '../../src/todo-app/reducers/app'

describe('App', () => {
  it('sets initial state', () => {
    const stateBefore = undefined
    const action = {}
    const stateAfter = {
      todos: [],
      visibilityFilter: 'SHOW_ALL'
    }
    deepFreeze(action)
    expect(app(stateBefore, action)).toEqual(stateAfter)
  })
})
