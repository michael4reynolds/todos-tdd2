import todos from './todos'
import visibilityFilter from './visibility-filter'

const appInitialState = {}
const app = (state = appInitialState, action) => {
  return {
    todos: todos(state.todos, action),
    visibilityFilter: visibilityFilter(state.visibilityFilter, action)
  }
}

export default app
