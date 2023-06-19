import React from "react";
import { useContext, useEffect } from "react";
import css from "./Footer.module.css";
import { LIST_TYPES } from '../../config';
import { CommonArrayContext } from '../../TasksContext';


function Footer() {
    const commonArray = useContext(CommonArrayContext);
    let activeTasks = [];
    let finishedTasks = [];

    commonArray.map(task => {
        activeTasks = commonArray.filter(task => task.status === LIST_TYPES.BACKLOG);
        finishedTasks = commonArray.filter(task => task.status === LIST_TYPES.DONE);
    })

    useEffect(() => {
    }, [commonArray.length]);

    return (
        <footer className={css.footer}>
            <div className={css.taskSum}>
                <div className={css.taskCountItem}>Active tasks: {activeTasks.length > 0 ? activeTasks.length : 0}</div>
                <div className={css.taskCountItem}>Finished tasks: {finishedTasks.length > 0 ? finishedTasks.length : 0}</div>
            </div>
            <span className={css.author}>Kanban board by Polina Bobko, 2023</span>
        </footer>
    )
}

export default Footer;