import React, { useState, useContext } from "react";
import css from "./DropdownList.module.css";
//import clsx from "clsx";
import { LIST_TYPES } from '../../../config'
import { CommonArrayContext, CommonArrayUpdateContext } from '../../../TasksContext';


const DropdownList = props => {
    const commonArray = useContext(CommonArrayContext);
    const setCommonArray = useContext(CommonArrayUpdateContext);
    const { type } = props
    const arr = commonArray.filter((task) => task.status === type);

    const handleSelectChange = (event) => {
        const selectedTaskTitle = event.target.value;
        if (selectedTaskTitle === '') return;
        let selectedTask = arr.find((task) => task.title === selectedTaskTitle);
        const newTasks = arr.filter((task) => task.id !== selectedTask.id);
        
        let newStatus;
        switch (selectedTask.status) {
            case LIST_TYPES.BACKLOG:
                newStatus = LIST_TYPES.READY
                break;
            case LIST_TYPES.READY:
                newStatus = LIST_TYPES.IN_PROGRESS
                break;
            case LIST_TYPES.IN_PROGRESS:
                newStatus = LIST_TYPES.DONE
                break;
        }
        selectedTask.status = newStatus;        
        setCommonArray(newTasks => [...newTasks, selectedTask]);
    };

    return (
        <select name="dropdown" onChange={handleSelectChange}>
            <option value=''></option>
            {arr.map(task => {
                return (
                    <option key={task.id} value={task.title} >{task.title}</option>
                )
            })}
        </select>
    )
}

export default DropdownList;