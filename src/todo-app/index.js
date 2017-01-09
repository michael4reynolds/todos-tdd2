import React from 'react'
import {render} from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import appReducer from './reducers/app'
import TodoApp from './components/App'

const store = createStore(appReducer)
const app = (
  <Provider store={store}>
    <TodoApp/>
  </Provider>
)
render(app, document.getElementById('root'))
