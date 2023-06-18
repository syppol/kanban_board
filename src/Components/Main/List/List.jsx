import React from "react";
import css from "./List.module.css"

import { useState } from 'react'
//import { Link } from 'react-router-dom'
import clsx from 'clsx';
import { LIST_TYPES } from '../../../config'
import AddNewTaskForm from '../AddNewTaskForm/AddNewTaskForm'
import DropdownList from '../DropdownList/DropdownList'

const List = props => {
	const {type, title, tasks, addNewTask} = props;
	const [isFormVisible, setFormVisible] = useState(false);
    const [isButtonVisible, setButtonVisible] = useState(true);

	const handleAddNewClick = () => {
		setFormVisible(!isFormVisible);
        setButtonVisible(!isButtonVisible);
	}

	const formSubmit = (title) => {
		addNewTask(title)

		setFormVisible(false)
        setButtonVisible(!isButtonVisible)
	}

    const filterTasks = (tasks) => {
        setButtonVisible(!isButtonVisible)
    }

	return (
		<div className={css.list}>
			<h2 className={css.listTitle}>{title}</h2>
            {tasks.map(task => {
                return (
                    <div key={task.id} className={css.task}>{task.title}</div>
                )
            }
            )}
            {type === LIST_TYPES.BACKLOG && isFormVisible && (
                    <AddNewTaskForm tasks={tasks} formSubmit={formSubmit}/>
            )}
            {type === LIST_TYPES.READY && isFormVisible && (
                    <DropdownList type={LIST_TYPES.BACKLOG}/>
            )}
            {isButtonVisible && type === LIST_TYPES.BACKLOG && (
                    <button onClick={handleAddNewClick} className={clsx(css.addButtonActive)}>+ Add card</button>
            )}
            {isButtonVisible && type === LIST_TYPES.READY && (
                    <button onClick={handleAddNewClick} className={clsx(css.addButtonActive)}>+ Add card</button>
            )}
            {isButtonVisible && type === LIST_TYPES.IN_PROGRESS && (
                    <button onClick={handleAddNewClick} className={clsx(css.addButtonActive)}>+ Add card</button>
            )}
            {isButtonVisible && type === LIST_TYPES.DONE && (
                    <button onClick={handleAddNewClick} className={clsx(css.addButtonActive)}>+ Add card</button>
            )}
		</div>
	)
}

export default List;

/* <AddNewTaskForm formSubmit={formSubmit} /> */