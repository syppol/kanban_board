import React from "react";
import css from "./Main.module.css";
import Board from "./Board/Board";

const Main = props => {
    const {tasks, setTasks} = props
    return (
        <main className={css.mainPart}>
            <Board {...props}/>
        </main>
    )
}
 
export default Main;