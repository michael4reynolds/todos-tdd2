import {combineReducers} from 'redux'
import todos from './todos'
import visibilityFilter from './visibility-filter'

const app = combineReducers({todos, visibilityFilter})

export default app
