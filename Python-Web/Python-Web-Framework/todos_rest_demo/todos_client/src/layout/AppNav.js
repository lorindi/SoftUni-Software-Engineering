import styles from './AppNav.module.scss';
import {useAuth} from "../hooks/auth";
import React, {useEffect, useMemo, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import {Button} from "@mui/material";

const publicRoutes = [
    {
        text: 'Login',
        link: '/login',
    },
    {
        text: 'Register',
        link: '/register',
    },
];

const privateRoutes = [
    {
        text: 'Logout',
        link: '/logout',
    },
];

const AppNav = () => {
    const {
        isLoggedIn,
        logout,
    } = useAuth();

    const routes = useMemo(() => isLoggedIn
            ? privateRoutes
            : publicRoutes,
        [isLoggedIn]
    );

    const renderLink = (route) => {
        if (route.link === '/logout') {
            return <Button onClick={() => logout()}>
                Logout
            </Button>
        }

        return (
            <Link to={route.link}>{route.text}</Link>
        )
    }

    return (
        <nav>
            <ul className={styles.listNav}>
                {routes.map(r => (
                    <li key={r.link} className={styles.listNavItem}>
                        {renderLink(r)}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default AppNav;
