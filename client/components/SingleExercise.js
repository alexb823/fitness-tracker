import React, { Fragment } from 'react';
import { deleteExerciseThunk, buildFetchWorkoutsThunk, updateExerciseThunk } from '../store/index';
import { connect } from 'react-redux';

const SingleExercise = props => {
  const { deleteExercise, fetchWorkouts, updateExercise } = props;
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
            onClick={() => { updateExercise(id).then(() => fetchWorkouts()) }}
          />
          <i className="fas fa-trash" onClick={() => { deleteExercise(id).then(() => fetchWorkouts()) }} />
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
    deleteExercise: (id) => dispatch(deleteExerciseThunk(id)),
    fetchWorkouts: () => dispatch(buildFetchWorkoutsThunk()),
    updateExercise: (id) => dispatch(updateExerciseThunk(id))

  }
}

export default connect(null, mapDispatchToProps)(SingleExercise)
