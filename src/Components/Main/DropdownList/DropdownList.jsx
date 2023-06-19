import React, { useState, useContext } from "react";
import css from "./DropdownList.module.css";
//import clsx from "clsx";
import { LIST_TYPES } from '../../../config'
import { CommonArrayContext, CommonArrayUpdateContext } from '../../../TasksContext';


const DropdownList = (props) => {
    const commonArray = useContext(CommonArrayContext);
    const setCommonArray = useContext(CommonArrayUpdateContext);
    const { type, setButtonVisible, isDropdownVisible, setDropdownVisible} = props; // Access the setDropdownVisible prop
    const arr = commonArray.filter((task) => task.status === type);
    const handleSelectChange = (event) => {
        const selectedTaskTitle = event.target.value;
        if (selectedTaskTitle === '') return;

        const taskList = commonArray.filter((task) => task.status === type);

        let selectedTask = taskList.find((task) => task.title === selectedTaskTitle);
        let newTasks = commonArray.filter((task) => task.id !== selectedTask.id);

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
            default:
                break;
        }
        selectedTask.status = newStatus;
        setCommonArray([...newTasks, selectedTask]);
        setButtonVisible(true);
        setDropdownVisible(false);};
    if (arr.length === 0 || !isDropdownVisible) {
        return null;
      }
    return (
        <select onChange={handleSelectChange}>
            <option value="" disabled selected hidden></option>
            {arr.map((task) => (
                <option key={task.id} value={task.title} className={css.selectOption}>
                    {task.title}
                </option>
            ))}
        </select>
    )
}

export default DropdownList;