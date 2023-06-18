import React from "react";
import css from "./TaskDetails.module.css";

function TaskDetails() {
    return (
        <main>
            <div className={css.taskDescriptionWrapper}>
                <div className={css.taskDescription}>
                    <h2 className={css.taskTitle}>{curTask.assignment}</h2>
                    <NavLink to='/'><button className={css.closeBtn}>x</button></NavLink>
                    <textarea className={css.taskText} value={textAreaValue} onInput={onInput} onKeyDown={onEnter}></textarea>
                </div>
            </div>
        </main>
    )
}

export default TaskDetails;