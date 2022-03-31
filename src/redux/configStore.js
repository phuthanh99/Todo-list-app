import {applyMiddleware, combineReducers, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import  rootSaga  from './sagas/rootSaga';
import TodoListReducer from './reducers/TodoListReducer'
import LoadingReducer from './reducers/LoadingReducer'

const middlewareSaga = createSagaMiddleware();

const rootReducer = combineReducers({
    TodoListReducer,
    LoadingReducer
})


const store = createStore(rootReducer, applyMiddleware(middlewareSaga))

middlewareSaga.run(rootSaga)

export default store;



