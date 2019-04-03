import React, { Fragment } from 'react';
import {deleteWorkoutThunk} from '../store/index';
import {connect} from 'react-redux';

export const SingleExercise = props => {
  const {deleteWorkout} = props;
  const { id, name, duration, completed, description } = props.exercise
  return (
    <Fragment>
      <div className="exercise-name">
      <div>

        <i
          id={`exercise-${id}`}
          className={
            completed
            ? 'toggle-complete fas fa-check-circle'
            : 'toggle-complete far fa-circle'
          }
        />
        <i className="fas fa-trash" onClick={() => { deleteWorkout(id)}} />
      </div>
        <h3>{name}</h3>
        <span>{duration} min</span>
      </div>
      <div>{description}</div>
    </Fragment>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteWorkout: (id)=> dispatch(deleteWorkoutThunk(id))
  }
}

export default connect(null, mapDispatchToProps)(SingleExercise)
