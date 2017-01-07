import deepFreeze from 'deep-freeze'
import todo from '../../src/todo-app/reducers/todo'

describe('Create', () => {
  const stateBefore = undefined
  const action = {
    type: 'ADD_TODO',
    id: 0,
    text: 'new todo'
  }
  const stateAfter = {
    id: 0,
    text: 'new todo',
    completed: false
  }
  deepFreeze(action)

  it('can create a new todo', () => {
    expect(todo(stateBefore, action)).toEqual(stateAfter)
  })
})

describe('Toggle', () => {
  const stateBefore = {
    id: 0,
    text: 'a todo',
    completed: false
  }
  const action = {
    type: 'TOGGLE_TODO'
  }
  const stateAfter = {
    id: 0,
    text: 'a todo',
    completed: true
  }
  deepFreeze(action)

  it('can toggle a todo', () => {
    expect(todo(stateBefore, action)).toEqual(stateAfter)
  })
})
