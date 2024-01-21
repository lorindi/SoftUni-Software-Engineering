import {useAuth} from "../hooks/auth";
import {useCallback, useState} from "react";
import {Button, TextField} from "@mui/material";
import {Navigate} from "react-router-dom";
import {withLayout} from "./base/LayoutPage";

import styles from './LoginPage.module.scss';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginSuccessful, setLoginSuccessful] = useState(false);

    const {
        login,
    } = useAuth();

    const handleLogin = useCallback(
        async () => {
            await login(username, password);
            setLoginSuccessful(true);
        },
        [login, password, username]);

    if (loginSuccessful) {
        return (
            <Navigate to='/'/>
        )
    }

    return (
        <div className={styles.container}>
            <h2>Login</h2>
            <form onSubmit={() => handleLogin()}>
                <div className={styles.row}>
                    <TextField
                        label="Enter username"
                        variant="standard"
                        className={styles.formControl}
                        onChange={(ev) => setUsername(ev.target.value)}/>
                </div>
                <div className={styles.row}>
                    <TextField
                        label="Enter password"
                        variant="standard"
                        type="password"
                        className={styles.formControl}
                        onChange={(ev) => setPassword(ev.target.value)}/>
                </div>

                <div className={styles.row}>
                    <Button
                        variant="contained"
                        onClick={() => handleLogin()}>
                        Login
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default withLayout(LoginPage);