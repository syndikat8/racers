import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import drivers from './reducers/drivers-reducer';
import schedule from './reducers/schedule-reducer';

const rootReducer = combineReducers({
  drivers,
  schedule,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
