import React from "react";
import css from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header =(props) => {
    return (
        <header className={css.header}>
            <div className={css.loginBlock}>
                {'Mys9ys'}
                {/*{props.isAuth*/}
                    {/*? <div>{props.login} - <div><button onClick={props.logout}>Logout</button></div></div>*/}
                    {/*: <NavLink to={"/login"}>Login</NavLink>*/}
                {/*}*/}
            </div>
        </header>
    )
};

export default Header;