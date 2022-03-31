import { call, put, takeLatest, delay } from 'redux-saga/effects';
import { todoListService } from '../../services/TodoListServices'
import { STATUS_CODE } from '../../util/constants/settingSystem';

// Get task
function* getTaskApi() {
    try {
        yield put({
            type: 'DISPLAY_LOADING'
        })

        let { data, status } = yield call(todoListService.getTaskApi);
        yield delay(1000);

        if (status === STATUS_CODE.SUCCESS) {

            yield put({
                type: 'GET_TASK_API',
                taskList: data
            })
        } else {
            console.log('error');
        }
        yield put({
            type: 'HIDE_LOADING'
        })
    }
    catch (err) {
        console.log('error');
    }

}

export function* monitorActionGetTaskApi() {
    yield takeLatest('getTaskApi', getTaskApi)
}

// Add task 
function* addTaskApi(action) {
    try {
        let { data, status } = yield call(() => { return todoListService.addTaskApi(action.taskName) })
        
        if (status === STATUS_CODE.SUCCESS) {

            yield put({
                type: 'getTaskApi',   
            })
        } else {
            console.log('error');
        }
    } catch (err) {
        console.log('error');
    }
}

export function* monitorActionAddTaskApi() {
    yield takeLatest('addTaskApi', addTaskApi)
}

// Delete task
function* deleteTaskApi(action) {
   
    try {
        let { data, status } = yield call(() => { return todoListService.deleteTaskApi(action.id) })
        
        if (status === STATUS_CODE.SUCCESS) {

            yield put({
                type: 'getTaskApi',   
            })
        } else {
            console.log('error');
        }
    } catch (err) {
        console.log('error');
    }
}

export function* monitorActionDeleteTaskApi(){
    yield takeLatest('deleteTaskApi', deleteTaskApi)
}

// Done task
function* doneTaskApi(action) {
   
    try {
        let { data, status } = yield call(() => { return todoListService.doneTaskApi(action.id) })
        
        if (status === STATUS_CODE.SUCCESS) {

            yield put({
                type: 'getTaskApi',   
            })
        } else {
            console.log('error');
        }
    } catch (err) {
        console.log('error');
    }
}

export function* monitorActionDoneTaskApi(){
    yield takeLatest('doneTaskApi', doneTaskApi)
}

// Reject task
function* rejectTaskApi(action) {
   
    try {
        let { data, status } = yield call(() => { return todoListService.rejectTaskApi(action.id) })
        
        if (status === STATUS_CODE.SUCCESS) {

            yield put({
                type: 'getTaskApi',   
            })
        } else {
            console.log('error');
        }
    } catch (err) {
        console.log('error');
    }
}

export function* monitorActionRejectTaskApi(){
    yield takeLatest('rejectTaskApi', rejectTaskApi)
}