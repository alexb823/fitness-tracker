import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import axios from 'axios'

const initialState = { workouts: [] };

const SET_WORKOUTS = 'SET_WORKOUTS';


export const setWorkoutsActionCreator = (workouts) => {
    return {
        type: SET_WORKOUTS,
        workouts
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_WORKOUTS:
            return { ...state, workouts: action.workouts }
        default:
            return state;
    }
}

export const buildFetchWorkoutsThunk = () => {
    return (dispatch) => {
        axios.get('/api/workouts')
            .then(res => dispatch(setWorkoutsActionCreator(res.data)))
            .catch(er => console.log('oops, there was an error'))
    }
}

const store = createStore(reducer, composeWithDevTools(
    applyMiddleware(thunk, createLogger({ collapsed: true })
    )
))

export default store
