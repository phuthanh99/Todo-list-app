import React, { useState, useEffect, useRef } from 'react';
import Axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

export default function TodoList(props) {

  const dispatch = useDispatch();

  const { taskList } = useSelector(state => state.TodoListReducer)

  const inputEl = useRef(null);

  let [state, setState] = useState({
    taskList: [],
    value: {
      taskName: ''
    },
    errors: {
      taskName: ''
    }
  })


  function getCurrentDate() {

    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    return `${date}/${month < 10 ? `0${month}` : `${month}`}/${year}`
  }

  const handleChange = (e) => {
    let { value, name } = e.target;
    let newValue = { ...state.value };

    newValue = { ...newValue, [name]: value };

    let newError = { ...state.errors };
    let regexString = /^[a-z A-Z]+$/;

    if (regexString.test(value) || value.trim() === '') {
      newError[name] = name + ' is not a valid';
    } else {
      newError[name] = '';
    }



    setState({
      ...state,
      value: newValue,
      errors: newError
    })


  }


  const getTaskList = () => {
    dispatch({
      type: 'getTaskApi'
    })

  }

  const addTask = (e) => {

    if (e) { e.preventDefault() } else { return }
    inputEl.current.value = "";
    dispatch({
      type: 'addTaskApi',
      taskName: state.value.taskName
    })
  }

  const delTask = (id) => {
    dispatch({
      type: 'deleteTaskApi',
      id: id
    })
  }

  const rejectTask = (id) => {
    dispatch({
      type: 'rejectTaskApi',
      id: id
    })

  }

  const doneTask = (id) => {
    dispatch({
      type: 'doneTaskApi',
      id: id
    })
  }


  useEffect(() => {
    getTaskList();

    return () => { }
  }, []);


  const renderTodo = () => {
    return (
      taskList.filter(item => !item.status).map((item, index) => {
        return (
          <li key={index}>
            <span>{item.taskName}</span>
            <div className="buttons">
              <button
                className="remove"
                type="button"
                onClick={() => { delTask(item._id) }}
              >
                <i className="fa fa-trash-alt" />
              </button>
              <button
                className="complete"
                onClick={() => { doneTask(item._id) }}
              >
                <i className="fa-solid fa-check-circle"></i>
              </button>
            </div>
          </li>
        )
      })

    )
  }

  const renderTodoDone = () => {
    return (
      taskList.filter(item => item.status).map((item, index) => {
        return (
          <li key={index}>
            <span>{item.taskName}</span>
            <div className="buttons">
              <button
                className="remove"
                type="button"
                onClick={() => { delTask(item._id) }}
              >
                <i className="fa fa-trash-alt" />
              </button>
              <button
                className="complete"
                onClick={() => { rejectTask(item._id) }}
              >
                <i className="fa-solid fa-rotate-left"></i>
              </button>
            </div>
          </li>
        )
      })

    )
  }

  return (
    <div className="task">
      <div className="taskHeader"></div>

      <div className="taskBody">
        <form onSubmit={addTask}>
          <div className="taskTime">Date: {getCurrentDate()}</div>
          <div className="taskAdd">
            <input
              className="taskAddItem"
              type="text"
              name='taskName'
              placeholder="Enter an activity"
              ref={inputEl}
              autoComplete="off"
              onChange={handleChange}
            ></input>
            <button id="taskAddClick" type='submit' onClick={() => { addTask() }}>
              <i className="fa fa-plus"></i>
            </button>
          </div>
        </form>
        <div className="taskList">
          <ul className="todo" id="todo">
            {renderTodo()}
          </ul>

          <span className="taskCompletedContent">Completed</span>
          <ul className="todo" id="completed">
            {renderTodoDone()}
          </ul>

        </div>
      </div>

    </div>
  )
}
