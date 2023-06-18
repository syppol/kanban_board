import React from "react";
import css from "./Footer.module.css"

function Footer({tasks}) {
    let actTasks = [];
    let finTasks = [];

    /* tasks.map(task => {
        actTasks = tasks.filter(task => task.status === 'backlog');
        finTasks = tasks.filter(task => task.status === 'finished');
    }) */

    return (
        <footer className={css.footer}>
            <div className={css.taskSum}>
                <div className={css.taskCountItem}>Active tasks: {actTasks.length > 0 ? actTasks.length : 0}</div>
                <div className={css.taskCountItem}>Finished tasks: {finTasks.length > 0 ? finTasks.length : 0}</div>
            </div>
            <span className={css.author}>Kanban board by Polina Bobko, 2023</span>
        </footer>
    )
}

export default Footer;