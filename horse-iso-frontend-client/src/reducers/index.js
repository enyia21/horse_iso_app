import horseReducer from './horsesReducer';
import usersReducer from './usersReducer';
import {combineReducers} from 'redux';

export default combineReducers({
    horseReducer,
    usersReducer
})