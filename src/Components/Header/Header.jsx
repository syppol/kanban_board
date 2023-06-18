import React from "react";
import LoginMenu from "./LoginMenu/LoginMenu";
import css from "./Header.module.css";

function Header() {
    return (
        <header className={css.header}>
            <h1 className={css.logo}>Awesome Kanban Board</h1>
            <LoginMenu />
        </header>
    )
}

export default Header;