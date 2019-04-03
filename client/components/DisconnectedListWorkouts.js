import React from 'react'

import { SingleWorkout } from './SingleWorkout';

import { connect } from 'react-redux'

import './ListWorkouts.css'

const mapStateToProps = (state) => {
  return {
    workouts: state.workouts
  }
}

const DisconnectedListWorkouts = props => {
  const { workouts } = props
  return (
    <div id="workouts">
      {workouts.map(workout => (
        <SingleWorkout key={workout.id} workout={workout} />
      ))}
    </div>
  )
}

export const ListWorkouts = connect(mapStateToProps)(DisconnectedListWorkouts)
