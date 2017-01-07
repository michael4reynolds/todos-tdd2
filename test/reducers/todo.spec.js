import deepFreeze from 'deep-freeze'

const todoInitialState = {}
const todo = (state = todoInitialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    default:
      return state
  }
}

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
