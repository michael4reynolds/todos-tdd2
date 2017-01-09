import toggleTodo from '../../src/action-creators/toggle-todo'

describe('toggle-todo action creater', () => {
  it('returns an action to toggle a todo by a given id', () => {
    const action = toggleTodo('todo id');
    expect(action).toEqual({
      type: 'TOGGLE_TODO',
      id: 'todo id'
    })
  });
})