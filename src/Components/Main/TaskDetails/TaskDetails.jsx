import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import css from "./TaskDetails.module.css";
import { NavLink } from "react-router-dom";
import { CommonArrayContext, CommonArrayUpdateContext } from '../../../TasksContext';

const TaskDetails = ({ tasks }) => {
    const { taskId } = useParams();
    const [task, setTask] = useState(null);
    const [description, setDescription] = useState('');
    const setCommonArray = useContext(CommonArrayUpdateContext);
	const commonArray = useContext(CommonArrayContext);

    useEffect(() => {
        const selectedTask = commonArray.find((item) => item.id === taskId);
        setTask(selectedTask);
        setDescription(selectedTask?.description || '');
      }, [commonArray, taskId]);

      const handleInputChange = (event) => {
        setDescription(event.target.value);
        setCommonArray((commonArray) => {
          const updatedArray = commonArray.map((item) => {
            if (item.id === taskId) {
              return { ...item, description: event.target.value };
            }
            return item;
          });
          return updatedArray;
        });
      };
  
    if (!task) {
      return <div className={css.mainBackground}>Loading...</div>; // Add loading state if the task is not found yet
    }

    return (
        <main className={css.mainBackground}>
                <div className={css.taskDescriptionWrapper}>
                    <h2 className={css.taskTitle}>{task.title}</h2>
                    <NavLink to='/'><button className={css.closeButton}></button></NavLink>
                    <textarea className={css.taskDescription} value={description} onChange={handleInputChange} placeholder='This task has no description'>{task.description}</textarea>
                </div>
        </main>
    )
}

export default TaskDetails;