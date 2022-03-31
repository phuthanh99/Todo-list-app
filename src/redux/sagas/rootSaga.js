import { all } from 'redux-saga/effects'
import * as TodoListSaga from './TodoListSaga'

function* rootSaga() {
    yield all([
        TodoListSaga.monitorActionGetTaskApi(),
        TodoListSaga.monitorActionAddTaskApi(),
        TodoListSaga.monitorActionDeleteTaskApi(),
        TodoListSaga.monitorActionDoneTaskApi(),
        TodoListSaga.monitorActionRejectTaskApi(),
    ])
}

export default rootSaga;