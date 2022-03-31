import Axios from 'axios';
import { DOMAIN } from '../util/constants/settingSystem';


export class TodoListService {
    constructor(){

    }

    getTaskApi = () =>{
        return Axios({
            url: `${DOMAIN}/todos`,
            method: 'GET',
        });
    }

    addTaskApi = (taskName) =>{
        return Axios({
            url: `${DOMAIN}/todos/create`,
            method: 'POST',
            data: {taskName: taskName},
        });
    }

    deleteTaskApi = (id) =>{
        return Axios({
            url: `${DOMAIN}/todos/${id}/delete`,
            method: 'DELETE',
        });
    }

    doneTaskApi = (id) =>{
        return Axios({
            url: `${DOMAIN}/todos/${id}/update_done`,
            method: 'PUT',
        });
    }

    rejectTaskApi = (id) =>{
        return Axios({
            url: `${DOMAIN}/todos/${id}/update_reject`,
            method: 'PUT',
        });
    }
}

export const todoListService = new TodoListService();