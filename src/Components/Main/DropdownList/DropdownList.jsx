import React, { useState, useContext } from "react";
//import css from "./DropdownList.module.css";
//import clsx from "clsx";
import { LIST_TYPES } from '../../../config'
import { CommonArrayContext, CommonArrayUpdateContext } from '../../../TasksContext';


const DropdownList = props => {
    const commonArray = useContext(CommonArrayContext);
    const setCommonArray = useContext(CommonArrayUpdateContext);
    const {type} = props
    const arr = commonArray.filter((task) => task.status === type);
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