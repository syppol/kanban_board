import React, { useContext,useEffect } from "react";
import { LIST_TYPES, LIST_COPY } from "../../../config";
import uniqid from 'uniqid';
import List from "../List/List";
import css from "./Board.module.css"
import { CommonArrayContext, CommonArrayUpdateContext } from '../../../TasksContext';


function Board(props) {
	const { tasks, setTasks } = props;
	const commonArray = useContext(CommonArrayContext);
	const setCommonArray = useContext(CommonArrayUpdateContext);
  
	useEffect(() => {
		const savedState = localStorage.getItem('appContextState');
		if (savedState) {
		  console.log(JSON.stringify(savedState));
		  setCommonArray(JSON.parse(savedState));
		}
	  }, []);
	  
	  useEffect(() => {
		localStorage.setItem('appContextState', JSON.stringify(commonArray));
	  }, [commonArray]);

	const addNewTask = (title) => {
		const task = {
			id: uniqid(),
			title,
			description: null,
			created: new Date().toISOString(),
			status: 'backlog',
		}
		setTasks([...tasks, task]);
		setCommonArray(tasks => [...tasks, task]);
	}

	return (
		<div className={css.boardWrapper}>
			{Object.values(LIST_TYPES).map(type => {
				const listTasks = tasks.filter(task => task.status === type);
				return (
					<List
						key={LIST_COPY[type]}
						type={type}
						title={LIST_COPY[type]}
						tasks={listTasks || []}
						addNewTask={addNewTask}
					/>
				)
			})}
		</div>
	)
}

export default Board;