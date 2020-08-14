import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import racers from './racers-reducer';
import schedule from './schedule-reducer';

const rootReducer = combineReducers({
  racers,
  schedule,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
