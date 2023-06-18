import React, { useState } from 'react';
import css from "./LoginMenu.module.css";
import userAvatar from "../Media/userAvatar.svg";
import arrowUp from "../Media/arrow-up.svg";
import arrowDown from "../Media/arrow-down.svg";

function LoginMenu() {
    const [isMenuOpen, setMenuIsOpen] = useState(false);

    return (
        <div className={css.loginWrapper}>
            <div className={css.login} onClick={() => setMenuIsOpen(!isMenuOpen)}>
                <img className={css.userSvg} src={userAvatar} alt="User"></img>
                <div className={css.arrow}>
                    {isMenuOpen ? <img src={arrowUp} alt='Arrow up'></img> : <img src={arrowDown} alt='Arrow down'></img>}
                </div>
            </div>
        {
            isMenuOpen &&
                    <div className={css.hiddenMenu}>
                        <div className={css.hiddenMenuArrow}></div>
                        <ul className={css.hiddenMenuOptions}>
                            <li className={css.hiddenMenuItem}><a href='#'>Profile</a></li>
                            <li className={css.hiddenMenuItem}><a href='#'>Log Out</a></li>
                        </ul>
                    </div>
        }
        </div>
    )
}

export default LoginMenu;