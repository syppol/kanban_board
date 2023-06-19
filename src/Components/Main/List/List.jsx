import React, { useState, useContext } from "react";
import css from "./List.module.css"
//import { Link } from 'react-router-dom'
import clsx from 'clsx';
import { CommonArrayContext} from '../../../TasksContext';
import { LIST_TYPES } from '../../../config'
import AddNewTaskForm from '../AddNewTaskForm/AddNewTaskForm'
import DropdownList from '../DropdownList/DropdownList'

const List = props => {
    const { type, title, tasks, addNewTask } = props;
    const [isFormVisible, setFormVisible] = useState(false);
    const [isButtonVisible, setButtonVisible] = useState(true);
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const commonArray = useContext(CommonArrayContext);

    const handleAddNewClick = () => {
        setFormVisible(!isFormVisible);
        setButtonVisible(!isButtonVisible);
        setDropdownVisible(true);

    }

    const formSubmit = (title) => {
        addNewTask(title)

        setFormVisible(false)
        setButtonVisible(!isButtonVisible)
    }

    const disabled = (type) => {
        let watchedType;
        switch (type) {
            case LIST_TYPES.READY:
                watchedType = LIST_TYPES.BACKLOG
                break;
            case LIST_TYPES.IN_PROGRESS:
                watchedType = LIST_TYPES.READY
                break;
            case LIST_TYPES.DONE:
                watchedType = LIST_TYPES.IN_PROGRESS
                break;
            default:
                break;
        }
        let currentTasks = commonArray.filter(task => task.status === watchedType);
        if ((type !== LIST_TYPES.BACKLOG) && (currentTasks.length === 0)){
            return css.addButtonDisabled;
        }
        return css.addButtonActive;
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
                <AddNewTaskForm tasks={tasks} formSubmit={formSubmit} />
            )}
            {type === LIST_TYPES.READY && isDropdownVisible && (
                <DropdownList
                    onSelect={() => {
                        setButtonVisible(!isButtonVisible)
                    }}
                    type={LIST_TYPES.BACKLOG}
                    setButtonVisible={setButtonVisible}
                    isDropdownVisible={isDropdownVisible}
                    setDropdownVisible={setDropdownVisible}
                />
            )}
            {type === LIST_TYPES.IN_PROGRESS && isDropdownVisible && (
                <DropdownList
                    onSelect={() => {
                        setButtonVisible(!isButtonVisible)
                    }}
                    type={LIST_TYPES.READY}
                    setButtonVisible={setButtonVisible}
                    isDropdownVisible={isDropdownVisible}
                    setDropdownVisible={setDropdownVisible}
                />
            )}
            {type === LIST_TYPES.DONE && isDropdownVisible && (
                <DropdownList
                    onSelect={() => {
                        setButtonVisible(!isButtonVisible)
                    }}
                    type={LIST_TYPES.IN_PROGRESS}
                    setButtonVisible={setButtonVisible}
                    isDropdownVisible={isDropdownVisible}
                    setDropdownVisible={setDropdownVisible}
                />
            )}


            {isButtonVisible && type === LIST_TYPES.BACKLOG && (
                <button onClick={handleAddNewClick} className={clsx(css.addButtonActive)}>+ Add card</button>
            )}
            {isButtonVisible && type === LIST_TYPES.READY && (
                <button onClick={handleAddNewClick} className={disabled(type)}>+ Add card</button>
            )}
            {isButtonVisible && type === LIST_TYPES.IN_PROGRESS && (
                <button onClick={handleAddNewClick} className={disabled(type)}>+ Add card</button>
            )}
            {isButtonVisible && type === LIST_TYPES.DONE && (
                <button onClick={handleAddNewClick} className={disabled(type)}>+ Add card</button>
            )}
        </div>
    )
}

export default List;