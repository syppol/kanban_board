import React, { useState } from "react";
//import css from "./DropdownList.module.css";
//import clsx from "clsx";

const DropdownList = props => {
    const {tasks, filterTasks} = props
    const arr = tasks;
    console.log(`filterTasks ${tasks}`);
    return (
        <select name="dropdown">
            <option value=''>Available tasks:</option>
            
            {arr.map(task => {
                return (
                    <option key={task.id} value={task.title}>{task.title}</option>
                )
            })}
        </select>
    )
}

export default DropdownList;