import deepFreeze from 'deep-freeze'
import todos from '../../src/todo-app/reducers/todos'

describe('Add', () => {
  const stateBefore = []
  const action = {
    type: 'ADD_TODO',
    id: 0,
    text: 'first thing to do'
  }
  const stateAfter = [{
    id: 0,
    text: 'first thing to do',
    completed: false
  }]

  deepFreeze(stateBefore)
  deepFreeze(stateAfter)

  it('can add a todo to the list', () => {
    expect(todos(stateBefore, action)).toEqual(stateAfter)
  })
})

describe('Toggle', () => {
  const stateBefore = [{
    id: 0,
    text: 'todo 1',
    completed: false
  }, {
    id: 1,
    text: 'todo 2',
    completed: false
  }]
  const action = {
    type: 'TOGGLE_TODO',
    id: 1
  }
  const stateAfter = [{
    id: 0,
    text: 'todo 1',
    completed: false
  }, {
    id: 1,
    text: 'todo 2',
    completed: true
  }]

  deepFreeze(stateBefore)
  deepFreeze(stateAfter)

  it('can toggle a todo', () => {
    expect(todos(stateBefore, action)).toEqual(stateAfter)
  })
})
