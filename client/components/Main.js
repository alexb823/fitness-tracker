import React, {Component} from 'react'
import {buildFetchWorkoutsThunk} from '../store/index'
import {connect} from 'react-redux';

import { Analytics } from './Analytics'
import { ListWorkouts } from './DisconnectedListWorkouts'

import './Main.css'
class DisconnectedMain extends Component {

  componentDidMount() {
    this.props.fetchWorkouts()
  }

  render() {
    const { workouts } = this.props

    return (
      <div id="main">
        <Analytics />
        <ListWorkouts workouts={workouts} />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchWorkouts: () => dispatch(buildFetchWorkoutsThunk())
  }
}

export const Main = connect(null, mapDispatchToProps)(DisconnectedMain);
