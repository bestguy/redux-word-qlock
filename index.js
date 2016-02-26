import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import clock from './reducers'
import Clock from './components/Clock'

const store = createStore(clock)
const root  = document.getElementById('root')

const render = () => {
  ReactDOM.render(<Clock time={store.getState()} />, root)
}

setInterval(() => {
  store.dispatch({ type: 'TICK' })
}, 3000)

render()
store.subscribe(render)
