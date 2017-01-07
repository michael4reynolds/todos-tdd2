import todo from './todo'

const todosInitialState = []
const todos = (state = todosInitialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ]
    case 'TOGGLE_TODO':
      return state.map(t => {
        return t.id !== action.id ? t : todo(t, action)
      })
    default:
      return state
  }
}

export default todos
