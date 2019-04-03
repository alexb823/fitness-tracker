import React, { Component } from 'react'
import { Provider } from 'react-redux'

import {
  Header,
  Main,
} from './components'

import { initialState } from './initialState'
import store, { setWorkoutsActionCreator } from './store'

import './App.css'
export class App extends Component {
  constructor(props) {
    super(props)
    store.dispatch(setWorkoutsActionCreator(initialState.workouts))
    this.state = store.getState()
  }

  render() {
    const { workouts } = this.state

    return (
      <Provider store={store}>
        <div className="App">
          <Header />
          <Main workouts={workouts} />
        </div>
      </Provider>
    )
  }
}
