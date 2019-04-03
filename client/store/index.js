import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import axios from 'axios';

const initialState = { workouts: [] };

const SET_WORKOUTS = 'SET_WORKOUTS';
const DELETE_EXERCISE = 'DELETE_EXERCISE';

export const setWorkoutsActionCreator = workouts => {
  return {
    type: SET_WORKOUTS,
    workouts,
  };
};

export const deleteExercise = (id) => {
  return {
    type: DELETE_EXERCISE,
    id,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_WORKOUTS:
      return { ...state, workouts: action.workouts };
    case DELETE_EXERCISE:
      return state;
    default:
      return state;
  }
};

export const buildFetchWorkoutsThunk = () => {
  return dispatch => {
    axios
      .get('/api/workouts')
      .then(res => dispatch(setWorkoutsActionCreator(res.data)))
      .catch(er => console.log('oops, there was an error'));
  };
};

export const deleteExerciseThunk = (id) => {
  return dispatch => {
    return axios.delete(`/api/exercises/${id}`)
      .then(() => dispatch(deleteExercise(id)))
      .catch(err => console.log('Nooooooo!', err))
  }
}

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk, createLogger({ collapsed: true })))
);

export default store;
