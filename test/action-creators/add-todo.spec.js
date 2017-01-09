import addTodo from '../../src/action-creators/add-todo'

describe('add-todo action creater', () => {
  it('returns an ADD_TODO action with next id and text passed in', () => {
    const action = addTodo('todo')
    expect(action).toEqual({
      type: 'ADD_TODO',
      id: 0,
      text: 'todo'
    })
  })
})